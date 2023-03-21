import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/Header";
import Margin from "../../components/Margin";
import { Text } from "react-native";
const View = SafeAreaView;

export default AddAssignmentScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1 }}>
      <Header title="숙제 추가" />
      <Margin size={20} />
      <Text>숙제추가화면입니다</Text>
      <AddAssignmentButton navigation={navigation} />
      
    </View>
  );
};
