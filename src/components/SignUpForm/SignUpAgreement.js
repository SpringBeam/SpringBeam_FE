import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';

import BouncyCheckbox from "react-native-bouncy-checkbox";

import Margin from '../Margin';

export default SignUpAgreement = (props) => {

  const [ isFirstChecked, setIsFirstChecked ] = useState(false);
  const [ isSecondChecked, setIsSecondChecked ] = useState(false);
  const [ isThirdChecked, setIsThirdChecked ] = useState(false);

  const isClicked = (item) => {
    if (item === "reqFirst") {
      setIsFirstChecked(!isFirstChecked);
    }
    else if (item === "reqSecond") {
      setIsSecondChecked(!isSecondChecked);
    }
    else {
      setIsThirdChecked(!isThirdChecked);
    }
  }

  useEffect(()=> {
    props.setIsAgreed([isFirstChecked, isSecondChecked, isThirdChecked])
  }, [isFirstChecked, isSecondChecked, isThirdChecked]);

  return(
    <AgreementSection>
      <ContentSection>
        <TextSection>
          <HighlightTextRequired>
            (필수)
          </HighlightTextRequired>
          <Margin size={10}/>
          <ContentText>
            개인 정보 수집 및 이용 안내
          </ContentText>
        </TextSection>
        <BouncyCheckbox
          fillColor="#0C9BFB"
          unfillColor="#fff"
          onPress={() => isClicked("reqFirst")}
        />
      </ContentSection>
      <Margin size={20}/>
      <ContentSection>
        <TextSection>
          <HighlightTextRequired>
            (필수)
          </HighlightTextRequired>
          <Margin size={10}/>
          <ContentText>
            제 3자 제공 동의
          </ContentText>
        </TextSection>
        <BouncyCheckbox
          fillColor="#0C9BFB"
          unfillColor="#fff"
          onPress={() => isClicked("reqSecond")}
        />
      </ContentSection>
      <Margin size={20}/>
      <ContentSection>
        <TextSection>
          <HighlightTextOptional>
            (선택)
          </HighlightTextOptional>
          <Margin size={10}/>
          <ContentText>
            제 3자 제공 동의
          </ContentText>
        </TextSection>
        <BouncyCheckbox
          fillColor="#0C9BFB"
          unfillColor="#fff"
          onPress={() => isClicked("reqOptional")}
        />
      </ContentSection>
    </AgreementSection>
  );
};

const AgreementSection = styled.View`
  marginVertical: 10px;
  paddingHorizontal: 10px;
`;

const TextSection = styled.View`
  display: flex;
  flex-direction: column;
`;

const ContentSection = styled.View`
  display: flex;
  flex-direction: row;
  justifyContent: space-between;
`;

const HighlightTextRequired = styled.Text`
  fontSize: 16px;
  color: #0C9BFB;
  fontWeight: 500;
`;

const HighlightTextOptional = styled.Text`
  fontSize: 16px;
  color: #818181;
  fontWeight: 500;
`;

const ContentText = styled.Text`
  fontSize: 16px;
  color: #818181;
  fontWeight: 400;
`;
