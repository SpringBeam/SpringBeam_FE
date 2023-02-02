import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignUpScreenFirst from '../screens/SignUp/SignUpScreenFirst';
import SignUpScreenSecond from '../screens/SignUp/SignUpScreenSecond';
import SignUpScreenThird from '../screens/SignUp/SignUpScreenThird';
import SignUpScreenFourth from '../screens/SignUp/SignUpScreenFourth';

const Stack = createNativeStackNavigator();

export default SignUpNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='SignUpScreenFirst' component={SignUpScreenFirst} options={{ headerShown: false}}/>
      <Stack.Screen name='SignUpScreenSecond' component={SignUpScreenSecond} options={{ headerShown: false}}/>
      <Stack.Screen name='SignUpScreenThird' component={SignUpScreenThird} options={{ headerShown: false}}/>
      <Stack.Screen name='SignUpScreenFourth' component={SignUpScreenFourth} options={{ headerShown: false}}/>
    </Stack.Navigator>
  )
}