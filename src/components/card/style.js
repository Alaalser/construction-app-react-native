import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  cardContainer: {
    width: '45%',
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    padding: 10,
    margin: 10,
    backgroundColor: '#fff',
    elevation: 5,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  text: {
    textAlign: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginBottom: 10,
  },
});
