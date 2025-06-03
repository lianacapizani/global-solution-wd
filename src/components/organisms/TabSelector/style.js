import { StyleSheet } from 'react-native';

export default StyleSheet.create({
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
});
