import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StudentsScreen from "../screens/StudentsScreen";
import AddClassroomScreen from "../screens/AddClassroomScreen";


const Stack = createNativeStackNavigator();

export default ClassroomListNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="StudentsScreen"
        component={StudentsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AddClassroomScreen"
        component={AddClassroomScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}