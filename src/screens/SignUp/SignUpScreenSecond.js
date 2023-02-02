import React from "react";
import styled from 'styled-components/native';
import { Text, Button } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

import Header from "../../components/Header";
import SignUpTitle from "../../components/SignUpTitle";
import SignUpBasic from "../../components/SignUpForm/SignUpBasic";
import MoveButton from "../../components/MoveButton";

const View = SafeAreaView;

export default SignUpScreenSecond = ({ navigation }) => {
  return (
    <View>
      <Header
        title='회원가입'
        navigation={navigation}
        back='LoginScreen'
      />
      <Margin
        size={20}
      />
      <SignUpTitle
        title='1. 로그인 정보 기입하기'
      />
      <SignUpBasic />
      <Margin
        size={10}
      />
      <ButtonSection
        display='flex'
        flexDirection='row'
        justifyContent='space-between'
      >
        <MoveButton
          role='previous'
          navigation={navigation}
          address='SignUpScreenFirst'
        />
        <MoveButton
          role='next'
          navigation={navigation}
          address='SignUpScreenThird'
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