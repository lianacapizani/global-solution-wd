import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import styles from './style';
import LocationButton from '../../atoms/LocationButton';


function Header() { 
  const navigation = useNavigation(); 
  
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Ionicons name="menu-outline" size={24} color="black" />
      </TouchableOpacity>
      <Image
        source={require('../../../../assets/images/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <LocationButton />
    </View>
  );
};

export default Header;
