import React, { useState } from "react";
import styled from "styled-components/native";
import DateTimePicker from "react-native-modal-datetime-picker";

export default ClassTimePicker = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  return (
    <PickerContainer>
      <Button onPress={showDatePicker}>
        <ButtonText>
          눌러
        </ButtonText>
      </Button>
      <DateTimePicker
        isVisible={isDatePickerVisible}
        mode="time"
        // onConfirm={<></>}
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