import axios from "axios";
import React, { useState, useEffect } from "react";
import { Button } from "react-native";
import styled from "styled-components/native";
import Toast from "react-native-root-toast";

import SubTitle from "../Typography/SubTitle";
import Margin from "../Margin";
import SubjectPicker from "./SubjectPicker";
import DayPicker from "./DayPicker";
import AddDate from "./AddDate";
import DateList from "./DateList";
import StartDate from "./StartDate";
// import { createClassAPI } from "../../apis/ClassAPI";

import { getAccessToken } from "../../auth";

export default AddClassForm = ({ navigation }) => {
  const [ subject, setSubject ] = useState("");
  const [ selectedDay, setSelectedDay ] = useState("");
  const [ startTime, setStartTime ] = useState("");
  const [ endTime, setEndTime ] = useState("");
  const [ startDate, setStartDate ] = useState("");
  const [ totalDate, setTotalDate ] = useState([]);

  // API 통신을 위한 AccessToken 불러오기
  const [accessToken, setAccessToken] = useState("");
  useEffect(() => {
    const fetchAccessToken = async () => {
      const token = await getAccessToken();
      setAccessToken(token);
    };

    fetchAccessToken();
  }, []);

  // 수업 생성 API
  const createForm = async () => {
    const stringDate = totalDate.join(" ");
    const body = {
      "subject": subject,
      "dayTime": stringDate.trim(),
      "startDate": startDate
    }
    console.log("보내기 전", body);
    try {
      const response = await axios.post("http://ec2-43-201-71-214.ap-northeast-2.compute.amazonaws.com/api/tutoring", body, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const toast = Toast.show("성공적으로 클래스가 만들어졌어요! ☺");
      console.log("response: ", response);
      setTimeout(() => {
        Toast.hide(toast);
        navigation.navigate("StudentsScreen");
      }, 3000);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  return (
    <FormContainer>
      <Margin size={10} />
      <SubTitle text="1. 수업 과목 선택"/>
      <SubjectPicker subject={subject} setSubject={setSubject}/>
      <Margin size={10} />
      <SubTitle text="2. 수업 요일 설정"/>
      <Margin size={10} />
      <DayPicker 
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay} 
        setStartTime={setStartTime} 
        setEndTime={setEndTime}
      />
      <Margin size={10} />
      <AddDate 
        selectedDay={selectedDay}
        startTime={startTime} 
        endTime={endTime} 
        setSelectedDay={setSelectedDay} 
        setStartTime={setStartTime} 
        setEndTime={setEndTime}
        totalDate={totalDate}
        setTotalDate={setTotalDate}
      />
      <Margin size={10} />
      <DateList
        totalDate={totalDate}
      />
      <Margin size={10} />
      <SubTitle text="3. 시작일 설정"/>
      <Margin size={10} />
      <StartDate
        text="시작일 설정"
        setTime={setStartDate}
      />
      <Margin size={30} />
      <TextContainer>
        <StartDateText>
          {startDate}
        </StartDateText>
      </TextContainer>
      <Button
        title="되냐"
        onPress={()=>createForm()}
      />
    </FormContainer>
  )
};

const FormContainer = styled.View`
  marginHorizontal: 10px;
`;

const TextContainer = styled.View`
  display: flex;
  flexDirection: row;
  justifyContent: flex-start;
  alignItems: center;
  width: 100%;
`;

const StartDateText = styled.Text`
  fontSize: 16px;
  fontFamily: "Medium";
`;