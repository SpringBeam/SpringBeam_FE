import React from "react";
import styled from "styled-components";

export default LoginBtn = ({ navigation }) => {
  const onPressHandler = () => {
    console.log("버튼 눌림");
    navigation.navigate("TabNavigator");
  };
  return (
    <BtnContainer onPress={() => onPressHandler()}>
      <BtnText>로그인</BtnText>
    </BtnContainer>
  );
};

const BtnContainer = styled.TouchableOpacity`
  color: white;
  background-color: #0c9bfb;
  border-radius: 12px;
  width: 300px;
  height: 45px;
  border-radius: 8px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin-top: 10px;
  margin-bottom: 10px;
`;

const BtnText = styled.Text`
  font-weight: 500;
  font-size: 16px;
  color: #ffffff;
`;
