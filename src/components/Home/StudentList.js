import React from "react";
import { ScrollView, View } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import Margin from "../Margin";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";

const bottomSpace = getBottomSpace();

export default (props) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: bottomSpace }}
    >
      {props.data.map((item, index) => (
        <View key={index}>
          <Container>
            <IconContainer>
              <Ionicons name="person-circle-outline" size={56} color="#424242" />
            </IconContainer>
            <TextContainer>
              <Name>{item.name}</Name>
              <Info>
                {item.school} {item.grade}
              </Info>
            </TextContainer>
            <IconContainer>
              <AntDesign name="right" size={24} color="#424242" />
            </IconContainer>
          </Container>
        </View>
      ))}
    </ScrollView>
  );
};
const Container = styled.View`
  background: #ffffff;
  boxShadow: 4px 4px 4px rgba(0, 0, 0, 0.1);
  borderRadius: 16px;
  margin: 10px;
  paddingVertical: 5px;
  paddingHorizontal: 5px;
  flexDirection: row;
  alignItems: center;
`;

const TextContainer = styled.View`
  flex: 1;
  marginLeft: 10px;
  justifyContent: center;
`;

const IconContainer = styled.View`
  justifyContent: center;
`;

const Name = styled.Text`
  color: ${(props) => props.theme["grey_300"]};
  fontFamily: "ExtraBold";
  fontSize: 18px;
  lineHeight: 27px;
`;
  
const Info = styled.Text`
  color: ${(props) => props.theme["grey_100"]};
  fontFamily: "Regular";
  fontSize: 12px;
  lineHeight: 20px;
`;
