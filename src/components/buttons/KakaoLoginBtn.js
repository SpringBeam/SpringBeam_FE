import React from "react";
import styled from "styled-components";
import { Text } from "react-native";

export default KakaoLoginBtn = () => {
  return (
    <Button>
      <Text>카카오 로그인</Text>
    </Button>
  );
};

const Button = styled.View`
  color: #000000;
  background-color: #fee500;
  border-radius: 12px;
  width: 360px;
  height: 60px;
  border-radius: 8px;
  font-weight: 800;
  font-size: 30px;
`;
