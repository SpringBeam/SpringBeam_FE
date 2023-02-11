import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native";

import Header from "../components/Header";
import Calendar from "../components/Calendar/Calendar";

const View = SafeAreaView;

export default ClassroomScreen = ({navigation}) => {
  return (
    <View>
      <Header 
        title="일정 관리"
        navigation={navigation}
        back="SelectScreen"
      />
      <Calendar />
      <Text>클래스룸 스크린입니다</Text>
    </View>
  );
};
