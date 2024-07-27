import {Pressable, Text, View} from 'react-native';
import {styles} from '../../../config/them';
import { Navigation } from '../../routes/Navigation';
import { NavigationProp, useNavigation } from '@react-navigation/native';

export const HomeScreen = () => {

  const Navigation = useNavigation();
  return (
    <>
      <View style={styles.background}>
        <Text style={styles.title}>Bienvenido</Text>
        <View style={styles.buttonContainer}>
          <Pressable style={styles.mainButon}>
            <Text style={styles.textButon}>Formulario</Text>
          </Pressable>
          <Pressable style={styles.mainButon}
            onPress={() => {}}>
            <Text style={styles.textButon}>Plan de Pago</Text>
          </Pressable>
        </View>
      </View>
    </>
  );
};
