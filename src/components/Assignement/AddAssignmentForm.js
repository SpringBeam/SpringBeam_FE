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
import {createAssignmentAPI} from "../../apis/AssignmentAPI";
export default AddAssignmentForm = () => {
  const [ body, setBody ] = useState("");
  const [ selectedDay, setSelectedDay ] = useState("");
  const [ startTime, setStartTime ] = useState("");
  const [ endTime, setEndTime ] = useState("");
  const [ startDate, setStartDate ] = useState("");
  const [ totalDate, setTotalDate ] = useState([]);

  const createForm = () => {


    createAssignmentAPI(body)
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
      <SubTitle text="1. 숙제 내용"/>
      <input></input>
      <Margin size={10} />
      <SubTitle text="2. 시작 일시"/>
      <Margin size={10} />
      <DayPicker 
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay} 
      />
      <Margin size={10} />
 
     

      <SubTitle text="3. 마감 일시"/>
      <Margin size={10} />
      <DayPicker 
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay} 
      />
           <Margin size={10} />
 
     

 <SubTitle text="3. 제출 빈도"/>
 <Margin size={10} />
<input></input>
<Margin size={10} />
<SubTitle text="4. 매번 제출 분량"/>
 <Margin size={10} />
<input></input>
  
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