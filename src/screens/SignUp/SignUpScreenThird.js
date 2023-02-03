import React from 'react';
import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Header from '../../components/Header';
import SignUpTitle from '../../components/SignUpTitle';
import MoveButton from '../../components/MoveButton';
import Margin from '../../components/Margin';

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
        title='2. 몰라'
      />
      <Margin
        size={10}
      />
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