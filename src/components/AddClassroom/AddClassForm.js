import React, { useState, useEffect } from "react";
import { Button } from "react-native";
import styled from "styled-components/native";
import { FontAwesome } from '@expo/vector-icons';

import SubTitle from "../Typography/SubTitle";
import Margin from "../Margin";
import DayPicker from "./DayPicker";
import SubjectPicker from "./SubjectPicker";
import { createClassAPI } from "../../apis/Class";

export default AddClassForm = () => {
  const daysArray = ["월", "화", "수", "목", "금", "토", "일"];
  const [ subject, setSubject ] = useState("");
  const [ selectedDay, setSelectedDay ] = useState("");
  const [ startTime, setStartTime ] = useState("");
  const [ endTime, setEndTime ] = useState("");
  const [ totalDate, setTotalDate ] = useState("");
  const [ newDate, setNewDate ] = useState("");

  const addDate = () => {
    const i = daysArray.indexOf(selectedDay) + 1;
    const temp = i + ' ' + startTime + ' ' + endTime;
    setNewDate(temp);
    setSelectedDay("");
    setStartTime("");
    setEndTime("");
  }

  useEffect(() => {
    setTotalDate([totalDate, newDate].join(' '));
  }, [newDate]);

  const createForm = () => {
    const body = {
      "subject": subject,
      "dayTime": totalDate.trim(),
      "startDate": "2023-03-06"
    }
    console.log(body)
    createClassAPI(body)
      .then((res) =>{
        console.log(res.data);
      })
      .catch((error) => {
        console.log('안 돼용!', error.message)
      });
  };

  return (
    <FormContainer>
      <Margin size={10} />
      <SubTitle text='1. 수업 과목 선택'/>
      <SubjectPicker subject={subject} setSubject={setSubject}/>
      <Margin size={10} />
      <SubTitle text='2. 수업 요일 설정'/>
      <Margin size={10} />
      <DayPicker setSelectedDay={setSelectedDay} setStartTime={setStartTime} setEndTime={setEndTime}/>
      <Margin size={10} />
      <DayTimeContainer>
        <TextContainer>
          {selectedDay && (
            <TimeText>
              {selectedDay}
            </TimeText>
          )}
          {startTime && (
            <TimeText>
              {startTime}
            </TimeText>
          )}
          {endTime && (
            <TimeText>
              {endTime}
            </TimeText>
          )}
        </TextContainer>
        {selectedDay && startTime && endTime && (
          <AddButton onPress={() => addDate()}>
            <FontAwesome name="plus" size={14} color="#fff" />
          </AddButton>
        )}
      </DayTimeContainer>
      <Margin size={10} />
      <SubTitle text='3. 시작일 설정'/>
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
  color: ${(props) => props.theme['blue_100']};
`;

const AddButton = styled.TouchableOpacity`
  paddingVertical: 6px;
  paddingHorizontal: 8px;
  backgroundColor: ${(props) => props.theme['blue_100']};
  borderRadius: 300px;
  alignItems: center;
`;