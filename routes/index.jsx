import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; 
import SplashScreen from '../screens/Splash';
import Home from '../screens/Home';
import EmergencyKits from '../screens/EmergencyKits';
import Chat from '../screens/Chat';
import Guideliness from '../screens/Guideliness';

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
         title: route.name === 'Inicio' ? 'Início' : route.name === 'Chat' ? 'Bate-papo' : 'Quero Ajudar',
      })}
    >
      <Tabs.Screen name="Inicio" component={Home} />
      <Tabs.Screen name="Chat" component={Chat} />
      <Tabs.Screen name="Quero Ajudar" component={Guideliness} />
    </Tabs.Navigator>
  );
}

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen}  options={{ title: 'Carregando...' }}/>
        <Stack.Screen name="Main" component={TabRoutes}  options={{ title: 'Alerta Já' }}/>
          <Stack.Screen name="Inicio" component={Home} options={{ title: 'Início' }}/>
        <Stack.Screen name="EmergencyKits" component={EmergencyKits}  options={{ title: 'Kits de Emergência' }} />
        <Stack.Screen name="Guideliness" component={Guideliness}  options={{ title: 'Guias' }} />
        <Stack.Screen name="Chat" component={Chat} options={{ title: 'Bate-papo' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
