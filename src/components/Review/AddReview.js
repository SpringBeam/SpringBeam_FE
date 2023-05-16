import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { FontAwesome } from '@expo/vector-icons';
import dayjs from "dayjs";

import { getAccessToken } from "../../auth";

import { createReviewAPI } from "../../apis/ReviewAPI";

export default AddReview = () => {
  const now = dayjs();
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    const fetchAccessToken = async () => {
      const token = await getAccessToken();
      setAccessToken(token);
    };

    fetchAccessToken();
  }, []);

  
  const [ reviewBody, setReviewBody ] = useState("");
  const handleSubmit = async () => {
    const body = {
      "tutoringId": 1,
      "body": "단어책 10~15p",
      "tagId": 3
    };
    try {
      const response = await axios.post("http://ec2-43-201-71-214.ap-northeast-2.compute.amazonaws.com/api/review", body, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log("response: ", response);
    } catch (error) {
      console.log("error: ", error, "message: ", error.response.data.msg);
    }
  }
  
  return (
    <ReviewContainer>
      <ReviewInput 
        placeholder="복습할 내용 입력..."
        value={reviewBody}
        onChangeText={text => setReviewBody(text)}
      />
      <SubmitButton
        type="button"
        onPress={() => handleSubmit()}
      >
        <FontAwesome name="plus" size={24} color="#0c9bfb" />
      </SubmitButton>
    </ReviewContainer>
  );
};


const ReviewContainer = styled.View`
  width: 100%;
  display: flex;
  flexDirection: row;
  justifyContent: space-between;
  alignItems: center;
  paddingHorizontal: 15px;
  paddingVertical: 15px;
`;

const ReviewInput = styled.TextInput`
  flex: 1;
  fontSize: 18px;
  fontFamily: "Regular";
  lineHeight: 24px;
`;

const SubmitButton = styled.TouchableOpacity`
`;