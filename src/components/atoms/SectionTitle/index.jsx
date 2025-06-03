import React from 'react';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Text from '../Text';
import styles from './style';

export default function SectionTitle({ title }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title} weight="bold">{title}</Text>
      <Ionicons name="arrow-forward" size={20} color="#016DAD" />
    </View>
  );
}
