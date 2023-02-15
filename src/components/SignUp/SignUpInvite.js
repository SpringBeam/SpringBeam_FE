import React from "react";
import styled from "styled-components/native";

export default SignUpInvite = () => {

  return (
    <InviteSection>
      <TextLineContainer>
        <Text>
          학생 &#40;튜티&#41;를 초대하고 싶다면?
        </Text>
      </TextLineContainer>
      <TextLineContainer>
        <Text>
          학생에게 &nbsp;
        </Text>
        <TouchableArea>
          <HighlightedText>
            초대 링크
          </HighlightedText>
        </TouchableArea>
        <Text>
          를 보내주세요!
        </Text>
      </TextLineContainer>
    </InviteSection>
  );
};

const InviteSection = styled.View`
  width: 100%;
`;

const TextLineContainer = styled.View`
  display: flex;
  flexDirection: row;
  paddingVertical: 2px;
  justifyContent: center;
  alignItems: center;
`;

const Text = styled.Text`
  lineHeight: 18px;
  fontSize: 16px;
  fontFamily: "Regular";
  color: ${(props) => props.theme['grey_100']};
`;
  
const HighlightedText = styled.Text`
  lineHeight: 18px;
  fontSize: 16px;
  fontFamily: "Medium";
  color: ${(props) => props.theme['blue_100']};
`;

const TouchableArea = styled.TouchableOpacity`

`;