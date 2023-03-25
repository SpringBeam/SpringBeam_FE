import React from "react";
import styled from "styled-components/native";
import queryString from "query-string";

import { 
  setAccessToken,
  setRefreshToken,
  setAuthentication,
} from "../../auth/index";

export default LoginRedirect = ({ navigation }) => {
  const searchParams = queryString.parseUrl(url).query;

  const accessToken = searchParams.accessToken;
  const refreshToken = searchParams.refreshToken;
  const loginMemberId = searchParams.loginMemberId;
  const accessTokenExpirationTime = searchParams.accessTokenExpirationTime;

  setAccessToken(accessToken);
  setRefreshToken(refreshToken);
  setAuthentication(true);
  // dispatch(setUserId(loginMemberId));


  console.log(accessToken);

  const onPressHandler = () => {
    navigation.navigate("TabNavigator");
  };

  return (
    <Wrapper>
      <Button onPress={() => onPressHandler()}>
        <ButtonText>
          로그인 성공
        </ButtonText>
      </Button>
    </Wrapper>
  )

};

const Wrapper = styled.View`

`;

const Button = styled.TouchableOpacity`

`;

const ButtonText = styled.Text`

`;