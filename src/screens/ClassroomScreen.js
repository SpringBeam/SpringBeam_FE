import React from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Header from "../components/Header";
import Calendar from "../components/Calendar/Calendar";
import AssignmentButton from "../components/Classroom/AssignmentButton";
import ReviewButton from "../components/Classroom/ReviewButton";
import Margin from "../components/Margin";

const View = SafeAreaView;

export default ClassroomScreen = ({navigation}) => {
  return (
    <View>
      <Header 
        title="일정 관리"
        navigation={navigation}
        back="SelectScreen"
      />
      <ScrollView>
        <Calendar />
        <Margin
          size={15}
        />
        <AssignmentButton />
        <Margin
          size={15}
        />
        <ReviewButton />
        <Margin
          size={80}
        />
      </ScrollView>
    </View>
  );
};