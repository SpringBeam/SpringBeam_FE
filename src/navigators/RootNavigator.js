import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import TabNavigator from './TabNavigator';

const Stack = createNativeStackNavigator();

export default RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='LoginScreen' component={LoginScreen} options={{ headerShown: false}} />
      <Stack.Screen name='SignUpScreen' component={SignUpScreen} options={{ headerShown: false}} />
      <Stack.Screen name='TabNavigator' component={TabNavigator} options={{ headerShown: false}} />
    </Stack.Navigator>
  );
}