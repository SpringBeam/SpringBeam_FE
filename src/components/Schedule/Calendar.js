import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import dayjs from "dayjs";

import { getCalendarColumns } from "../../utils/util";

import CalendarHeader from "./CalendarHeader";

export default Calendar = () => {
  const now = dayjs();
  const columns = getCalendarColumns(now);

  const [ selectedDate, setSelectedDate ] = useState(now);

  useEffect(() => {
    console.log(selectedDate)
  }, [selectedDate])

  const renderItem = ({ item: date }) => {
    const dateText = dayjs(date).get("date");
    const day = dayjs(date).get("day");
    const isCurrentMonth = dayjs(date).isSame(now, "month");
    const onPress = () => {
      setSelectedDate(date);
    }
    const isSelected = dayjs(date).isSame(selectedDate, "date");

    return (
      <CalendarDaySection
        onPress={onPress}
        isSelected={isSelected}
      >
        <DayText 
          day={day}
          isCurrentMonth={isCurrentMonth}
        >
          {dateText}
        </DayText>
      </CalendarDaySection>
    )
  }

  return (
    <CalendarSection>
      <CalendarHeader
        selectedDate={selectedDate}
      />
      <CalendarFrame
        data={columns}
        numColumns={7}
        renderItem={renderItem}
      />
    </CalendarSection>
  ); 
}

const CalendarSection = styled.View`
  width: 100%;
  justifyContent: center;
  alignItems: center;
`;

const CalendarFrame = styled.FlatList`
  
`;

const CalendarDaySection = styled.TouchableOpacity`
  width: 45px;
  height: 45px;
  justifyContent: center;
  alignItems: center;
  backgroundColor: ${props => props.isSelected ? "yellow" : "transparent"}
  borderRadius: 27.5px;
`;

const DayText = styled.Text`
  fontSize: 12px;
  color: ${props => props.day === 0 ? "#e67639" : props.day === 6 ? "#5872d1" : "#2b2b2b"};
  opacity: ${props => props.isCurrentMonth ? 1 : 0.3 };
`;
