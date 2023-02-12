import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native";
<<<<<<< HEAD
import Header from "../components/Header";
=======

import Header from "../components/Header";
import Calendar from "../components/Calendar/Calendar";

>>>>>>> 268ac2843b122da4a8f39e5668b3f28d24ad6462
const View = SafeAreaView;

export default ClassroomScreen = ({navigation}) => {
  return (
    <View>
<<<<<<< HEAD
      <Header />
=======
      <Header 
        title="일정 관리"
        navigation={navigation}
        back="SelectScreen"
      />
      <Calendar />
>>>>>>> 268ac2843b122da4a8f39e5668b3f28d24ad6462
      <Text>클래스룸 스크린입니다</Text>
    </View>
  );
};
