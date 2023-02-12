import React from "react";
import styled from "styled-components/native";
import { FontAwesome } from '@expo/vector-icons';

export default ReviewPreview = () => {

  return(
    <View>
      <ContentSection>
        <ContentText>
          진도
        </ContentText>
      </ContentSection>
      <CheckSection>
        <FontAwesome name="check-square-o" size={20} color="black" />
      </CheckSection>
    </View>
  );
}

const View = styled.View`
  paddingHorizontal: 20px;
  paddingVertical: 10px;
  display: flex;
  flexDirection: row;
  justifyContent: space-between;
`;

const ContentSection = styled.View`
`;

const ContentText = styled.Text`
  fontSize: 16px;
  fontWeight: 500;
`;

const CheckSection = styled.View`

`;