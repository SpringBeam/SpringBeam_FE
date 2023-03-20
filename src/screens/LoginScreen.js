import React from "react";
import { Link } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

import Margin from "./../components/Margin";
import OAuthLoginButton from "../components/Buttons/OAuthLoginButton";

const View = SafeAreaView;

const redirect_uri = "exp://localhost:19000/oauth/redirect";

export default LoginScreen = ({ navigation }) => {
  return (
    <View>
      <Container>
        <LogoImage source={require("../../assets/logo.png")} />
        <Margin size={50 } />
        <Link to="http://ec2-3-35-210-123.ap-northeast-2.compute.amazonaws.com/oauth2/authorization/kakao?redirect_uri={redirect_uri}">
          <OAuthLoginButton />
        </Link>
        {/* <OAuthLoginButton navigation={navigation} /> */}
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


