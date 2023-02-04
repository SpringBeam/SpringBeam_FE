import React from "react";
import { Text } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

import Header from "../../components/Header";

const View = SafeAreaView;

export default SignUpScreenFourth = ({ navigation }) => {
  return (
    <View>
      <Header
        title='회원가입'
        navigation={navigation}
        back='LoginScreen'
      />
      <Text>
        이것은 회원가입 화면 4입니당.
      </Text>
    </View>
  );
};