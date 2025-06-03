import React from 'react';
import {  View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import styles from './style';
import Text from '../../atoms/Text';

function HeaderPage({ titulo, destino, color}) {
  const navigation = useNavigation();

  const handlePress = () => {
    if (destino) {
      navigation.navigate(destino);
    } else {
      navigation.goBack();
    }
  };

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={handlePress}>
        <Ionicons name="arrow-back" size={24} color={color} />
      </TouchableOpacity>
      <Text style={[styles.headerTitle, { color }]}>{titulo}</Text>
      <View style={{ width: 24 }} /> 
    </View>
  );
}

export default HeaderPage;
