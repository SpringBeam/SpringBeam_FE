import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignUpScreenSelect from '../screens/SignUp/SignUpScreenSelect';
import SignUpScreenFillInfo from '../screens/SignUp/SignUpScreenFillInfo';
// import SignUpScreenOptional from '../screens/SignUp/SignUpScreenOptional';
import SignUpScreenComplete from '../screens/SignUp/SignUpScreenComplete';
import SignUpScreenAgreement from '../screens/SignUp/SignUpScreenAgreement';

const Stack = createNativeStackNavigator();

export default SignUpNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='SignUpScreenSelect' component={SignUpScreenSelect} options={{ headerShown: false}}/>
      <Stack.Screen name='SignUpScreenAgreement' component={SignUpScreenAgreement} options={{ headerShown: false}}/>
      <Stack.Screen name='SignUpScreenFillInfo' component={SignUpScreenFillInfo} options={{ headerShown: false}}/>
      <Stack.Screen name='SignUpScreenComplete' component={SignUpScreenComplete} options={{ headerShown: false}}/>
      {/* <Stack.Screen name='SignUpScreenOptional' component={SignUpScreenOptional} options={{ headerShown: false}}/> */}
    </Stack.Navigator>
  )
}