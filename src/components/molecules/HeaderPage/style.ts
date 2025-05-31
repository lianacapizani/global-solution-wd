import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },

  headerTitle: {
    flex: 1, // Faz o texto ocupar o espaço entre os dois ícones
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1D1E4C',
    textAlign: 'center', // Centraliza o texto dentro do espaço
  },
});
