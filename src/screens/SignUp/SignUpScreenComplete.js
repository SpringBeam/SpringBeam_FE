import React from "react";
import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

import Header from "../../components/Header";
import Margin from "../../components/Margin";
import MoveButton from "../../components/SignUp/MoveButton";

const View = SafeAreaView;

export default SignUpScreenComplete = ({ navigation }) => {
  return (
    <View>
      <Header
        title="회원가입"
        navigation={navigation}
        back="LoginScreen"
      />
      <Margin
        size={10}
      />
      <Margin
        size={10}
      />
      \
      <ButtonSection>
        <MoveButton
          role="next"
          text="다음"
          navigation={navigation}
          address="LoginScreen"
        />
      </ButtonSection>
    </View>
  );
};

const ButtonSection = styled.View`
  display: flex;
  flexDirection: row;
  marginVertical: 0;
  marginHorizontal: 0;
  paddingVertical: 0;
  paddingHorizontal: 10px; 
`;