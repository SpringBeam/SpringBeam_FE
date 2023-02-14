// 핵심 라이브러리
import React from "react";
import styled from "styled-components/native";

// 추가 라이브러리
import { FontAwesome } from "@expo/vector-icons";

// 헤더 컴포넌트
export default Header = (props) => {
  const { navigate, goBack } = props.navigation;

  return (
    <HeaderView>
      <TouchableArea
        onPress={() => {props.back === "parent" ? goBack() : navigate(props.back)}}
      >
        <FontAwesome name="arrow-left" size={22} color="#fff" />
      </TouchableArea>
      <Text>{props.title}</Text>
      <TouchableArea>
        <FontAwesome
          name="bell"
          size={22}
          color={props.isLoggedIn ? "#fff" : "transparent"}
        />
      </TouchableArea>
    </HeaderView>
  );
};

// 스타일드
const HeaderView = styled.View`
  width: 100%;
  display: flex;
  flexdirection: row;
  backgroundcolor: #0c9bfb;
  paddingvertical: 15px;
  paddinghorizontal: 25px;
  justifycontent: space-between;
  alignitems: center;
`;

const Text = styled.Text`
  fontsize: 24px;
  fontweight: 600;
  color: #fff;
`;

const TouchableArea = styled.TouchableOpacity`
  acitiveopacity: 0.8;
  paddinghorizontal: 6px;
  paddingvertical: 5px;
`;
