import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native";
import Header from "../components/Header";
const View = SafeAreaView;

export default () => {
  return (
    <View>
      <Header />
      <Text>클래스룸 스크린입니다</Text>
    </View>
  );
};
