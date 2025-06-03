import React from 'react';
import { View } from 'react-native';
import EmergencyButton from '../../atoms/EmergencyButton';
import styles from './style';

export default function EmergencySection() {
  return (
    <View style={styles.container}>
      <EmergencyButton color="#2A7DC2" label="Defesa Civil" number="199" />
      <EmergencyButton color="#C0392B" label="Bombeiros" number="193" />
      <EmergencyButton color="#D68910" label="SAMU" number="192" />
      <EmergencyButton color="#4D5656" label="Polícia Militar" number="190" />
    </View>
  );
}
