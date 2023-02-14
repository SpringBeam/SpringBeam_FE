import React from "react";
import styled from "styled-components/native";

export default CheckButton = () => {
  return (
    <ButtonSection>
      <ButtonBox>

      </ButtonBox>
    </ButtonSection>
  );
}

const ButtonSection = styled.TouchableOpacity`

`;

const ButtonBox = styled.View`
  border: 1px solid red;
  borderRadius: 30px;
  width: 20px;
  height: 20px;
`;