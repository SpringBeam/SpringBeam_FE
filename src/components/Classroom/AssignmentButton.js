import React from "react";
import styled from "styled-components/native";

import AssignmentPreview from "./AssignmentPreview";

export default AssignmentButton = () => {

  return (
    <ButtonSection>
      <ButtonHeaderSection>
        <ButtonHeader>
          숙제 관리
        </ButtonHeader>
      </ButtonHeaderSection>
      <ButtonBodySection>
        <AssignmentPreview />
        <AssignmentPreview />
        <AssignmentPreview />
      </ButtonBodySection>
    </ButtonSection>
  );
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
  width: 100%;
  paddingTop: 10px;
`;

const ButtonHeader = styled.Text`
  textAlign: center;
  fontSize: 20px;
  fontWeight: 600;
`;

const ButtonBodySection = styled.View`
  width: 100%;
`;