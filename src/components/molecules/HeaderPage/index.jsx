import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import styles from './style';

export default function HeaderPage({ titulo, destino }) {
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
        <Ionicons name="arrow-back" size={24} color="#016DAD" />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>{titulo}</Text>
      <View style={{ width: 24 }} /> {/* para alinhar o título no centro */}
    </View>
  );
}
