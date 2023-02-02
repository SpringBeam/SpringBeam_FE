import React from "react";
import { Text, Button } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

import Header from "../../components/Header";

const View = SafeAreaView;

export default SignUpScreenThird = ({ navigation }) => {
  return (
    <View>
      <Header
        title='회원가입'
        navigation={navigation}
        back='LoginScreen'
      />
      <Text>
        이것은 회원가입 화면 3입니당.
      </Text>
      <Button
        title="4로 전환"
        onPress={() => navigation.navigate("SignUpScreenFourth")}
      />
    </View>
  );
};