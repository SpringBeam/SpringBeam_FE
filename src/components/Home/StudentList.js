import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { ScrollView, View } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { Ionicons, AntDesign } from "@expo/vector-icons";

import { getAccessToken } from "../../auth";

const bottomSpace = getBottomSpace();

export default (props) => {
  const [studentList, setStudentList] = useState([]);

  // API 통신을 위한 AccessToken 불러오기
  const [accessToken, setAccessToken] = useState("");
  useEffect(() => {
    const fetchAccessToken = async () => {
      const token = await getAccessToken();
      setAccessToken(token);
      console.log("받은 액세스 토큰: ", accessToken);
    };

    fetchAccessToken();
    getStudentList();
  }, [accessToken]);

  // 수업 목록 조회 API
  const getStudentList = async () => {
    try {
      console.log("보낼 accessToken: ", accessToken);
      const response = await axios.get("http://ec2-43-201-71-214.ap-northeast-2.compute.amazonaws.com/api/tutoring/list", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log("getStudentList response: ", response.data);
      setStudentList(response.data);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: bottomSpace }}
    >
      {studentList.map((item) => (
        <View key={item.tutoringId}>
          <Container>
            <IconContainer>
              <Ionicons name="person-circle-outline" size={56} color="#424242" />
            </IconContainer>
            <TextContainer>
              <Name>{item.tuteeName}</Name>
              <Info>
                {item.subject} {item.dayTime}
              </Info>
            </TextContainer>
            <IconContainer>
              <AntDesign name="right" size={24} color="#424242" />
            </IconContainer>
          </Container>
        </View>
      ))}
    </ScrollView>
  );
};

// styled
const Container = styled.View`
  background: #ffffff;
  boxShadow: 4px 4px 4px rgba(0, 0, 0, 0.1);
  borderRadius: 16px;
  margin: 10px;
  paddingVertical: 5px;
  paddingHorizontal: 5px;
  flexDirection: row;
  alignItems: center;
`;

const TextContainer = styled.View`
  flex: 1;
  marginLeft: 10px;
  justifyContent: center;
`;

const IconContainer = styled.View`
  justifyContent: center;
`;

const Name = styled.Text`
  color: ${(props) => props.theme["grey_300"]};
  fontFamily: "ExtraBold";
  fontSize: 18px;
  lineHeight: 27px;
`;
  
const Info = styled.Text`
  color: ${(props) => props.theme["grey_100"]};
  fontFamily: "Regular";
  fontSize: 12px;
  lineHeight: 20px;
`;
