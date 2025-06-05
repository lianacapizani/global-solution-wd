import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  topBar: {
    paddingLeft: 20,
  },
  clearButton: {
  alignSelf: 'flex-end',
  marginHorizontal: 20,
  marginBottom: 8,
  paddingHorizontal: 12,
},
clearButtonText: {
  color: '#ff3b30',
  fontWeight: 'bold',
textDecorationLine: 'underline'
},
  messagesContainer: {
    padding: 16,
    paddingBottom: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 12,
    backgroundColor: 'rgb(224, 224, 224)',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginRight: 8,
    fontSize: 16,
  },
  sendButton: {
    backgroundColor: '#346a8a',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 25,
  },
  sendButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  quickRepliesContainer: {
  flexDirection: 'row',
  flexWrap: 'wrap',
  paddingHorizontal: 16,
  paddingVertical: 8,
  borderBottomWidth: 1,
  borderBottomColor: '#ddd',
  justifyContent: 'center',
},

replyButton: {
  backgroundColor: 'rgb(255, 255, 255)',
  color: '#000',
  paddingHorizontal: 12,
  paddingVertical: 8,
  borderRadius: 15,
  borderWidth: 1,
  borderColor: '#ddd',
  margin: 4,
},

replyButtonText: {
  color: 'rgb(71, 71, 71)',
  fontWeight: '600',
  fontSize: 14,
},

});
