import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ClassroomScreen from "../screens/ClassroomScreen";
import ReviewNavigator from "./ReviewNavigator";
import AssignmentNavigator from "./AssignmentNavigator"

const Stack = createNativeStackNavigator();

export default ClassroomNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TeacherClassroomScreen"
        component={ClassroomScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ReviewNavigator"
        component={ReviewNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AssignmentNavigator"
        component={AssignmentNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}