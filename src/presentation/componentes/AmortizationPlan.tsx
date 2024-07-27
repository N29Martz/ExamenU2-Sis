import {Pressable, Text, View} from 'react-native';
import {styles} from '../../config/them';
import {ScrollView} from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Navigation } from '../routes/Navigation';

export const AmortizationPlan = () => {
    const navigation = useNavigation();
    
  return (
    <>
      <View>
        <Pressable onPress={() => navigation.goBack()}>
        </Pressable>
        <View style={styles.tabla}>
          <View style={styles.header}>
            <Text style={styles.headerCell}>No.</Text>
            <Text style={styles.headerCell}>Fecha</Text>
            <Text style={styles.headerCell}>Interés</Text>
            <Text style={styles.headerCell}>Capital</Text>
            <Text style={styles.headerCell}>SVSD</Text>
            <Text style={styles.headerCell}>Interes Moratorio</Text>
            <Text style={styles.headerCell}>Saldo</Text>
          </View>
            <View style={styles.row}>
              <Text style={styles.cell}>01</Text>
              <Text style={styles.cell}>01/01/2022</Text>
              <Text style={styles.cell}>$100.00</Text>
              <Text style={styles.cell}>$500.00</Text>
              <Text style={styles.cell}>$65.00</Text>
              <Text style={styles.cell}>$65.00</Text>
              <Text style={styles.cell}>$10,000.00</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.cell}>01</Text>
              <Text style={styles.cell}>01/01/2022</Text>
              <Text style={styles.cell}>$100.00</Text>
              <Text style={styles.cell}>$500.00</Text>
              <Text style={styles.cell}>$65.00</Text>
              <Text style={styles.cell}>$65.00</Text>
              <Text style={styles.cell}>$10,000.00</Text>
            </View>
        </View>
    </View>
    </>
  );
};
