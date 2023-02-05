import React from "react";
import styled from "styled-components";
import { Text, Button, View } from "react-native";

export default LoginArea = () => {
  return (
    <View>
      <Input placeholder="이메일" />
      <Input placeholder="비밀번호" />
    </View>
  );
};

const Input = styled.TextInput`
  width: 340px;
  height: 55px;
  margin: 10px;
  border-radius: 12px;
  border: 1px solid #e8e8e8;
  font-size: 16px;
  padding: 10px;
`;
