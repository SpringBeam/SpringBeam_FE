import axios from "axios";
import React, { useState, useEffect} from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { StudentData } from "../components/Home/StudentData";
import Header from "../components/Header";
import Margin from "../components/Margin";
import StudentList from "../components/Home/StudentList";
import AddClassButton from "../components/Home/AddClassButton";

import { getAccessToken } from "../auth";

const View = SafeAreaView;

export default StudentsScreen = ({ navigation }) => {

  // API 통신을 위한 AccessToken 불러오기
  const [accessToken, setAccessToken] = useState("");
  useEffect(() => {
    const fetchAccessToken = async () => {
      const token = await getAccessToken();
      setAccessToken(token);
    };

    fetchAccessToken();
  }, []);

  useEffect(() => {
    if (accessToken) {
      getClassList();
    }
  }, [accessToken]);

  // 수업 조회 API
  const getClassList = async () => {
    try {
      const response = await axios.get("http://ec2-43-201-71-214.ap-northeast-2.compute.amazonaws.com/api/tutoring/list", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log("response: ", response);
    } catch (error) {
      console.log("error: ", error.message);
    }
  };
  

  return (
    <View>
      <Header title="학생 목록" navigation={navigation} back="LoginScreen" />
      <Margin size={10} />
      <StudentList data={StudentData} />
      <Margin size={5} />
      <AddClassButton navigation={navigation} />
    </View>
  );
};
