import React from "react";
import styled from "styled-components";
export default LoginBtn = () => {
  return (
    <Button>
      <Text>로그인</Text>
    </Button>
  );
};

const Button = styled.View`
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

const Text = styled.Text`
  font-weight: 500;
  font-size: 16px;
  color: #ffffff;
`;
