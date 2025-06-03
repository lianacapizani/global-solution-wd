import React from 'react';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Text from '../../atoms/Text';
import CheckIcon from '../../atoms/CheckIcon';
import styles from './style';

export default function KitItem({ item, isChecked, toggleItem }) {
  return (
    <View style={styles.itemBox}>
      <View style={styles.iconCircle}>
        <Ionicons name={item.icon} size={20} color="#fff" />
      </View>
      <Text style={styles.itemText}>{item.name}</Text>
      <CheckIcon checked={isChecked} onPress={() => toggleItem(item.name)} />
    </View>
  );
}
