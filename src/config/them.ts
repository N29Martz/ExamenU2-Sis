import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    padding: 20,
  },
  formContainer: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#134B70',
    borderBottomWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#1D242B',
    padding: 20,
    textAlign: 'center',
  },
  mainButon: {
    width: 150,
    height: 50,
    backgroundColor: '#134B70',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 90,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  textButon: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'semibold',
  },
  tabla: {
    borderWidth: 1,
    borderColor: '#201E43',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#134B70',
  },
  headerCell: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#ffffff',
    width: '15%',
    textAlign: 'center',
    padding: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  cell: {
    backgroundColor:'#eeecec',
    fontSize: 16,
    color: '#292828',
    width: '15%',
    textAlign: 'center',
    padding: 5,
  },
});
