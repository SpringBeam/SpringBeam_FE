import React from "react";
import styled from "styled-components";
import { SafeAreaView } from "react-native-safe-area-context";

import Header from "../components/Header";
import Margin from "../components/Margin";
import MyInfo from "../components/MyPage/MyInfo";

const View = SafeAreaView;

export default MyPageScreen = ({navigation}) => {
  return (
    <View>
      <Header
        title="마이 페이지" 
        navigation={navigation} 
        back="SelectScreen" 
      />
      <Margin size={15} />
      <MyInfo />
    </View>
  );
}