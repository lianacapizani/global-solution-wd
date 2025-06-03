import { Text as RNText, StyleSheet } from 'react-native';

export default function Text({ children, style, weight = 'regular', ...props }) {
  const fontFamily = weight === 'bold' ? 'Poppins_600SemiBold' : 'Poppins_400Regular';
  return <RNText style={[{ fontFamily }, style]} {...props}>{children}</RNText>;
}
