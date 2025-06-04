import React from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';
import * as Sharing from 'expo-sharing';
import styles from './style';

export default function ModalLocation({ visible, onClose, city, region  }) {
 const handleShare = async () => {
    try {
      const message = `Minha localização atual é: ${city}, ${region}`;
      await Share.share({
        message,
      });
    } catch (error) {
      alert('Erro ao compartilhar localização');
    }
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.title}>Sua Localização Atual</Text>
          <Text style={styles.text}>
            {city}, {region}
          </Text>
          <TouchableOpacity style={styles.button} onPress={onClose}>
            <Text style={styles.buttonText}>Fechar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.shareButton} onPress={handleShare}>
            <Text style={styles.buttonText}>Compartilhar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};