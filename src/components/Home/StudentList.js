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
              <Ionicons name="person-circle-outline" size={56} color="black" />
            </IconContainer>
            <TextContainer>
              <Name>{item.name}</Name>
              <Info>
                {item.school} {item.grade}
              </Info>
            </TextContainer>

            <AntDesign name="right" size={24} color="black" />
          </Container>
        </View>
      ))}
    </ScrollView>
  );
};
const Container = styled.View`
  width: 360px;
  height: 80px;

  background: #ffffff;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  margin: 15px;
  flex-direction: row;

  align-items: center;
`;

const TextContainer = styled.View`
  width: 250px;
  justify-content: center;
`;

const IconContainer = styled.View`
  justify-content: center;
  margin: 5px;
  margin-right: 10px;
`;
const Name = styled.Text`
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
`;

const Info = styled.Text`
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
`;
