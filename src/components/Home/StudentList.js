import React from "react";
import { ScrollView, View, Text } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import Margin from "../Margin";
import { Ionicons } from "@expo/vector-icons";

const bottomSpace = getBottomSpace();
export default (props) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: bottomSpace }}
    >
      {props.data.map((item, index) => (
        <View key={index}>
          <Ionicons name="person-circle-outline" size={24} color="black" />
          <Text>{item.name}</Text>
          <Text>
            {item.school} {item.grade}
          </Text>

          <Margin height={13} />
        </View>
      ))}
    </ScrollView>
  );
};
