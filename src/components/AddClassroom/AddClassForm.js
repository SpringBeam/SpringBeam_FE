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
import { createClassAPI } from "../../apis/Class";

export default AddClassForm = () => {
  const [ subject, setSubject ] = useState("");
  const [ selectedDay, setSelectedDay ] = useState("");
  const [ startTime, setStartTime ] = useState("");
  const [ endTime, setEndTime ] = useState("");
  const [ startDate, setStartDate ] = useState("");
  const [ totalDate, setTotalDate ] = useState([""]);

  const createForm = () => {
    const stringDate = totalDate.join(" ");

    const body = {
      "subject": subject,
      "dayTime": stringDate.trim(),
      "startDate": startDate
    }
    console.log(body)
    createClassAPI(body)
      .then((res) =>{
        console.log(res.data);
      })
      .catch((error) => {
        console.log("안 돼용!", error.message)
      });
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
      <SubTitle text="3. 시작일 설정"/>
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

const DayTimeContainer = styled.View`
  display: flex;
  flexDirection: row;
  justifyContent: space-between;
  alignItems: center;
`;

const TextContainer = styled.View`
  display: flex;
  flexDirection: row;
`;

const TimeText = styled.Text`
  margin: 10px;
  fontSize: 18px;
  color: ${(props) => props.theme["blue_100"]};
`;

const AddButton = styled.TouchableOpacity`
  paddingVertical: 6px;
  paddingHorizontal: 8px;
  backgroundColor: ${(props) => props.theme["blue_100"]};
  borderRadius: 300px;
  alignItems: center;
`;