import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/Header";
import Margin from "../../components/Margin";
import AddReviewButton from "../../components/Review/AddReviewButton";
import { Text } from "react-native";
import styled from "styled-components/native";

const View = SafeAreaView;

export default AssignmentListScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <Header title="숙제 노트" navigation={navigation} back="parent" />
      <Margin size={20} />
    <AssignmentList>
      <AssignmentBox><Text>수학 고쟁이 5페이지</Text></AssignmentBox>
      <AssignmentBox><Text>수학 고쟁이 5페이지</Text></AssignmentBox>

      </AssignmentList>
      <AddReviewButton navigation={navigation} />
    </View>
  );
};

const AssignmentBox = styled.View`
width: 366px;
height: 100px;
background: #ffffff;
box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.1);
border-radius: 16px;
margin: 15px;
padding: 5px;
flex-direction: row;
align-items: center;
margin:10px;
`;


const AssignmentList = styled.View`

align-items:center;
`;
