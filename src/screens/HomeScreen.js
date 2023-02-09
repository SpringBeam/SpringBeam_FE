import React from "react";
import { Text, Button, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StudentData } from "../components/Home/StudentData";
import Header from "../components/Header";
import Margin from "../components/Margin";
import StudentList from "../components/Home/StudentList";

const View = SafeAreaView;

export default HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Header title="학생 목록" navigation={navigation} back="LoginScreen" />
      <Margin size={10} />
      <StudentList data={StudentData} />
    </View>
  );
};
