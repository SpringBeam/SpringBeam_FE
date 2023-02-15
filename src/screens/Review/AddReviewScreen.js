import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import Header from "../../components/Header";
import Margin from "../../components/Margin";
import ReviewHeader from "../../components/Review/ReviewHeader";
import ReviewListContainer from "../../components/Review/ReviewListContainer";
import AddReview from "../../components/Review/AddReview";

const View = SafeAreaView;

export default AddReviewScreen = ({ navigation }) => {
  return (
    <View>
      <Header title="복습 추가" navigation={navigation} back="ReviewScreen" />
      <Margin size= {20} />
      <ReviewHeader
        title="진행 중인 복습"
      />
      <ReviewListContainer />
      <AddReview />
    </View>
  );
};

