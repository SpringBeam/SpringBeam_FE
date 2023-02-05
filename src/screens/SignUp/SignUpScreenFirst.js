import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

import Header from "../../components/Header";
import Margin from "../../components/Margin";
import SelectButton from "../../components/SelectButton";
import MoveButton from "../../components/MoveButton";

const View = SafeAreaView;

export default SignUpScreenFirst = ({ navigation }) => {
  const [ isTutor, setIsTutor ] = useState(true);

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
      <SelectButton
        text="튜터(선생님)으로"
        role="tutor"
        selected={isTutor}
        isTutor={isTutor}
        setIsTutor={setIsTutor}
      />
      <SelectButton
        text="튜티(학생)으로"
        role="tutee"
        selected={!isTutor}
        isTutor={isTutor}
        setIsTutor={setIsTutor}
      />
      <Margin
        size= {10}
      />
      <ButtonSection
        display="flex"
        flexDirection="row nowrap"
        justifyContent="flex-end"
      >
        <MoveButton
          role="next"
          navigation={navigation}
          address="SignUpScreenSecond"
          data={isTutor}
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