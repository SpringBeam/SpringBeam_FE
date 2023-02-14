import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ReviewScreen from "../screens/ReviewScreen";
import AddReviewScreen from "../screens/AddReviewScreen";

const Stack = createNativeStackNavigator();

export default ReviewNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ReviewScreen"
        component={ReviewScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AddReviewScreen"
        component={AddReviewScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}