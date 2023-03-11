import React from "react";
import styled from "styled-components/native";

const REDIRECT_URI = "";
const authKakao = `https://수숙관백엔드서버.com/oauth2/kakao?redirect_uri=${REDIRECT_URI}`;


export default OAuthLoginButton = ({ navigation }) => {

  const onPressHandler = () => {
    console.log("로그인 버튼 눌림");
    navigation.navigate("TabNavigator");
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