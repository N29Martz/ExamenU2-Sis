import React, {useCallback, useState} from 'react';
import {Alert, Pressable, Text, TextInput, View} from 'react-native';
import {styles} from '../../config/them';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {AmortizationPlan} from './AmortizationPlan';

interface LoanData {
  amount: number;
  interestRate: number;
  term: number;
  disbursementDate: string;
  commission: number;
}

interface Props {
  onSubmit: (loanData: LoanData) => void;
  shouldClear: boolean;
}

export const LoanForm = ({onSubmit, shouldClear}: Props) => {
  const [amount, setAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [term, setTerm] = useState('');
  const [disbursementDate, setDisbursementDate] = useState('');
  const [commission, setCommission] = useState('');
  const Navigation = useNavigation();

  const clearForm = useCallback(() => {
    setAmount('');
    setInterestRate('');
    setTerm('');
    setDisbursementDate('');
    setCommission('');
  }, []);

  useFocusEffect(
    useCallback(() => {
      if (shouldClear) {
        clearForm();
      }
    }, [shouldClear, clearForm]),
  );

  const handleSubmit = () => {
    const disbursementDateParsed = new Date(disbursementDate);
    if (isNaN(disbursementDateParsed.getTime())) {
      Alert.alert('Error', 'Fecha de desembolso inválida.');
      return;
    }
    const loanData = {
      amount: parseFloat(amount),
      interestRate: parseFloat(interestRate),
      term: parseInt(term),
      disbursementDate,
      commission: parseFloat(commission),
    };
    onSubmit(loanData);
  };

  return (
    <View>
      <Text style={styles.title}>Datos del Préstamo</Text>
      <View style={styles.formContainer}>
        <TextInput
          placeholder="Monto del préstamo"
          value={amount}
          onChangeText={setAmount}
          keyboardType="numeric"
          style={styles.input}
          placeholderTextColor="#45474B"
        />
        <TextInput
          placeholder="Tasa de interés anual (%)"
          value={interestRate}
          onChangeText={setInterestRate}
          keyboardType="numeric"
          style={styles.input}
          placeholderTextColor="#45474B"
        />
        <TextInput
          placeholder="Plazo (en meses)"
          value={term}
          onChangeText={setTerm}
          keyboardType="numeric"
          style={styles.input}
          placeholderTextColor="#45474B"
        />
        <TextInput
          placeholder="Fecha de desembolso (YYYY-MM-DD)"
          value={disbursementDate}
          onChangeText={setDisbursementDate}
          style={styles.input}
          placeholderTextColor="#45474B"
        />
        <TextInput
          placeholder="Comisión (%)"
          value={commission}
          onChangeText={setCommission}
          keyboardType="numeric"
          style={styles.input}
          placeholderTextColor="#45474B"
        />
        <Pressable style={styles.mainButton} onPress={handleSubmit}>
          <Text style={styles.textButton}>Calcular</Text>
        </Pressable>
      </View>
    </View>
  );
};
