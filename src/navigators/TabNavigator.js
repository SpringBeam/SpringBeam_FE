import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ClassroomListNavigator from "./ClassroomListNavigator";
import MyPageScreen from "../screens/MyPageScreen";
import ClassroomNavigator from "../navigators/ClassroomNavigator";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const TabBar = createBottomTabNavigator();

export default TabNavigator = () => {
  return (
    <TabBar.Navigator>
      <TabBar.Screen
        name="학생 목록"
        component={ClassroomListNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            !focused ? (
              <FontAwesome name="list-ul" size={24} color="#e0e0e0" />
            ) : (
              <FontAwesome name="list-ul" size={24} color="#0c9bfb" />
            ),
        }}
      />

      <TabBar.Screen
        name="강의실"
        component={ClassroomNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            !focused ? (
              <FontAwesome name="address-book" size={24} color="#e0e0e0" />
            ) : (
              <FontAwesome name="address-book" size={24} color="#0c9bfb" />
            ),
        }}
      />
      <TabBar.Screen
        name="마이페이지"
        component={MyPageScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            !focused ? (
              <Ionicons name="person-sharp" size={24} color="#e0e0e0" />
            ) : (
              <Ionicons name="person-sharp" size={24} color="#0c9bfb" />
            ),
        }}
      />
    </TabBar.Navigator>
  );
};
