import { StyleSheet } from 'react-native';

export default StyleSheet.create({
container: {
    alignItems: 'center', 
    marginHorizontal: 8
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 50,        
    resizeMode: 'cover',  
    backgroundColor: '#d7dee1',
  },
  label: {
    marginTop: 6,
    color: '#000',         
    fontSize: 11,
    textAlign: 'center',
    maxWidth: 80,
  },

});
