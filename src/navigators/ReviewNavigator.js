import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ReviewScreen from "../screens/ReviewScreen";
import ClassroomScreen from "../screens/ClassroomScreen";

const Stack = createNativeStackNavigator();

export default ReviewNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ReviewScreen"
        component={ReviewScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}