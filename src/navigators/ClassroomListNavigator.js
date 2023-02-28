import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default ClassroomListNavigator = () => {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        name="SelectScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AddClassScreen"
        component={ReviewNavigator}
        options={{ headerShown: false }}
      /> */}
    </Stack.Navigator>
  );
}