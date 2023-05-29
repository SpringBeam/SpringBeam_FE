import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components/native";

import { getAccessToken } from "../../auth";

import { myInfoAPI } from "../../apis/UserAPI";

import Margin from "../Margin";

export default MyInfo = ({
  name,
  email,
  role,
}) => {

  // API 통신을 위한 AccessToken 불러오기
  const [accessToken, setAccessToken] = useState("");
  useEffect(() => {
    const fetchAccessToken = async () => {
      const token = await getAccessToken();
      setAccessToken(token);
    };
    fetchAccessToken();
  }, []);

  // 사용자 정보 조회 API
  const getUserInfo = async () => {
    try {
      const response = await axios.get("http://ec2-43-201-71-214.ap-northeast-2.compute.amazonaws.com/api/user/detail", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log("response: ", response);
    } catch (error) {
      console.log("error: ", error.message, error);
    }
  };

  useEffect(() => {
    if (accessToken) {
      getUserInfo();
    }
  }, [accessToken]);

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