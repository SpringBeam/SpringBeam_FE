import React from "react";
import styled from "styled-components/native";

import ReviewPreview from "./ReviewPreview";

export default ReviewButton = (props) => { 
  const { navigate } = props.navigation;

  return (
    <ButtonSection
      onPress={() => {navigate(props.next)}}
    >
      <ButtonHeaderSection>
        <ButtonHeader>
          복습 관리
        </ButtonHeader>
      </ButtonHeaderSection>
      <ButtonBodySection>
        <ReviewPreview/>
        <ReviewPreview/>
        <ReviewPreview/>
        <ReviewPreview/>
      </ButtonBodySection>
    </ButtonSection>
  )
}

const ButtonSection = styled.TouchableOpacity`
  marginHorizontal: 10px;
  backgroundColor: white;
  display: flex;
  flexDirection: column;
  justifyContent: center;
  alignItems: center;
  borderRadius: 12px;
`;

const ButtonHeaderSection = styled.View`
  paddingTop: 10px;
  width: 100%;
`;

const ButtonBodySection = styled.View`
  width: 100%;
`;

const ButtonHeader = styled.Text`
  fontSize: 20px;
  fontWeight: 600;
  textAlign: center;
`;