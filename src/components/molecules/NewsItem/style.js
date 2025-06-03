import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 10,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  headline: {
    fontSize: 16,
  },
  description: {
    color: 'gray',
    fontSize: 14,
  },
  timeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  timeText: {
    marginLeft: 5,
    fontSize: 12,
    color: 'gray',
  },
});
