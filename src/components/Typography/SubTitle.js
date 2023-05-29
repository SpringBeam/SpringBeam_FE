import React from "react";
import styled from "styled-components";

export default SubTitle = (props) => {

  return (
    <SubTitleContainer>
      <SubTitleText>
        {props.text}
      </SubTitleText>
    </SubTitleContainer>
  )
};

const SubTitleContainer = styled.View`

`;

const SubTitleText = styled.Text`
  fontSize: 16px;
  fontFamily: ExtraBold;
  color: ${(props) => props.theme['grey_300']};
`;

