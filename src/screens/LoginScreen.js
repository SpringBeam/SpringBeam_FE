import React, { useState, useEffect } from "react";
import { Linking } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

// LoginRedirect를 위한 API 및 라이브러리 불러오기
import queryString from "query-string";
import { 
  setAccessToken,
  setRefreshToken,
  setAuthentication,
} from "../auth/index";

// 컴포넌트 불러오기
import Margin from "./../components/Margin";
import OAuthLoginButton from "../components/Buttons/OAuthLoginButton";

const View = SafeAreaView;

export default LoginScreen = ({ navigation }) => {

  const [isClicked, setIsClicked] = useState(0);

  useEffect(() => {
    const getParamsFromUrl = async () => {
      try {
        const url = await Linking.getInitialURL(); // 비동기로 호출하고 null일 경우 예외 처리
        if (url !== null) {
          const params = queryString.parseUrl(url).query;
          const { accessToken, refreshToken, loginMemberId, accessTokenExpirationTime } = params;
          if (accessToken) {
            console.log('해볼게')
            setAccessToken(accessToken);
            setRefreshToken(refreshToken);
            // setAuthentication(true);
            console.log("accessToken: ", accessToken)
            console.log("refreshToken: ", refreshToken)
            console.log('되어라', url, accessToken, refreshToken);
            setTimeout(() => {
              navigation.navigate("TabNavigator");
            }, 3000);
          }
        }
      } catch (error) {
        console.log('error', error);
      }
    };
    getParamsFromUrl();
  }, [isClicked]);

  return (
    <View>
      <Container>
        <LogoImage source={require("../../assets/logo.png")} />
        <Margin size={50 } />
        <OAuthLoginButton isClicked={isClicked} setIsClicked={setIsClicked} />
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


