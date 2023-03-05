import React, { useState, useEffect } from "react";
import { Button, Text } from "react-native";
import styled from "styled-components/native";

import DayPicker from "./DayPicker";
import SubjectPicker from "./SubjectPicker";
import ClassTimePicker from "./ClassTimePicker";
import { createClassAPI } from "../../apis/Class";

export default AddClassForm = () => {

  const [ subject, setSubject ] = useState("");
  const [ startTime, setStartTime ] = useState("");
  const [ endTime, setEndTime ] = useState("");

  useEffect(() => {
    console.log(startTime, endTime);
  }, [startTime, endTime]);

  const body = {
    "subject": "사문 및 생윤",
    "dayTime": "1 20:40 22:50",
    "startDate": "2023-03-06"
  }

  const createForm = (body) => {
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
      <SubjectPicker subject={subject} setSubject={setSubject}/>
      <DayPicker />
      {startTime && (
        <Temp>
          {startTime}
        </Temp>
      )}
      {endTime && (
        <Temp>
          {endTime}
        </Temp>
      )}
      <ButtonContainer>
        <ClassTimePicker text="시작시간" setTime={setStartTime}/>
        <ClassTimePicker text="종료시간" setTime={setEndTime}/>
      </ButtonContainer>
      <Button
        title="되냐"
        onPress={()=>createForm(body)}
      />
    </FormContainer>
  )
};

const FormContainer = styled.View`
  marginHorizontal: 10px;
`;

const Temp = styled.Text`
  margin: 10px;
  fontSize: 16px;
  color: red;
`;

const ButtonContainer = styled.View`
  display: flex;
  flexDirection: row;
  justifyContent: space-between;
`;