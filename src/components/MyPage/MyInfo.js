import React from "react";
import styled from "styled-components";

import Margin from "../Margin";

export default MyInfo = () => {
  return(
    <ProfileContainer>
      <InfoContainer>
        <ContentHeader>
          이름: 
        </ContentHeader>
        <ContentText>
          홍길동
        </ContentText>
      </InfoContainer>
      <InfoContainer>
        <ContentHeader>
          이메일: 
        </ContentHeader>
        <ContentText>
          eagle625@naver.com
        </ContentText>
      </InfoContainer>
      <InfoContainer>
        <ContentHeader>
          역할: 
        </ContentHeader>
        <ContentText>
          학생
        </ContentText>
      </InfoContainer>
    </ProfileContainer>
  );
};

const ProfileContainer = styled.View`
  display: flex;
  flexDirection: column;
  marginHorizontal: 20px;
  paddingVertical: 12px;
  borderRadius: 12px;
  backgroundColor: #fff;
`;

const InfoContainer = styled.View`
  marginVertical: 8px;
  marginHorizontal: 15px;
  display: flex;
  flexDirection: row;
  justifyContent: space-between;
  alignItems: center;
`;

const ContentHeader = styled.Text`
  fontSize: 16px;
  fontFamily: "Bold";
  lineHeight: 20px;
`;

const ContentText = styled.Text`
  fontSize: 16px;
  fontFamily: "Regular";
  lineHeight: 20px;
`;