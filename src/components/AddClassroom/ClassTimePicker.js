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
  paddingVertical: 10px;
  paddingHorizontal: 12px;
  backgroundColor: ${(props) => props.theme['blue_100']};
  border: 1px solid ${(props) => props.theme['blue_100']};
  borderRadius: 12px;
  alignItems: center;
`;

const ButtonText = styled.Text`
  fontSize: 16px;
  lineHeight: 20px;
  fontFamily: "ExtraBold";
  color: ${(props) => props.theme['white']};
`;