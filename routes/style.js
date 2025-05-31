import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; 
import SplashScreen from '../screens/Splash';
import Login from '../screens/Login';
import Home from '../screens/Home';
import Cadastro from '../screens/Cadastro';
import Favorites from '../screens/Favorites';
import Categories from '../screens/Categories';
import Perfil from '../screens/Perfil';

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

function TabRoutes() {
  const icons = {
    Inicio: 'home-outline',
    Favoritos: 'heart-outline',
    Categorias: 'grid-outline',
    Perfil: 'person-outline',
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
      <Tabs.Screen name="Favoritos" component={Favorites} />
      <Tabs.Screen name="Categorias" component={Categories} />Text
      <Tabs.Screen name="Perfil" component={Perfil} />
    </Tabs.Navigator>
  );
}

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Main" component={TabRoutes} />
        <Stack.Screen name="Perfil" component={Perfil} />
        <Stack.Screen name="Favoritos" component={Favorites} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
