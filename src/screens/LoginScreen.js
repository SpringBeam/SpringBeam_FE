import { useLinkProps } from "@react-navigation/native";
import React from "react";
import { Text, Button, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components";
import KakaoLoginBtn from "../components/buttons/KakaoLoginBtn";
import LoginArea from "../components/Login/LoginArea";

const View = SafeAreaView;

export default LoginScreen = ({ navigation }) => {
  return (
    <View>
      <LogoImage source={require("../../assets/logo.png")} />

      <LoginArea />
      <Image source={require("../../assets/kakao_login_medium_wide.png")} />
      <KakaoLoginBtn />
      <Text>아직 수숙관 회원이 아니신가요?</Text>
      <Button
        title="회원가입 하기"
        onPress={() => navigation.navigate("SignUpNavigator")}
      />
    </View>
  );
};

const LogoImage = styled.Image`
  margin: 20px;
  margin-top: 150px;
`;
