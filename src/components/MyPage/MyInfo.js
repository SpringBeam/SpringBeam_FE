import React, { useEffect, } from "react";
import styled from "styled-components/native";

import { myInfoAPI } from "../../apis/UserAPI";

import Margin from "../Margin";

export default MyInfo = ({
  name,
  email,
  role,
}) => {

  const getUserInfo = () => {
    myInfoAPI.then((res) => res.data);
  };

  // useEffect(() => {
  //   getUserInfo();
  // }, []);

  return(
    <ProfileContainer>
      <InfoContainer>
        <ContentHeader>
          이름: 
        </ContentHeader>
        <ContentText>
          {name}
        </ContentText>
      </InfoContainer>
      <InfoContainer>
        <ContentHeader>
          이메일: 
        </ContentHeader>
        <ContentText>
          {email}
        </ContentText>
      </InfoContainer>
      <InfoContainer>
        <ContentHeader>
          역할: 
        </ContentHeader>
        <ContentText>
          {role}
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
  color: ${(props) => props.theme['grey_300']};
`;

const ContentText = styled.Text`
  fontSize: 16px;
  fontFamily: "Regular";
  lineHeight: 20px;
  color: ${(props) => props.theme['grey_300']};
`;