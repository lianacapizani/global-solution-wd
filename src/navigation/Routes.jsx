// src/navigation/Routes.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from '../screens/Splash';
import EmergencyKits from '../screens/EmergencyKits';
import TabRoutes from './TabRoutes';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Main" component={TabRoutes} />
        <Stack.Screen name="EmergencyKits" component={EmergencyKits} />
        {/* Outras telas fora das tabs podem ser adicionadas aqui */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
