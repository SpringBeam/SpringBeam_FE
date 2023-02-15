import { useLinkProps } from '@react-navigation/native';
import React from 'react';
import styled from 'styled-components/native';

export default SignUpTitle = (props) => {
  return(
    <TitleSection>
      <Title>
        {props.title}
      </Title>
    </TitleSection>
  );
}

const TitleSection = styled.View`
  paddingHorizontal: 10px;
`;

const Title = styled.Text`
  fontSize: 30px;
  fontFamily: "ExtraBold";
  color: ${(props) => props.theme['grey_300']};
`;