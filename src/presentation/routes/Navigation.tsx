import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../screens/home/HomeScreen';
import { AmortizationPlan } from '../componentes/AmortizationPlan';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen name="Prestamos Personales" component={HomeScreen} /> */}
      <Stack.Screen name="Plan de Amortiación" component={AmortizationPlan} />
    </Stack.Navigator>
  );
};
