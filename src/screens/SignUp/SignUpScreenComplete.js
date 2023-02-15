import React from "react";
import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

import Header from "../../components/Header";
import Margin from "../../components/Margin";
import SignUpComplete from "../../components/SignUp/SignUpComplete";
import SignUpButton from "../../components/SignUp/SignUpButton";
import SignUpInvite from "../../components/SignUp/SignUpInvite";

const View = SafeAreaView;

export default SignUpScreenComplete = ({ navigation }) => {
  return (
    <View>
      <Header
        title="회원가입"
        navigation={navigation}
        back="LoginScreen"
      />
      <Margin size={100} />
      <SignUpComplete/>
      <Margin size={100} />
      <ButtonSection>
        <SignUpButton
          text={"이메일 다시 등록하기"}
        />
      </ButtonSection>
      <Margin size={10} />
      <SignUpInvite />
    </View>
  );
};

const ButtonSection = styled.View`
  marginVertical: 0;
  marginHorizontal: 0;
  paddingVertical: 0;
  paddingHorizontal: 15px; 
`;  