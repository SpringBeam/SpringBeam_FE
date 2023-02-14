import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import Header from "../components/Header";
import Margin from "../components/Margin";
import ReviewHeader from "../components/Review/ReviewHeader";
import ReviewListContainer from "../components/Review/ReviewListContainer";

const View = SafeAreaView;

export default ReviewScreen = ({ navigation }) => {
  return (
    <View>
      <Header title="복습 노트" navigation={navigation} back="parent" />
      <Margin size={20} />
      <ReviewHeader 
        title="진행 중인 복습"
      />
      <Margin size={10} />
      <ReviewListContainer/>
      <Margin size={20} />
      <ReviewHeader 
        title="완료된 복습"
        />
      <Margin size={10} />
      <ReviewListContainer/>
    </View>
  );
};