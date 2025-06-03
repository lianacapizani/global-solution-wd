import React from 'react';
import {  TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

function LocationButton() { 
  const navigation = useNavigation(); 

  return (
      <TouchableOpacity>
        <Ionicons name="location-sharp" size={28} color="#df1106"/>
      </TouchableOpacity>
  );
};

export default LocationButton;
