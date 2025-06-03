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
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#d1dbf1',
    borderRadius: 20,
    margin: 20,
  },
  tab: {
    flex: 1,
    paddingVertical: 8,
    borderRadius: 20,
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: '#625B71',
  },
  tabText: {
    fontSize: 16,
    color: '#090909',
  },
  activeTabText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  listContainer: {
    paddingBottom: 20,
  },
  itemBox: {
    backgroundColor: '#f9f9f9',
    padding: 4,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,

  },
  iconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#346a8a',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  itemText: {
    flex: 1,
    fontSize: 16,
  },
});


