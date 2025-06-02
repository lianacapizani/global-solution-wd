import React, { useEffect } from 'react';
import { Image, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './style';
import Text from '../../src/components/atoms/Text';

function SplashScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Main');
    }, 2000); // 2 segundos

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.slogan} weight="semi-bold">
        "Informar, proteger e agir. Porque cada segundo conta."
      </Text>
      <Text style={styles.footer}>
        © 2025 AvisaJá. Todos os direitos reservados.
      </Text>
    </View>
  );
}

export default SplashScreen;
