import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f8f8f8',
  },
  logoImage: { 
    width: '35%', 
    height: 80,
    resizeMode: 'contain', 
    alignSelf: 'center', 
  },
  paragraph: {
    marginHorizontal: 10,
    marginBottom: 20,
    fontSize: 14,
    color: '#555',
  },
   circleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
    emergencySection: {
    backgroundColor: '#F3EDF7',
    paddingBottom: 20,
    borderRadius: 20,
  },
});
