import { useState } from "react";
import dayjs from "dayjs";

export const useCalendar = (now) => {
  const [ selectedDate, setSelectedDate ] = useState(now);
  const [ isDatePickerVisible, setIsDatePickerVisible ] = useState(false);

  const showDatePicker = () => {
    setIsDatePickerVisible(true);
  };

  const hideDatePicker = () => {
    setIsDatePickerVisible(false);
  };

  const handleConfirm = (date) => {
    console.warn("해당 날짜가 선택되었습니다: ", date)
    setSelectedDate(date);
    hideDatePicker();
  };

  const subtractMonth = () => {
    const newSelectedDate = dayjs(selectedDate).subtract(1, "month");
    setSelectedDate(newSelectedDate);
  }

  const addMonth = () => {
    const newSelectedDate = dayjs(selectedDate).add(1, "month");
    setSelectedDate(newSelectedDate);
  }

  return {
    selectedDate,
    setSelectedDate,
    isDatePickerVisible,
    showDatePicker,
    hideDatePicker,
    handleConfirm,
    subtractMonth,
    addMonth,
  };
};