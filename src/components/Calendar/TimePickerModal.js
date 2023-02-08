import React from "react";
import styled from "styled-components/native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

export default TimePickerModal = ({isDatePickerVisible, handleConfirm, hideDatePicker}) => {

  return(
    <DateTimePickerModal
      isVisible={isDatePickerVisible}
      mode="date"
      onConfirm={handleConfirm}
      onCancel={hideDatePicker}
    />
  )
}