import React, { useState, useEffect, useRef } from "react";
import { View, Text, Alert, Platform } from "react-native";
import styles from "./style";
import { ref, set, push, onValue } from "firebase/database";
import { realtimeDB } from "../../services/firebaseConfig";
import * as Location from "expo-location";

let NativeMapView = null;
if (Platform.OS !== "web") {
  NativeMapView = require("./NativeMapView").default;
}

function Map() {
  const [localizacao, setLocalizacao] = useState(null);
  const [selectedCoordinate, setSelectedCoordinate] = useState(null);
  const [endereco, setEndereco] = useState(null);
  const [buracos, setBuracos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isFetchingAddress, setIsFetchingAddress] = useState(false);
  const mapRef = useRef(null);

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
    if (Platform.OS === "web") return;

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

    return () => subscription?.remove();
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

  if (Platform.OS === "web") {
    return (
      <View
        style={[
          styles.container,
          { justifyContent: "center", alignItems: "center" },
        ]}
      >
        <Text style={{ textAlign: "center", padding: 20 }}>
          🌐 O mapa não está disponível na versão web.
          {"\n"}
          Abra o app no Android ou iOS para visualizar o mapa interativo.
        </Text>
      </View>
    );
  }

  return (
    <NativeMapView
      mapRef={mapRef}
      localizacao={localizacao}
      selectedCoordinate={selectedCoordinate}
      endereco={endereco}
      buracos={buracos}
      isLoading={isLoading}
      isFetchingAddress={isFetchingAddress}
      handlePressMap={handlePressMap}
    />
  );
}

export default Map;
