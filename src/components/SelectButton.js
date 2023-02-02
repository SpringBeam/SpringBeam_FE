// 핵심 라이브러리
import React from 'react';
import styled from 'styled-components/native';

export default SelectButton = (props) => {

  const onPressHandler = () => {
    if (props.role === 'tutor') {
      props.setIsTutor(true);
    }
    else {
      props.setIsTutor(false);
    }
  };

  return (
    <TouchableArea
      onPress = {() => onPressHandler()}
    >
      <Button
        selected={props.selected}
      >
        <Text>
          {props.text}
        </Text>
        <Text>
          가입하기
        </Text>
      </Button>
    </TouchableArea>
  );
}

const TouchableArea = styled.TouchableOpacity`
  acitiveOpacity: 0.8;
`;

const Button = styled.View`
  marginHorizontal: 10px;
  marginVertical: 10px;
  paddingHorizontal: 10px;
  paddingVertical: 80px;
  border: 1px solid #0C9BFB;
  borderRadius: 12px;
  alignItems: center;
  borderColor: ${props => props.selected ? '#0C9BFB' : "grey"}
`;

const Text = styled.Text`
  fontSize: 24px;
  fontWeight: 600;
`;