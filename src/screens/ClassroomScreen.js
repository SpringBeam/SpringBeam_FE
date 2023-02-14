import React from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Header from "../components/Header";
import StudentProfile from "../components/Classroom/StudentProfile";
import Calendar from "../components/Calendar/Calendar";
import AssignmentButton from "../components/Classroom/AssignmentButton";
import ReviewButton from "../components/Classroom/ReviewButton";
import Margin from "../components/Margin";

const View = SafeAreaView;

export default ClassroomScreen = ({ navigation }) => {
  return (
    <View>
      {/* 헤더 부분 (고정) */}
      <Header title="일정 관리" navigation={navigation} back="SelectScreen" />

      {/* 콘텐츠 부분 (스크롤 가능) */}
      <ScrollView>
        <StudentProfile />
        <Margin size={15} />
        <Calendar />
        <Margin size={15} />
        <AssignmentButton />
        <Margin size={15} />
        <ReviewButton 
          navigation={navigation}
          next="ReviewNavigator"
        />
        <Margin size={80} />
      </ScrollView>
    </View>
  );
};
