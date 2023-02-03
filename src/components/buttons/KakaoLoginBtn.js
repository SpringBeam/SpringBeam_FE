import React from "react";
import styled from "styled-components/native";

export default KakaoLoginBtn = () => {
  return (
    <Button>
      <LogoImage source={require("../../../assets/kakao_logo.png")} />

      <Text>카카오 로그인</Text>
    </Button>
  );
};

const Button = styled.View`
  color: #000000;
  background-color: #fee500;
  border-radius: 12px;
  width: 300px;
  height: 45px;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  /* justify-content: center; */
  //margin: 10px;
`;
const TextContainer = styled.View`
  /* width: 300px;
  height: 48px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center; */
`;
const Text = styled.Text`
  font-weight: 500;
  font-size: 14px;
  width: 250px;
  height: 45px;
`;

const LogoImage = styled.Image`
  width: 30px;
  height: 30px;
  margin: 10px;
`;
