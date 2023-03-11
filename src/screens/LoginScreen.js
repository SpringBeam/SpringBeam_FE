import React from "react";
import { Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
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
        <Margin size={50} />
        <ImageButton>
          <KakaoImage source={require("../../assets/kakao_login_medium_wide.png")} />
        </ImageButton>
      </Container>
    </View>
  );
};

const Container = styled.View`
  display: flex;
  height: 100%;
  justifyContent: center;
  marginHorizontal: 15px;
  alignItems: center;
`;

const LogoImage = styled.Image`
`;

const ImageButton = styled.TouchableOpacity`
  display: flex;
  alignItems: center;
  width: 100%;
`;

const KakaoImage = styled.Image`
`;
