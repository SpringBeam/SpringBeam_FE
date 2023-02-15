import React from "react";
import styled from "styled-components/native";
import { FontAwesome } from '@expo/vector-icons';
import dayjs from "dayjs";

export default AddReview = () => {
  const now = dayjs();
  
  return (
    <ReviewContainer>
      <ReviewInput 
        placeholder="복습할 내용 입력..."
      />
      <SubmitButton>
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