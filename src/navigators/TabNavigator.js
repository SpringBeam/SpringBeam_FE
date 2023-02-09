import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import SelectScreen from "../screens/SelectScreen";
import MyPageScreen from "../screens/MyPageScreen";
import ClassroomScreen from "../screens/ClassroomScreen";

const TabBar = createBottomTabNavigator();

export default TabNavigator = () => {
  return (
    <TabBar.Navigator>
      <TabBar.Screen name="HomeScreen" component={HomeScreen} />
      <TabBar.Screen name="SelectScreen" component={SelectScreen} />
      <TabBar.Screen name="ClassroomScreen" component={ClassroomScreen} />
      <TabBar.Screen name="MyPageScreen" component={MyPageScreen} />
    </TabBar.Navigator>
  );
};
