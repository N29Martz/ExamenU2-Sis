import React from 'react';
import {Pressable, Text, TextInput, View} from 'react-native';
import {styles} from '../../config/them';
import { useNavigation } from '@react-navigation/native';

export const LoanForm = () => {
    const Navigation = useNavigation();
  return (
    <View style={{padding: 20}}>
      <Text style={styles.title}>Datos del Prestamo</Text>
      <View style={styles.background}>
        <TextInput
          placeholder="Monto del préstamo"
          style={styles.input}
          placeholderTextColor="#45474B"
        />
        <TextInput
          placeholder="Tasa de interés anual (%)"
          style={styles.input}
          placeholderTextColor="#45474B"
        />
        <TextInput
          placeholder="Plazo (en meses)"
          style={styles.input}
          placeholderTextColor="#45474B"
        />
        <TextInput
          placeholder="Fecha de desembolso (YYYY-MM-DD)"
          style={styles.input}
          placeholderTextColor="#45474B"
        />
        <TextInput
          placeholder="Comisión (%)"
          style={styles.input}
          placeholderTextColor="#45474B"
        />
      <Pressable style={styles.mainButon}
      onPress={() => Navigation.navigate('AmortizationPlan')}>
        <Text style={styles.textButon}>Calcular</Text>
      </Pressable>
      </View>
    </View>
  );
};
