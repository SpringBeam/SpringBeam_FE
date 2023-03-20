import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { FontAwesome } from '@expo/vector-icons';

export default AddDate = ({
  selectedDay, 
  startTime, 
  endTime, 
  setSelectedDay, 
  setStartTime, 
  setEndTime,
  totalDate,
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
  };

  useEffect(()=>{
    let newArr = [...totalDate];
    newArr.push(newDate);
    setTotalDate(newArr);
  }, [newDate, setNewDate]);

  return (
    <DayTimeContainer>
      <TextContainer>
        {selectedDay && (
          <DayText>
            {selectedDay}요일
          </DayText>
        )}
        {startTime && (
          <TimeTextContainer>
            <TimeText>
              {startTime}
            </TimeText>
          </TimeTextContainer>
        )}
        {startTime && endTime && (
          <DateSeparator>
            <DateSeparatorContent>
              ~
            </DateSeparatorContent>
          </DateSeparator>
        )}
        {endTime && (
          <TimeTextContainer>
            <TimeText>
              {endTime}
            </TimeText>
          </TimeTextContainer>
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

const DayText = styled.Text`
  fontSize: 20px;
  fontFamily: "ExtraBold";
  paddingRight: 20px;
  color: ${(props) => props.theme["blue_100"]}
`;

const TimeTextContainer = styled.View`
  backgroundColor: ${(props) => props.theme["blue_100"]};
  borderRadius: 12px;
  paddingVertical: 5px;
  paddingHorizontal: 8px;
`;

const TimeText = styled.Text`
  color: #fff;
  fontSize: 12px;
  fontFamily: "Bold";
`;

const DateSeparator = styled.View`
  display: flex;
  flexDirection: column;
  marginHorizontal: 4px;
  paddingHorizontal: 4px;
`;

const DateSeparatorContent = styled.Text`
  color: ${(props) => props.theme["blue_100"]};
  fontSize: 20px;
  fontFamily: "Bold";
`;

const AddButton = styled.TouchableOpacity`
  paddingVertical: 6px;
  paddingHorizontal: 8px;
  backgroundColor: ${(props) => props.theme['blue_100']};
  borderRadius: 300px;
  alignItems: center;
`;