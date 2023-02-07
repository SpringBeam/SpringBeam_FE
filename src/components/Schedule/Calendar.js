import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import dayjs from "dayjs";

import { getCalendarColumns } from "../../utils/util";
import { useCalendar } from "../../hooks/useCalendar";

import CalendarHeader from "./CalendarHeader";
import TimePickerModal from "./TimePickerModal";

export default Calendar = () => {
  const {
    selectedDate,
    setSelectedDate,
    isDatePickerVisible,
    showDatePicker,
    hideDatePicker,
    handleConfirm,
    addMonth,
    subtractMonth,
  } = useCalendar(now);

  const now = dayjs();
  const columns = getCalendarColumns(selectedDate);


  console.log(isDatePickerVisible)

  useEffect(() => {
    console.log(selectedDate)
  }, [selectedDate])

  const renderItem = ({ item: date }) => {
    const dateText = dayjs(date).get("date");
    const day = dayjs(date).get("day");
    const isCurrentMonth = dayjs(date).isSame(selectedDate, "month");
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
        showDatePicker={showDatePicker}
        addMonth={addMonth}
        subtractMonth={subtractMonth}
      />
      <CalendarFrame
        data={columns}
        numColumns={7}
        renderItem={renderItem}
      />
      <TimePickerModal
        isDatePickerVisible={isDatePickerVisible}
        handleConfirm={handleConfirm}
        hideDatePicker={hideDatePicker}
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
