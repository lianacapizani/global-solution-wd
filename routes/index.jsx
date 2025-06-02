import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; 
import SplashScreen from '../screens/Splash';
import Home from '../screens/Home';
import Chat from '../screens/Chat';
import Helping from '../screens/Helping';

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

function TabRoutes() {
  const icons = {
    Inicio: 'home-outline',
    Chat: 'chatbox-outline',
    'Quero Ajudar': 'happy-outline',
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
      })}
    >
      <Tabs.Screen name="Inicio" component={Home} />
      <Tabs.Screen name="Chat" component={Chat} />
      <Tabs.Screen name="Quero Ajudar" component={Helping} />
    </Tabs.Navigator>
  );
}

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Main" component={TabRoutes} />
        <Stack.Screen name="Chat" component={Chat} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
