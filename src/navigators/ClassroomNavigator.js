import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ClassroomScreen from "../screens/ClassroomScreen";

const Stack = createNativeStackNavigator();

export default ClassroomNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TeacherClassroomScreen"
        component={ClassroomScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}