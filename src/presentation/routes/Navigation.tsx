import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../screens/home/HomeScreen';
import {AmortizationPlan} from '../componentes/AmortizationPlan';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen name="Calculo de Amortización" component={HomeScreen}/>
        <Stack.Screen name="AmortizationPlan" component={AmortizationPlan} />
      </Stack.Navigator>
    </>
  );
};
