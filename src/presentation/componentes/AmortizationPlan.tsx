//vista detalle del plan de amortización
import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../../config/them';
import {ScrollView} from 'react-native-gesture-handler';

export const AmortizationPlan = () => {
  return (
    <>
      <View>
      <Text style={styles.title}>Plan de Amortización</Text>
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
        </View>
    </View>
    </>
  );
};
