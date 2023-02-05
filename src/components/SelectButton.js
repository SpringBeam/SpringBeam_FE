// 핵심 라이브러리
import React, { useCallback } from 'react';
import styled from 'styled-components/native';
import { useDispatch } from "react-redux";

import Margin from './Margin';

export default SelectButton = (props) => {
  const dispatch = useDispatch();
  
  const onPressHandler = useCallback(() => {
    if (props.role === 'tutor') {
      props.setIsTutor(true);
      dispatch({type: 'SELECT_TUTOR'});
    }
    else {
      props.setIsTutor(false);
      dispatch({type: 'SELECT_TUTEE'});
    }
  }, []);

  return (
    <TouchableArea
      onPress = {() => onPressHandler()}
      >
      <Button
        selected={props.selected}
      >
        <ImageBackground
          source={props.role ==='tutor'? require('../../assets/tutor.png') : require('../../assets/tutee.png')}
          resizeMode='stretch'
        />
        <TextSection>
          <Text
            selected={props.selected}
          >
            {props.text}
          </Text>
          <Text
            selected={props.selected}
          >
            가입하기
          </Text>
        </TextSection>
      </Button>
    </TouchableArea>
  );
}

const TouchableArea = styled.TouchableOpacity`
  acitiveOpacity: 0.8;
`;

const Button = styled.View`
  backgroundColor: #fff;
  marginHorizontal: 10px;
  marginVertical: 10px;
  border: 2px solid #0C9BFB;
  borderRadius: 12px;
  borderColor: ${props => props.selected ? '#0C9BFB' : "grey"};
  `;
  
const TextSection = styled.View`
  width: 100%;
  alignItems: center;
  paddingHorizontal: 10px;
  paddingVertical: 80px;
`;

const Text = styled.Text`
  fontSize: 24px;
  fontWeight: 700;
  color: ${props => props.selected ? '#0C9BFB' : "grey"};
`;

const ImageBackground = styled.ImageBackground`
  position: absolute;
  bottom: -45px;
  right: -70px;
  width: 65%;
  height: 65%;
`;