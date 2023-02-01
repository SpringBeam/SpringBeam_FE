import React from 'react';
import styled  from "styled-components/native";

import { FontAwesome } from '@expo/vector-icons';

const HeaderView = styled.View`
  display: flex;
  flexDirection: row;
  backgroundColor: #0C9BFB;
  paddingVertical: 15;
  paddingHorizontal: 25;
  justifyContent: space-between;
  alignItems: center;
`;

const Text = styled.Text`
  fontSize: 24;
  fontWeight: 600;
  color: #fff;
`;

export default Header = (props) => {
  return (
    <HeaderView>
      <FontAwesome name="arrow-left" size={22} color="#fff"/>
      <Text>{props.title}</Text>
      <FontAwesome name="bell" size={22} color="#fff" />
    </HeaderView>
  );
}