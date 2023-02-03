import React from "react";
import { Text, Button, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components";
import KakaoLoginBtn from "../components/buttons/KakaoLoginBtn";
import LoginBtn from "../components/buttons/LoginBtn";
import LoginArea from "../components/Login/LoginArea";
import Margin from "./../components/Margin";

const View = SafeAreaView;

export default LoginScreen = ({ navigation }) => {
  return (
    <View>
      <Container>
        <LogoImage source={require("../../assets/logo.png")} />

        <LoginArea />
        <LoginBtn />
        {/* <KakaoLoginBtn /> */}
        <Image source={require("../../assets/kakao_login_medium_wide.png")} />
        <Margin size={20} />
        <Text>아직 수숙관 회원이 아니신가요?</Text>

        <Button
          title="회원가입 하기"
          onPress={() => navigation.navigate("SignUpNavigator")}
        />
      </Container>
    </View>
  );
};

const LogoImage = styled.Image`
  margin: 20px;
  margin-top: 150px;
`;

const Container = styled.View`
  margin-left: 15px;
  margin-right: 15px;
  display: flex;

  align-items: center;
`;
