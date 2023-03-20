import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

import Margin from "./../components/Margin";
import OAuthLoginButton from "../components/Buttons/OAuthLoginButton";

const View = SafeAreaView;

export default LoginScreen = ({ navigation }) => {
  return (
    <View>
      <Container>
        <LogoImage source={require("../../assets/logo.png")} />
        <Margin size={50 } />
        <OAuthLoginButton />
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


