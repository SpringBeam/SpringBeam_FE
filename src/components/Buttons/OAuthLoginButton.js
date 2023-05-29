import React from "react";
import styled from "styled-components/native";
import * as Linking from "expo-linking";

const REDIRECT_URI = "exp://192.168.120.1:19000/index.exp";
const authKakao = `http://ec2-43-201-71-214.ap-northeast-2.compute.amazonaws.com/oauth2/authorization/kakao?redirect_uri=${REDIRECT_URI}`;

export default OAuthLoginButton = ({ setIsClicked, isClicked, }) => {

  const link = () => {
    Linking.openURL(authKakao);
  }

  const onPressHandler = () => {
    console.log('백엔드 링크로 고고싱');
    setIsClicked(isClicked+1);
    link();
  };

  return (
    <ImageButton onPress={() => onPressHandler()}>
      <KakaoImage source={require("../../../assets/kakao_login_medium_wide.png")} />
    </ImageButton>
  );

}

const ImageButton = styled.TouchableOpacity`
  display: flex;
  alignItems: center;
  width: 100%;
`;

const KakaoImage = styled.Image`
`;