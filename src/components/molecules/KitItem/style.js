import { StyleSheet } from 'react-native';

export default StyleSheet.create({
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
