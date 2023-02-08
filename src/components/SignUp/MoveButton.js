import React from "react";
import styled from "styled-components/native";
import { Alert } from "react-native";

export default MoveButton = (props) => {
  const { navigate } = props.navigation;
  const onPressHandler = () => {
    if (props.isAgreed) {
      if (props.isAgreed[0] && props.isAgreed[1]) {
        navigate(props.address);
      }
      else {
        Alert.alert('필수 약관에 동의해주세요. 🥺');
      }
    }
    else {
      navigate(props.address);
    }
  };

  return (
    <TouchableArea onPress={() => onPressHandler()}>
      <Button role={props.role}>
        <Text role={props.role}>{props.text}</Text>
      </Button>
    </TouchableArea>
  );
};

const TouchableArea = styled.TouchableOpacity`
  activeopacity: 0.8;
`;

const Button = styled.View`
  display: flex;
  flex-direction: row;
  paddingHorizontal: 31px;
  paddingVertical: 11px;
  border: 1px solid #0C9BFB;
  borderRadius: 12px;
  borderColor: ${(props) => (props.role === "next" ? "#0C9BFB" : "#E8E8E8")}
  backgroundColor: ${(props) => (props.role === "next" ? "#0C9BFB" : "#E8E8E8")}
  alignItems: center;
`;

const Text = styled.Text`
  fontweight: 600;
  fontsize: 16px;
  lineheight: 20px;
  color: ${(props) => (props.role === "next" ? "#fff" : "#818181")};
`;
