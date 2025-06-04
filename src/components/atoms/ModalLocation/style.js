import { StyleSheet } from "react-native";

export default StyleSheet.create({
overlay: {
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: 100,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  container: {
    margin: 20,
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#E94600',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 6,
  },
  shareButton: {
    backgroundColor: '#2A2B67',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 6,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
  },
});