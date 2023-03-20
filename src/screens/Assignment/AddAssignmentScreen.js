import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/Header";
import Margin from "../../components/Margin";
import AddReviewButton from "../../components/Review/AddReviewButton";
import { Text } from "react-native";
const View = SafeAreaView;

export default AddAssignmentScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header title="숙제 추가" />
      <Margin size={20} />
      <Text>숙제추가화면입니다</Text>

      
    </View>
  );
};
