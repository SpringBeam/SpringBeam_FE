import axios from "axios";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import Header from "../../components/Header";
import Margin from "../../components/Margin";
import ReviewHeader from "../../components/Review/ReviewHeader";
import ReviewListContainer from "../../components/Review/ReviewListContainer";
import AddReviewButton from "../../components/Review/AddReviewButton";

import { getAccessToken } from "../../auth";

const View = SafeAreaView;

export default ReviewScreen = ({ navigation }) => {

  const [ reviewData, setReviewData ] = useState();

  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    const fetchAccessToken = async () => {
      const token = await getAccessToken();
      setAccessToken(token);
    };

    fetchAccessToken();
  }, []);

  const getReviewData = async () => {
    const body = { "tutoringId": "14"}
    try {
      const response = await axios.post("http://ec2-43-201-71-214.ap-northeast-2.compute.amazonaws.com/api/review/list", body, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log("response: ", response);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  useEffect(() => {
    if (accessToken) {
      console.log(accessToken);
      getReviewData();
    };
  }, [accessToken]);

  return (
    <View style={{flex:1}}>
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

      <AddReviewButton
        navigation={navigation}
      />
    </View>
  );
};