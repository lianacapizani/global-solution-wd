import React, { useState } from 'react';
import {  TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { getCityAndState } from '../../../services/locationService';
import ModalLocation from '../ModalLocation';

function LocationButton() { 
const [modalVisible, setModalVisible] = useState(false);
  const [locationData, setLocationData] = useState({ city: '', region: '' });

  const handleLocationPress = async () => {
    const data = await getCityAndState();
    if (data) {
      setLocationData(data);
      setModalVisible(true);
    }
  };

  return (
    <>
      <TouchableOpacity onPress={handleLocationPress} style={{ paddingHorizontal: 10 }}>
        <Ionicons name="location-sharp" size={28} color="#df1106" />
      </TouchableOpacity>
      <ModalLocation
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        city={locationData.city}
        region={locationData.region}
      />
    </>
  );
};

export default LocationButton;
