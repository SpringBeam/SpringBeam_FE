import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";

import store from "./src/store/store";
import { theme } from "./src/global/theme/theme";
import RootNavigator from "./src/navigators/RootNavigator";

SplashScreen.preventAutoHideAsync();

Font.loadAsync({
  Light: require("./src/global/fonts/NanumSquareL.ttf"),
  Regular: require("./src/global/fonts/NanumSquareR.ttf"),
  Medium: require("./src/global/fonts/NanumSquare.ttf"),
  Bold: require("./src/global/fonts/NanumSquareB.ttf"),
  ExtraBold: require("./src/global/fonts/NanumSquareEB.ttf"),
});

export default function App() {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hideAsync();
    }, 2000);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <Provider store={store}>
          <NavigationContainer>
            <RootNavigator />
          </NavigationContainer>
        </Provider>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
