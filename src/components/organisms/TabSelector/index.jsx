import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Text from '../../atoms/Text';
import styles from './style';

export default function TabSelector({ selectedTab, setSelectedTab }) {
  return (
    <View style={styles.tabContainer}>
      <TouchableOpacity
        style={[styles.tab, selectedTab === "basico" && styles.activeTab]}
        onPress={() => setSelectedTab("basico")}
      >
        <Text
          style={[styles.tabText, selectedTab === "basico" && styles.activeTabText]}
        >
          Básico
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tab, selectedTab === "primeiros" && styles.activeTab]}
        onPress={() => setSelectedTab("primeiros")}
      >
        <Text
          style={[styles.tabText, selectedTab === "primeiros" && styles.activeTabText]}
        >
          Primeiros socorros
        </Text>
      </TouchableOpacity>
    </View>
  );
}
