import { useFonts, Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import Routes from './src/navigation/Routes';

export default function App(){
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
  });
  
  if (!fontsLoaded) {
    return null; // ou <AppLoading />
  }

  return (
    <Routes/>

  );
};