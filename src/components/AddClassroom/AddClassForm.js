import axios from "axios";
import React, { useState, useEffect } from "react";
import { Button } from "react-native";
import styled from "styled-components/native";

import SubTitle from "../Typography/SubTitle";
import Margin from "../Margin";
import SubjectPicker from "./SubjectPicker";
import DayPicker from "./DayPicker";
import AddDate from "./AddDate";
import DateList from "./DateList";
import StartDate from "./StartDate";
import { createClassAPI } from "../../apis/ClassAPI";

import { getAccessToken } from "../../auth";

export default AddClassForm = () => {
  const [ subject, setSubject ] = useState("");
  const [ selectedDay, setSelectedDay ] = useState("");
  const [ startTime, setStartTime ] = useState("");
  const [ endTime, setEndTime ] = useState("");
  const [ startDate, setStartDate ] = useState("");
  const [ totalDate, setTotalDate ] = useState([]);

  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    const fetchAccessToken = async () => {
      const token = await getAccessToken();
      setAccessToken(token);
    };

    fetchAccessToken();
  }, []);

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
      console.log("response: ", response);
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
