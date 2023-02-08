import React from "react";
import { ScrollView, View, Text } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import Margin from "../Margin";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components/native";

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
            <Ionicons name="person-circle-outline" size={56} color="black" />
            <Text>{item.name}</Text>
            <Text>
              {item.school} {item.grade}
            </Text>

            <Margin height={13} />
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
  box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
`;
