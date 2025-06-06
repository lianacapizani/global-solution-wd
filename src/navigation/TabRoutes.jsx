// src/navigation/TabRoutes.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Home from '../screens/Home';
import Chat from '../screens/Chat';
import Guideliness from '../screens/Guideliness';
import Map from '../screens/Map';

const Tabs = createBottomTabNavigator();

export default function TabRoutes() {
  const icons = {
    Inicio: 'home-outline',
    Chat: 'chatbox-outline',
    'Quero Ajudar': 'happy-outline',
    Mapa: 'map-outline',
  };

  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          const iconName = icons[route.name];
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#E94600',
        tabBarInactiveTintColor: 'gray',
        title:
        route.name === 'Inicio'
          ? 'Início'
          : route.name === 'Chat'
          ? 'Bate-papo'
          : route.name === 'Mapa'
          ? 'Mapa'
          : 'Quero Ajudar'
      })}
    >
      <Tabs.Screen name="Inicio" component={Home} />
      <Tabs.Screen name="Chat" component={Chat} />
      <Tabs.Screen name="Quero Ajudar" component={Guideliness} />
      <Tabs.Screen name="Mapa" component={Map} />
    </Tabs.Navigator>
  );
}
