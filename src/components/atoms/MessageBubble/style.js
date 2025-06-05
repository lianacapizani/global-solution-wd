import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  bubbleContainer: {
    marginVertical: 4,
    maxWidth: '80%',
  },
  userAlign: {
    alignSelf: 'flex-end',
  },
  botAlign: {
    alignSelf: 'flex-start',
  },
  bubble: {
    padding: 10,
    borderRadius: 20,
  },
  userBubble: {
    backgroundColor: 'rgb(239, 222, 222)',
  },
  botBubble: {
    backgroundColor: 'rgb(189, 208, 234)',
  },
  messageText: {
    color: '#000',
  },
});
