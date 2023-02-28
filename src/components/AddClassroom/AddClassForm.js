import React, { useState, useEffect } from "react";
import styled from "styled-components/native";

import SubjectPicker from "./SubjectPicker";
import ClassTimePicker from "./ClassTimePicker";

export default AddClassForm = () => {

  const [ subject, setSubject ] = useState("");
  const [ startTime, setStartTime ] = useState("");
  const [ endTime, setEndTime ] = useState("");

  useEffect(() => {
    console.log(startTime, endTime);
  }, [startTime, endTime]);

  return (
    <FormContainer>
      <SubjectPicker subject={subject} setSubject={setSubject}/>
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
    </FormContainer>
  )
};

const FormContainer = styled.View`
  alignItems: center;
  marginHorizontal: 10px;
`;

const Temp = styled.Text`
  margin: 10px;
  fontSize: 16px;
  color: red;
`;

const ButtonContainer = styled.View`
  width: 80%;
  display: flex;
  flexDirection: row;
  justifyContent: space-between;
`;