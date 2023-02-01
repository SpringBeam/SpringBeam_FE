import React from "react";
import { Text, Button } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

import Header from "../../components/Header";

const View = SafeAreaView;

export default SignUpScreenFirst = ({ navigation }) => {
  return (
    <View>
      <Header
        title='회원가입'
      />
      <Text>
        이것은 회원가입 화면 1입니당.
      </Text>
      <Button
        title="2로 전환"
        onPress={() => navigation.navigate("SignUpScreenSecond")}
      />
    </View>
  );
};