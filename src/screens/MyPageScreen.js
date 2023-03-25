import React from "react";
import styled from "styled-components";
import { SafeAreaView } from "react-native-safe-area-context";

import Header from "../components/Header";
import Margin from "../components/Margin";
import SubTitle from "../components/Typography/SubTitle";
import ProfileImage from "../components/MyPage/ProfileImage";
import MyInfo from "../components/MyPage/MyInfo";

const View = SafeAreaView;

export default MyPageScreen = ({navigation}) => {
  return (
    <View>
      <Header
        title="마이 페이지" 
        navigation={navigation} 
        back="SelectScreen" 
      />
      <Margin size={20} />
      <SubTitleContainer>
        <SubTitle
          text="MY"
        />
      </SubTitleContainer>
      <Margin size={15} />
      <ProfileImageContainer>
        <ProfileImage />
      </ProfileImageContainer>
      <Margin size={15} />
      <MyInfo 
        name="아무개"
        email="eagle625@naver.com"
        role="Tutor"
      />
    </View>
  );
};

const SubTitleContainer = styled.View`
  display: flex;
  flexDirection: column;
  justifyContent: center;
  alignItems: center;
`;

const ProfileImageContainer = styled.View`
  display: flex;
  flexDirection: column;
  justifyContent: center;
  alignItems: center;
`;