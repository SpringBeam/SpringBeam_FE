import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import Header from "../components/Header";
import Margin from "../components/Margin";
import AddClassForm from "../components/AddClassroom/AddClassForm";

const View = SafeAreaView;

export default AddClassroomScreen = ({ navigation }) => {

  return (
    <View>
      <Header title="μμ μΆκ°" navigation={navigation} back="parent"/>
      <Margin size={10} />
      <AddClassForm />
    </View>
  );
};