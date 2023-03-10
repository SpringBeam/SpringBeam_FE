import React, { useState } from "react";
import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

import Header from "../../components/Header";
import Margin from "../../components/Margin";
import SignUpTitle from "../../components/SignUp/SignUpTitle";
import SignUpAgreement from "../../components/SignUp/SignUpForm/SignUpAgreement";

const View = SafeAreaView;

export default SignUpScreenAgreement = ({ navigation }) => {

  const [ isAgreed, setIsAgreed ] = useState([false, false, false]);

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
        title="1. 약관 동의하기"
      />
      <Margin
        size={10}
      />
      <SignUpAgreement
        isAgreed={isAgreed}
        setIsAgreed={setIsAgreed}
      />
      <Margin
        size={20}
      />
      <ButtonSection>
        <MoveButton
          role="previous"
          text="이전"
          navigation={navigation}
          address="SignUpScreenSelect"
        />
        <MoveButton
          role="next"
          text="다음"
          isAgreed={isAgreed}
          navigation={navigation}
          address="SignUpScreenFillInfo"
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