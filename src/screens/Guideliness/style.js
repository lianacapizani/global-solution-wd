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
    backgroundColor: 'rgba(0, 0, 0, 0.64)',
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
    justifyContent: 'space-around',
    backgroundColor: '#d1dbf1',
    paddingVertical: 2,
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderBottomWidth: 3,
    borderBottomColor: 'transparent',
  },
  activeTab: {
    borderBottomColor: '#346c9a',
  },
  tabText: {
    color: '#333',
    fontWeight: '300',
  },
  activeTabText: {
    color: '#346c9a',
    fontWeight: 'bold',
    fontSize: 15 ,
  },
  contentContainer: {
    padding: 16,
  },
});


