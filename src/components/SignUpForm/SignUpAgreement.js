import React from 'react';
import styled from 'styled-components/native';

import BouncyCheckbox from "react-native-bouncy-checkbox";

import Margin from '../Margin';

export default SignUpAgreement = () => {
  return(
    <AgreementSection>
      <HighlightTextOne>
        (필수)
      </HighlightTextOne>
      <Margin size={10}/>
      <ContentSection>
        <ContentText>
          개인 정보 수집 및 이용 안내
        </ContentText>
        <BouncyCheckBox
          size={25}
          fillColor='#0C9BFB'
          unfillColor='#fff'
        />
      </ContentSection>
      <Margin size={20}/>
      <HighlightTextOne>
        (필수)
      </HighlightTextOne>
      <Margin size={10}/>
      <ContentText>
        제 3자 제공 동의
      </ContentText>
      <Margin size={20}/>
      <HighlightTextTwo>
        (선택)
      </HighlightTextTwo>
      <Margin size={10}/>
      <ContentText>
        제 3자 제공 동의
      </ContentText>
    </AgreementSection>
  );
};

const AgreementSection = styled.View`
  marginVertical: 10px;
  paddingHorizontal: 10px;
`;

const ContentSection = styled.View`
  display: flex;
  flex-direction: row;
  justifyContent: space-between;
`;

const HighlightTextOne = styled.Text`
  fontSize: 20px;
  color: #0C9BFB;
  fontWeight: 500;
`;

const HighlightTextTwo = styled.Text`
  fontSize: 20px;
  color: #818181;
  fontWeight: 500;
`;

const ContentText = styled.Text`
  fontSize: 24px;
  color: #818181;
  fontWeight: 400;
`;
