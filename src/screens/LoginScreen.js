import React from "react";
import { Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components";
// import KakaoLoginBtn from "../components/Buttons/KakaoLoginBtn";
import LoginBtn from "../components/Buttons/LoginBtn";
import LoginArea from "../components/Login/LoginArea";
import MoveButton from "../components/SignUp/MoveButton";
import Margin from "./../components/Margin";
const View = SafeAreaView;

export default LoginScreen = ({ navigation }) => {
  return (
    <View>
      <Container>
        <LogoImage source={require("../../assets/logo.png")} />

        <LoginArea />
        <LoginBtn navigation={navigation} />
        {/* <KakaoLoginBtn /> */}
        <Image source={require("../../assets/kakao_login_medium_wide.png")} />
        <Margin size={20} />
        <Text>아직 수숙관 회원이 아니신가요?</Text>

        <SignUpBtn onPress={() => navigation.navigate("SignUpNavigator")}>
          <BtnText>회원가입 하기</BtnText>
        </SignUpBtn>
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

const SignUpBtn = styled.TouchableOpacity`
  text-align: center;
`;

const BtnText = styled.Text`
  color: #48b8fa;
  font-weight: 100;
  font-size: 15px;
  line-height: 19px;
  margin: 15px;
  font-family: "Medium";
`;
