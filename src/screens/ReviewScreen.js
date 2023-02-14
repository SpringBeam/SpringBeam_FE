import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import Header from "../components/Header";
import Margin from "../components/Margin";

const View = SafeAreaView;

export default ReviewScreen = ({ navigation }) => {
  return (
    <View>
      <Header title="복습 노트" navigation={navigation} back="parent" />

    </View>
  );
};