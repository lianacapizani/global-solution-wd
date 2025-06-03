import { StyleSheet } from 'react-native';
//import { Dimensions } from 'react-native';
//const { height } = Dimensions.get('window');

export default StyleSheet.create({
  headerContainer: {
//  height: height * 0.24,
    height: '28%',
    minHeight: 180,
    },

  backgroundContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  imageStyle: {
    resizeMode: 'cover',
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    padding: 24,
    backgroundColor: 'rgba(0, 0, 0, 0.64)', // fundo preto com 40% de opacidade
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 60,
  },
  subtitle: {
    fontSize: 13,
    color: '#fff',
    marginTop: 10,
    marginBottom: 16,
  },
  listContainer: {
    paddingBottom: 20,
  }
});


