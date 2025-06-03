import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import Text from '../Text';
import styles from './style';

export default function CircleButton({image, label, onPress }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Image source={image} style={styles.image} />
      </TouchableOpacity>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}
