import React from "react";
import styled from "styled-components/native";
import { Text, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";

import Header from "../../components/Header";
import SignUpTitle from "../../components/SignUpTitle";
import SignUpBasic from "../../components/SignUpForm/SignUpBasic";
import MoveButton from "../../components/MoveButton";

const View = SafeAreaView;

export default SignUpScreenSecond = ({ navigation }) => {
  const signUpType = useSelector((state)=> state.role.role)
  console.log('튜터인가?', signUpType)
  return (
    <View>
      <Header
        title="회원가입"
        navigation={navigation}
        back="LoginScreen"
      />
      <Margin
        size={20}
      />
      <SignUpTitle
        title="2. 사용자 정보 입력하기"
      />
      <SignUpBasic />
      <Margin
        size={10}
      />
      <ButtonSection
        display="flex"
      >
        <MoveButton
          role="previous"
          text="이전"
          navigation={navigation}
          address="SignUpScreenAgreement"
        />
        <MoveButton
          role="next"
          text="제출"
          navigation={navigation}
          address="SignUpScreenComplete"
        />
      </ButtonSection>
    </View>
  );
};

const ButtonSection = styled.View`
  display: flex;
  flexDirection: row;
  justifyContent: space-between;
  marginVertical: 0;
  marginHorizontal: 0;
  paddingVertical: 0;
  paddingHorizontal: 10px; 
`;