import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function CheckIcon({ checked, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Ionicons
        name={checked ? "checkbox" : "square-outline"}
        size={24}
        color="#346a8a"
      />
    </TouchableOpacity>
  );
}
