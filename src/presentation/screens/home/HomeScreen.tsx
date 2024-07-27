import {Pressable, Text, View} from 'react-native';
import {styles} from '../../../config/them';
import { Navigation } from '../../routes/Navigation';
import { NavigationProp, useFocusEffect, useNavigation } from '@react-navigation/native';
import { LoanForm } from '../../componentes/LoanForm';
import { useLoanCalculator } from '../../hook/useLoanCalculator';
import React, { useCallback, useState } from 'react';
import { AmortizationPlan } from '../../componentes/AmortizationPlan';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  AmortizationPlan: { plan: any[] };
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'AmortizationPlan'>;

export const HomeScreen = () => {

  const {amortizationPlan, calculateLoan} = useLoanCalculator();
  const Navigation = useNavigation();
  const [shouldClearForm, setShouldClearForm] = React.useState(false);

  useFocusEffect(
    useCallback(() =>{
      if (shouldClearForm) {
        setShouldClearForm(false);
      }
    }, [shouldClearForm])
  );

  const handleCalculateLoan = (loanData) => {
    const plan = calculateLoan(loanData);
    Navigation.navigate('AmortizationPlan', { plan });
    setShouldClearForm(true);
  };

  return (
    <View style={styles.formContainer}>
      <LoanForm onSubmit={handleCalculateLoan} shouldClear={shouldClearForm}/>
    </View>
  );
};
