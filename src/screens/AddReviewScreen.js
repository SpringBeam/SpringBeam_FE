import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import Header from "../components/Header";
import Margin from "../components/Margin";

const View = SafeAreaView;

export default AddReviewScreen = ({ navigation }) => {
  return (
    <View>
      <Header title="복습 추가" navigation={navigation} back="ReviewScreen" />
      <Margin size= {20} />
    </View>
  );
};

