import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    background: {
      flex: 1,
      backgroundColor: '#FAFAFA',
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 30,
      fontWeight: 'bold',
      color: '#1D242B',
      padding: 20,
      textAlign: 'center',
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: 20,
    },
    mainButon: {
      width: 150,
      height: 50,
      backgroundColor: '#C7B8EA',
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 10,
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 2,
    },
    textButon: {
      color: '#fff',
      fontSize: 20,
      fontWeight: 'semibold',
    },
    tabla:{
        borderWidth: 1,
    borderColor: '#ccc',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: '#f0f0f0',
      },
      headerCell: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000'
      },
      row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
      },
      cell: {
        fontSize: 16,
        color: '#292828'
      },
  });