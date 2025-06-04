import * as Location from 'expo-location';
import { Alert } from 'react-native';

export async function getCityAndState() {
  try {
    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== 'granted') {
      Alert.alert('Permissão negada', 'Habilite a localização para continuar.');
      return null;
    }

    const location = await Location.getCurrentPositionAsync({});
    const { latitude, longitude } = location.coords;

    const reverseGeocode = await Location.reverseGeocodeAsync({ latitude, longitude });

    if (reverseGeocode.length > 0) {
      const { city, region } = reverseGeocode[0];
      return { city, region };
    }

    return null;
  } catch (error) {
    console.error('Erro ao obter localização:', error);
    Alert.alert('Erro', 'Não foi possível encontrar a localização.');
    return null;
  }
}
