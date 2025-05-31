import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 320,
    height: 320,
    marginBottom: 32,
    marginTop: -160, //PUXAR A LOGO
  },
  slogan: {
    textAlign: 'center',
    fontSize: 16,
    color: '#000',
    lineHeight: 24,
    paddingHorizontal: 80,
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    textAlign: 'center',
    fontSize: 12,
    color: '#999',
    paddingHorizontal: 20,
  },
});