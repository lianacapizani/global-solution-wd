import React from 'react';
import { Modal, View, Text, TouchableOpacity, Platform, Share } from 'react-native';
import styles from './style';

export default function ModalLocation({ visible, onClose, city, region }) {
  const handleShare = async () => {
    const message = `Minha localização atual é: ${city}, ${region}`;

    try {
      if (Platform.OS === 'web') {
        // No web, usamos o compartilhamento nativo do navegador
        if (navigator.share) {
          await navigator.share({
            title: 'Minha Localização',
            text: message,
          });
        } else {
          // Fallback se o navegador não suportar
          alert(message);
        }
      } else {
        // No mobile, usamos o Share do React Native
        await Share.share({ message });
      }
    } catch (error) {
      alert('Erro ao compartilhar localização');
    }
  };

  return (
    <Modal visible={visible} transparent animationType="fade">
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
}
