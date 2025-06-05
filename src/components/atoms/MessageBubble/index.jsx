import React from 'react';
import { View} from 'react-native';
import Text from '../Text';
import styles from './style';

export default function MessageBubble({ message }) {
  const isUser = message.fromUser;

  return (
    <View style={[styles.bubbleContainer, isUser ? styles.userAlign : styles.botAlign]}>
      <View style={[styles.bubble, isUser ? styles.userBubble : styles.botBubble]}>
        <Text style={styles.messageText}>{message.text}</Text>
      </View>
    </View>
  );
}

