import * as React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

export default function App() {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hideAsync();
    }, 2000);
  }, []);


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='LoginScreen' component={LoginScreen} />
        <Stack.Screen name='SignUpScreen' component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
```