import React from 'react';
import { View } from 'react-native';
import Text from '../../components/atoms/Text';

const Fires = () => {
  return (
    <View>
      <Text style={{ fontWeight: 'bold', fontSize: 16, marginBottom: 8 }}>O que fazer em caso de incêndios:</Text>
      <Text>• Mantenha a calma e evacue o local imediatamente.</Text>
      <Text>• Use escadas, nunca elevadores.</Text>
      <Text>• Se houver fumaça, rasteje com um pano molhado no rosto.</Text>
      <Text>• Ligue para o corpo de bombeiros (193) assim que estiver seguro.</Text>
      <Text>• Não tente combater grandes focos de incêndio sozinho.</Text>
    </View>
  );
};

export default Fires;
