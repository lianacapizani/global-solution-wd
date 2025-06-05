import React from 'react';
import { View } from 'react-native';
import Text from '../../components/atoms/Text';

const Earthquakes = () => {
  return (
    <View>
      <Text style={{ fontWeight: 'bold', fontSize: 16, marginBottom: 8 }}>O que fazer durante um terremoto:</Text>
      <Text>• Ajoelhe-se, proteja a cabeça e pescoço e mantenha-se firme.</Text>
      <Text>• Abrigue-se sob móveis resistentes como mesas.</Text>
      <Text>• Afaste-se de janelas, espelhos e objetos pendurados.</Text>
      <Text>• Após o tremor, saia com cuidado – verifique danos estruturais.</Text>
      <Text>• Prepare-se para possíveis réplicas.</Text>
    </View>
  );
};

export default Earthquakes;
