import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/Header";
import Margin from "../../components/Margin";
import AddReviewButton from "../../components/Review/AddReviewButton";
import { Text } from "react-native";
const View = SafeAreaView;

export default AssignmentListScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <Header title="숙제 노트" navigation={navigation} back="parent" />
      <Margin size={20} />
      <Text>숙제노트 화면입니다</Text>

      <AddReviewButton navigation={navigation} />
    </View>
  );
};
