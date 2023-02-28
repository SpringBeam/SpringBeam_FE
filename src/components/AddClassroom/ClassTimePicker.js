import React, { useState } from "react";
import styled from "styled-components/native";
import DateTimePicker from "react-native-modal-datetime-picker";

export default ClassTimePicker = (props) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (time) => {
    console.log(time.toTimeString());
    props.setTime(time.toTimeString());
    hideDatePicker();
  };

  return (
    <PickerContainer>
      <Button onPress={showDatePicker}>
        <ButtonText>
          {props.text}
        </ButtonText>
      </Button>
      <DateTimePicker
        isVisible={isDatePickerVisible}
        mode="time"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </PickerContainer>
  );
};

const PickerContainer = styled.View`

`;

const Button = styled.TouchableOpacity`

`;

const ButtonText = styled.Text`

`;