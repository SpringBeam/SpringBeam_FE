import React from "react";
import { View, Text } from 'react-native';

import Typography from "../components/Typography";

export default HomeScreen = () => {
  return (
    <View>
      <Typography
        color='red'
        fontSize={20}
      >
        홈 스크린입니당.
      </Typography>
    </View>
  );
}