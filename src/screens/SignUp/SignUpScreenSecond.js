import React from "react";
import { Text, Button } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

const View = SafeAreaView;

export default SignUpScreenSecond = ({ navigation }) => {
  return (
    <View>
      <Text>
        이것은 회원가입 화면 2입니당.
      </Text>
      <Button
        title="3로 전환"
        onPress={() => navigation.navigate("SignUpScreenThird")}
      />
    </View>
  );
};