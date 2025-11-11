import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import styles from "./style";

export default function NativeMapView({
  mapRef,
  localizacao,
  selectedCoordinate,
  endereco,
  buracos,
  isLoading,
  isFetchingAddress,
  handlePressMap,
}) {
  const [MapComponents, setMapComponents] = useState(null);

  useEffect(() => {
    import("react-native-maps").then((mod) => {
      setMapComponents({
        MapView: mod.default,
        Marker: mod.Marker,
      });
    });
  }, []);

  if (!MapComponents) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  const { MapView, Marker } = MapComponents;

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : localizacao?.coords ? (
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
          showsUserLocation
          showsMyLocationButton
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
