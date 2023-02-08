// 핵심 라이브러리
import React, { useCallback } from "react";
import styled from "styled-components/native";
import { useDispatch } from "react-redux";

import Margin from "../Margin";

export default SelectButton = (props) => {
  const dispatch = useDispatch();
  
  const onPressHandler = useCallback(() => {
    if (props.role === "tutor") {
      props.setIsTutor(true);
      dispatch({type: "SELECT_TUTOR"});
    }
    else {
      props.setIsTutor(false);
      dispatch({type: "SELECT_TUTEE"});
    }
  }, []);

  return (
    <TouchableArea
      activeOpacity = {1}
      onPress = {() => onPressHandler()}
      >
      <Button
        selected={props.selected}
        tutor={props.role}
      >
        <ImageSection>
          <ImageBackground
            source={props.role ==="tutor"? require("../../../assets/tutorImg.png") : require("../../../assets/tuteeImg.png")}
            resizeMode="stretch"
          />
        </ImageSection>
        <TextSection>
          {/* <TextBorder> */}
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
          {/* </TextBorder> */}
        </TextSection>
      </Button>
    </TouchableArea>
  );
}

const TouchableArea = styled.TouchableOpacity`
  activeOpacity: 1;
`;

const Button = styled.View`
  display: flex;
  flexDirection: row;
  backgroundColor: ${props => props.tutor === "tutor" ? "#FFB8A1" : "#FDE26C"};
  marginHorizontal: 10px;
  marginVertical: 10px;
  borderRadius: 12px;
  borderColor: ${props => props.selected ? "#0C9BFB" : "grey"};
  shadowColor: "black";
  shadowOffset: {
    width: 0,
    height: 2,
  };
  shadowOpacity: 1;
  shadowRadius: 3.84;
  elevation: 5;
  `;
  
const TextSection = styled.View`
  width: 50%;
  paddingVertical: 60px;
  paddingLeft: 10px;
`;

const TextBorder = styled.View`
  borderRadius: 12px;
  padding: 10px;
  backgroundColor: rgba( 0, 0, 0, 0.3 );
`;

const Text = styled.Text`
  fontSize: 22px;
  lineHeight: 30px;
  fontWeight: 700;
  color: ${props => props.selected ? "#fff" : "grey"};
`;

const ImageSection = styled.View`
  width: 50%;
`;

const ImageBackground = styled.ImageBackground`
  position: absolute;
  width: 175px;
  height: 175px;
  bottom: 0px;
`;