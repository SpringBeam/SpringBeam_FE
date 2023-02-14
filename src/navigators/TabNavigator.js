import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import SelectScreen from "../screens/SelectScreen";
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
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            !focused ? (
              <FontAwesome name="list-ul" size={24} color="grey" />
            ) : (
              <FontAwesome name="list-ul" size={24} color="black" />
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
              <FontAwesome name="address-book" size={24} color="grey" />
            ) : (
              <FontAwesome name="address-book" size={24} color="black" />
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
              <Ionicons name="person-sharp" size={24} color="grey" />
            ) : (
              <Ionicons name="person-sharp" size={24} color="black" />
            ),
        }}
      />
    </TabBar.Navigator>
  );
};
