import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import SignUpNavigator from "./SignUpNavigator";
import TabNavigator from "./TabNavigator";
import HomeScreen from "../screens/HomeScreen";
import ClassroomScreen from "../screens/ClassroomScreen";
const Stack = createNativeStackNavigator();

export default RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreenNavigator"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ClassroomScreen"
        component={ClassroomScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
