import React from 'react';
import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Header from '../../components/Header';
import SignUpTitle from '../../components/SignUp/SignUpTitle';
import MoveButton from '../../components/SignUp/MoveButton';
import Margin from '../../components/Margin';
import SignUpTutor from '../../components/SignUp/SignUpForm/SignUpTutor';
import SignUpTutee from '../../components/SignUp/SignUpForm/SignUpTutee';

const View = SafeAreaView;

export default SignUpScreenThird = ({ navigation }) => {
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
        title='2. 선생님 정보 기입하기'
      />
      <Margin
        size={10}
      />
      <SignUpTutor/>
      {/* <SignUpTutee/> */}
      <ButtonSection
        display='flex'
      >
        <MoveButton
          role='previous'
          navigation={navigation}
          address='SignUpScreenSecond'
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