import React from 'react';
import { View, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Text from '../../atoms/Text';
import styles from './style';

export default function NewsItem({ image, headline, description, time }) {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.headline} weight="bold">{headline}</Text>
        <Text style={styles.description}>{description}</Text>
        <View style={styles.timeRow}>
          <Ionicons name="today" size={16} color="gray" />
          <Text style={styles.timeText}>{time}</Text>
        </View>
      </View>
    </View>
  );
}
