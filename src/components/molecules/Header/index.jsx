import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import styles from './style';


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
      <TouchableOpacity>
        <Ionicons name="location-outline" size={24} color="red" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
