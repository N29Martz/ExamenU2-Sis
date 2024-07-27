import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { styles } from '../../config/them';
import { RouteProp, useRoute } from '@react-navigation/native';

type RouteParams = {
  AmortizationPlan: {
    plan: Array<{
      month: number;
      date: string;
      payment: number;
      principal: number;
      interest: number;
      balance: number;
      svsd: number;
      totalPayment: number;
      overdueInterest: number;
    }> | null;
  };
};

export const AmortizationPlan = () => {
  const route = useRoute<RouteProp<RouteParams, 'AmortizationPlan'>>();
  const { plan } = route.params;

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <View>
          <View style={styles.header}>
            <Text style={styles.headerCell}>No. Mes</Text>
            <Text style={styles.headerCell}>Fecha</Text>
            <Text style={styles.headerCell}>Cuota nivelada</Text>
            <Text style={styles.headerCell}>Interés</Text>
            <Text style={styles.headerCell}>Capital</Text>
            <Text style={styles.headerCell}>SVSD</Text>
            <Text style={styles.headerCell}>Cuota Total</Text>
            <Text style={styles.headerCell}>Interés Moratorio</Text>
            <Text style={styles.headerCell}>Saldo</Text>
          </View>
          <ScrollView>
            {Array.isArray(plan) &&
              plan.map((payment, index) => (
                <View key={index} style={styles.row}>
                  <Text style={styles.cell}>{payment.month}</Text>
                  <Text style={styles.cell}>{payment.date}</Text>
                  <Text style={styles.cell}>${payment.payment.toFixed(2)}</Text>
                  <Text style={styles.cell}>${payment.interest.toFixed(2)}</Text>
                  <Text style={styles.cell}>${payment.principal.toFixed(2)}</Text>
                  <Text style={styles.cell}>${payment.svsd.toFixed(2)}</Text>
                  <Text style={styles.cell}>${payment.totalPayment.toFixed(2)}</Text>
                  <Text style={styles.cell}>${payment.overdueInterest.toFixed(2)}</Text>
                  <Text style={styles.cell}>${payment.balance.toFixed(2)}</Text>
                </View>
              ))}
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};
