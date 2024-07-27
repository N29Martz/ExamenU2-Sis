import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 0,
  },
  formContainer: {
    marginBottom: 20,
    backgroundColor: '#f8f9fa',
    padding: 10,
  },
  input: {
    height: 40,
    borderColor: '#134B70',
    borderBottomWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    color: 'black',
    fontSize: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1D242B',
    padding: 20,
    textAlign: 'center',
  },
  mainButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#134B70',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  textButton: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'semibold',
  },
  backButton: {
    marginBottom: 16,
  },
  backButtonText: {
    color: '#007BFF',
    fontSize: 16,
  },
  tabla: {
    borderWidth: 1,
    borderColor: '#201E43',
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#134B70',
    alignItems: 'center',
  },
  headerCell: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
    width: 100,
    textAlign: 'center',
    padding: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
  },
  cell: {
    flex: 1,
    backgroundColor: '#e3e2e2',
    fontSize: 16,
    color: '#000000',
    width: 100, 
    textAlign: 'center',
    padding: 9,
  },
});
