import React from "react";
import { Text, Button } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

const View = SafeAreaView;

export default LoginScreen = ({ navigation }) => {
  return (
    <View>
      <Text>이것은 로그인 화면입니당!?</Text>
      <Button
        title="회원가입하기"
        onPress={() => navigation.navigate("SignUpScreen")}
      />
    </View>
  );
};
