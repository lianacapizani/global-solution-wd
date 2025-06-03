import React from 'react';
import { View,TouchableOpacity } from 'react-native';
import Text from '../Text';
import styles from './style';
import { Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function EmergencyButton({ color, label, number }) {
  const handlePress = () => {
    Linking.openURL(`tel:${number}`);
  };

  return (
<TouchableOpacity style={[styles.button, { backgroundColor: color }]} onPress={handlePress}>
  <Text style={styles.label} weight="bold">{label}</Text>
  
  <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
    <Ionicons name="call-outline" size={20} color="#fff" style={{ marginRight: 8 }} />
    <Text style={styles.number} weight="bold">{number}</Text>
  </View>
</TouchableOpacity>

  );
}
