import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AssignmentListScreen from "../screens/Assignment/AssignmentListScreen";
import AddAssignmentScreen from "../screens/Assignment/AddAssignmentScreen";
const Stack = createNativeStackNavigator();

export default AssignmentNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AssignmentListScreen"
        component={AssignmentListScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AddAssignmentScreen"
        component={AddAssignmentScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}