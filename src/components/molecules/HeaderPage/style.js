import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomColor: '#eee',
  },

  headerTitle: {
    flex: 1, 
    fontSize: 18,
    fontWeight: 'bold',
    color: '#f2f2f2',
    textAlign: 'left', 
  },
});
