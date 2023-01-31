import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SelectScreen from '../screens/SelectScreen';
import ManageScreen from '../screens/ManageScreen';
import MyPageScreen from '../screens/MyPageScreen';

const TabBar = createBottomTabNavigator();

export default TabNavigator = () => {
  return (
    <TabBar.Navigator>
      <TabBar.Screen name='HomeScreen' component={HomeScreen} />
      <TabBar.Screen name='SelectScreen' component={SelectScreen} />
      <TabBar.Screen name='ManageScreen' component={ManageScreen} />
      <TabBar.Screen name='MyPageScreen' component={MyPageScreen} />
    </TabBar.Navigator>
  );
}