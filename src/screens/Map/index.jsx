import React, { useState, useEffect, useRef } from 'react';
import { View, Text, ActivityIndicator, Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { ref, set, push, onValue } from "firebase/database";
import { realtimeDB  } from "../../services/firebaseConfig";
import * as Location from 'expo-location';

import styles from './style';

function Map({ navigation }) {
  const [localizacao, setLocalizacao] = useState(null);
  const mapRef = useRef(null);
  const [selectedCoordinate, setSelectedCoordinate] = useState(null);
  const [endereco, setEndereco] = useState(null);
  const [buracos, setBuracos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isFetchingAddress, setIsFetchingAddress] = useState(false);

  const formatarData = (timestamp) => {
    const data = new Date(timestamp);
    return data.toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" });
  };

  const getAddressFromCoordinates = async (coordinate) => {
    try {
      setIsFetchingAddress(true);
      const [result] = await Location.reverseGeocodeAsync(coordinate);
      const formattedAddress = `${result.street}, ${result.subregion}, ${result.region}`;
      setEndereco(formattedAddress);
      return formattedAddress;
    } catch (error) {
      console.error("Erro ao obter endereço:", error);
      setEndereco("Erro ao obter endereço");
      return null;
    } finally {
      setIsFetchingAddress(false);
    }
  };

  const handlePressMap = async (e) => {
    const { coordinate } = e.nativeEvent;
    setSelectedCoordinate(coordinate);

    const enderecoObtido = await getAddressFromCoordinates(coordinate);
    if (!enderecoObtido) return;

    const timestamp = Date.now();
    const dataFormatada = formatarData(timestamp);

    Alert.alert(
      "Confirmar Ocorrência",
      `Deseja adicionar uma ocorrência na localização: ${enderecoObtido}?`,
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Adicionar",
          onPress: () => {
            const newBuracoRef = push(ref(realtimeDB, "buracos"));
            set(newBuracoRef, {
              latitude: coordinate.latitude,
              longitude: coordinate.longitude,
              endereco: enderecoObtido,
              timestamp,
              dataFormatada,
            });
          },
        },
      ]
    );
  };

  async function requestLocationPermissions() {
    setIsLoading(true);
    const { granted } = await Location.requestForegroundPermissionsAsync();
    if (granted) {
      const currentPosition = await Location.getCurrentPositionAsync();
      setLocalizacao(currentPosition);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    requestLocationPermissions();
  }, []);

  useEffect(() => {
    let subscription = null;
    (async () => {
      subscription = await Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.Highest,
          timeInterval: 1000,
          distanceInterval: 1,
        },
        (response) => {
          setLocalizacao(response);
          if (mapRef.current) {
            mapRef.current.animateCamera({ center: response.coords });
          }
        }
      );
    })();

    return () => {
      if (subscription) subscription.remove();
    };
  }, []);

  useEffect(() => {
    const buracosRef = ref(realtimeDB, "buracos");
    onValue(buracosRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const buracosArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setBuracos(buracosArray);
      }
    });
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : localizacao && localizacao.coords ? (
        <MapView
          ref={mapRef}
          style={styles.map}
          initialRegion={{
            latitude: localizacao.coords.latitude,
            longitude: localizacao.coords.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
          onPress={handlePressMap}
          showsUserLocation={true}
          showsMyLocationButton={true}
          mapType="satellite"
        >
          {selectedCoordinate && (
            <Marker
              coordinate={selectedCoordinate}
              title="Buraco"
              description={endereco || "Endereço não disponível"}
            />
          )}
          {buracos.map((buraco) => (
            <Marker
              key={buraco.id}
              coordinate={{
                latitude: buraco.latitude,
                longitude: buraco.longitude,
              }}
              title="Buraco"
              description={buraco.dataFormatada}
            />
          ))}
        </MapView>
      ) : (
        <Text>Localização não disponível</Text>
      )}

      {isFetchingAddress && <ActivityIndicator size="small" color="#ff0000" />}
      {endereco && (
        <View style={styles.enderecoContainer}>
          <Text style={styles.enderecoText}>{endereco}</Text>
        </View>
      )}
    </View>
  );
}

export default Map;
