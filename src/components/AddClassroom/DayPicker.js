import React, { useState } from "react";
import styled from "styled-components/native";

import Margin from "../Margin";
import ClassTimePicker from "./ClassTimePicker";

export default DayPicker = ({setSelectedDay, setStartTime, setEndTime}) => {

  const [ isClicked, setIsClicked ] = useState(false);

  const handleClick = (day) => {
    setSelectedDay(day);
    setIsClicked(true);
  };

  const days = ["월", "화", "수", "목", "금", "토", "일"];

  const dayList = days.map((day, index) => (
    <DayButton key={index} onPress={() => handleClick(day)}>
      <ButtonText>
        {day}
      </ButtonText>
    </DayButton>
  ))

  return (
    <Wrapper>
    <PickerContainer>
      {dayList}
    </PickerContainer>
    <Margin size={10}/>
    { isClicked && (
      <TimeButtonContainer>
        <ClassTimePicker text="시작시간" setTime={setStartTime}/>
        <ClassTimePicker text="종료시간" setTime={setEndTime}/>
      </TimeButtonContainer>
    )}
    </Wrapper>
  );
}

const Wrapper = styled.View`
  display: flex;
  flexDirection: column;
`;

const PickerContainer = styled.View`
  display: flex;
  flexDirection: row;
  justifyContent: space-between;
`;

const TimeButtonContainer = styled.View`
  display: flex;
  flexDirection: row;
  justifyContent: space-between;
`;

const DayButton = styled.TouchableOpacity`
  paddingVertical: 6px;
  paddingHorizontal: 10px;
  backgroundColor: ${(props) => props.theme['blue_100']};
  border: 1px solid ${(props) => props.theme['blue_100']};
  borderRadius: 10px;
  alignItems: center;
`;

const ButtonText = styled.Text`
  fontSize: 14px;
  lineHeight: 14px;
  fontFamily: "Bold";
  color: ${(props) => props.theme['white']};
`;