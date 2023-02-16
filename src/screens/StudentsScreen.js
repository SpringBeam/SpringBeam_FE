import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StudentData } from "../components/Home/StudentData";
import Header from "../components/Header";
import Margin from "../components/Margin";
import StudentList from "../components/Home/StudentList";
import { useState } from "react";
const View = SafeAreaView;

export default StudentsScreen = ({ navigation }) => {
  return (
    <View>
      <Header title="학생 목록" navigation={navigation} back="LoginScreen" />
      <Margin size={10} />
      <StudentList data={StudentData} />
    </View>
  );
};
