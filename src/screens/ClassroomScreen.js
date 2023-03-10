import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import StudentProfile from "../components/Classroom/StudentProfile";
import Calendar from "../components/Calendar/Calendar";
import Margin from "../components/Margin";
import AssignmentNoteBtn from "../components/Classroom/AssignmentNoteBtn";
import styled from "styled-components";
const View = SafeAreaView;

export default ClassroomScreen = ({ navigation }) => {
  const onPressHandler = () => {
    console.log("버튼 눌림");
    navigation.navigate("ReviewNavigator");
  };
  return (
    <View>
      <Header title="일정 관리" navigation={navigation} back="SelectScreen" />

      <StudentProfile />
      <Calendar />
      <BtnView>
        <BtnContainer onPress={() => onPressHandler()}>
          <BtnText>복습노트</BtnText>
        </BtnContainer>
        <BtnContainer onPress={() => onPressHandler()}>
          <BtnText>숙제노트</BtnText>
        </BtnContainer>
      </BtnView>
    </View>
  );
};
const BtnContainer = styled.TouchableOpacity`
  color: white;
  background-color: #0c9bfb;
  border-radius: 12px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 10px;

  width: 50%;
`;

const BtnText = styled.Text`
  font-weight: 500;
  font-size: 25px;
  color: #ffffff;
`;

const BtnView = styled.View`
  flex-direction: row;
  margin: 15px;
`;
