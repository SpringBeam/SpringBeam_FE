import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { FontAwesome } from '@expo/vector-icons';

const selectedDates = [];
export default AddDate = ({
  selectedDay, 
  startTime, 
  endTime, 
  setSelectedDay, 
  setStartTime, 
  setEndTime,
  setTotalDate
}) => {
  const daysArray = ["월", "화", "수", "목", "금", "토", "일"];
  const [ newDate, setNewDate ] = useState("");

  const addDate = () => {
    const i = daysArray.indexOf(selectedDay) + 1;
    const temp = i + ' ' + startTime + ' ' + endTime;
    setNewDate(temp);
    setSelectedDay("");
    setStartTime("");
    setEndTime("");
    selectedDates.push(newDate);
  }

  useEffect(()=>{
    setTotalDate(selectedDates);
  }, [selectedDates]);

  return (
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
  );
};

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