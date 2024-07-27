import React, {useCallback, useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useLoanCalculator} from '../../hook/useLoanCalculator';
import {LoanForm} from '../../componentes/LoanForm';
import {styles} from '../../../config/them';

type RootStackParamList = {
  AmortizationPlan: {plan: any[]}; 
};

type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'AmortizationPlan'
>;

export const HomeScreen = () => {
  const {calculateLoan} = useLoanCalculator();
  const navigation = useNavigation<NavigationProp>();
  const [shouldClearForm, setShouldClearForm] = useState(false);

  useFocusEffect(
    useCallback(() => {
      if (shouldClearForm) {
        setShouldClearForm(false);
      }
    }, [shouldClearForm]),
  );

  const handleCalculateLoan = (loanData: any) => {
    const plan = calculateLoan(loanData);
    navigation.navigate('AmortizationPlan', {plan});
    setShouldClearForm(true);
  };

  return (
    <View style={styles.formContainer}>
      <LoanForm onSubmit={handleCalculateLoan} shouldClear={shouldClearForm} />
    </View>
  );
};
