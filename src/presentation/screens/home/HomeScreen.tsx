import {Pressable, Text, View} from 'react-native';
import {styles} from '../../../config/them';
import { Navigation } from '../../routes/Navigation';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { LoanForm } from '../../componentes/LoanForm';

export const HomeScreen = () => {

  const Navigation = useNavigation();

  return (
    <View style={styles.formContainer}>
        <LoanForm/>
      </View>
  );
};
