import React from "react";
import styled from "styled-components";
import { Text } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

import Header from "../../components/Header";
import Margin from "../../components/Margin";
import SignUpTitle from "../../components/SignUpTitle";
import SignUpAgreement from "../../components/SignUpForm/SignUpAgreement";

const View = SafeAreaView;

export default SignUpScreenFourth = ({ navigation }) => {
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
        title='3. 약관 동의하기'
      />
      <Margin
        size={10}
      />
      <SignUpAgreement/>
      <ButtonSection>
        <MoveButton
          role='previous'
          navigation={navigation}
          address='SignUpScreenThird'
        />
        <MoveButton
          role='next'
          navigation={navigation}
          address='SignUpScreenFourth'
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