import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import Picker from "react-native-picker-select";
import styled from "styled-components/native";

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
      <Picker
        value={subject}
        onValueChange={(item) => setSubject(item)}
        placeholder={{ label: "수업하는 과목을 선택해주세요."}}
        items={[
          { label: "국어", value: "국어", key: "1"},
          { label: "수학", value: "수학", key: "2"},
          { label: "과학", value: "과학", key: "3"},
          { label: "사회", value: "사회", key: "4"},
          { label: "물리", value: "물리", key: "5"},
          { label: "화학", value: "화학 ", key: "6"},
          { label: "생명과학", value: "생명과학", key: "7"},
          { label: "논술", value: "논술", key: "8"},
          { label: "중국어", value: "중국어", key: "9"},
          { label: "독일어", value: "독일어", key: "10"},
        ]}
        useNativeAndroidPickerStyle={false}
        style={pickerSelectStyles}
      >
      </Picker>
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

  const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
      fontSize: 16,
      paddingVertical: 12,
      paddingHorizontal: 0,
      // borderWidth: 1,
      // borderColor: 'gray',
      // borderRadius: 4,
      color: 'black',
      paddingRight: 30 // to ensure the text is never behind the icon
    },
    inputAndroid: {
      width: 320,
      fontSize: 16,
      paddingVertical: 8,
      paddingHorizontal: 0,
      // borderWidth: 0.5,
      // borderColor: 'purple',
      // borderRadius: 8,
      color: 'black',
      paddingRight: 30 // to ensure the text is never behind the icon
    }
  });