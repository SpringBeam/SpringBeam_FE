import React from "react";
import styled from "styled-components/native";
import Margin from "../Margin";

export default SignUpComplete = () => {

  return (
    <CompleteSection>
      <TextLineContainer>
        <CompleteText>
          가입하신 이메일로
        </CompleteText>
      </TextLineContainer>
      <TextLineContainer>
        <HighlightedText>
          인증 메일
        </HighlightedText>
        <CompleteText>
          을 보내드렸습니다!
        </CompleteText>
      </TextLineContainer>
      <TextLineContainer>
        <HighlightedText>
          인증 메일
        </HighlightedText>
        <CompleteText>
          을 확인하여,
        </CompleteText>
      </TextLineContainer>
      <TextLineContainer>
        <CompleteText>
          회원가입을 완료해주세요!
        </CompleteText>
      </TextLineContainer>
    </CompleteSection>
  );
};

const CompleteSection = styled.View`
  paddingHorizontal: 10px;
`;

const TextLineContainer = styled.View`
  display: flex;
  flexDirection: row;
  alignItems: center;
  justifyContent: center;
  paddingVertical: 5px;
`;

const CompleteText = styled.Text`
  fontSize: 22px;
  fontFamily: "Bold";
  lineHeight: 26px;
  color: ${(props) => props.theme['grey_300']};
`;

const HighlightedText = styled.Text`
  fontSize: 24px;
  fontFamily: "ExtraBold";
  lineHeight: 26px;
  color: ${(props) => props.theme['blue_100']};
`;