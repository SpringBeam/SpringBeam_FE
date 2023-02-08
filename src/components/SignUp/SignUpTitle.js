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
  fontWeight: 600;
  color: #818181;
`;