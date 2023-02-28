import React, { useState, useEffect } from "react";
import styled from "styled-components/native";

import ClassTimePicker from "./ClassTimePicker";

export default AddClassForm = () => {

  const [ startTime, setStartTime ] = useState([]);
  const [ endTime, setEndTime ] = useState([]);

  useEffect(() => {
    console.log(startTime, endTime);
  }, [startTime, endTime]);

  return (
    <FormContainer>
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
      <ClassTimePicker text="시작시간" setTime={setStartTime}/>
      <ClassTimePicker text="종료시간" setTime={setEndTime}/>
    </FormContainer>
  )
};

const FormContainer = styled.View`

`;

const Temp = styled.Text`
  fontSize: 16px;
  color: red;
`;