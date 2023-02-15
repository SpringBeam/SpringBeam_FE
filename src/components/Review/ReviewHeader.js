import React from "react";
import styled from "styled-components/native";

export default ReviewHeader = ({ title }) => {
  return (
    <HeaderSection>
      <HeaderText>
        {title}
      </HeaderText>
    </HeaderSection>
  );
}

const HeaderSection = styled.View`
  paddingHorizontal: 15px;
`;

const HeaderText = styled.Text`
  fontSize: 20px;
  textAlign: left;
  color: ${(props) => props.theme['blue_100']};
  fontFamily: "ExtraBold";
`;