import React from "react";
import styled from "styled-components/native";

export default DayPicker = () => {

  const days = ["월", "화", "수", "목", "금", "토", "일"];

  const dayList = days.map((day, index) => (
    <DayButton key={index}>
      <ButtonText>
        {day}
      </ButtonText>
    </DayButton>
  ))

  return (
    <PickerContainer>
      {dayList}
    </PickerContainer>
  );
}

const PickerContainer = styled.View`
  display: flex;
  flexDirection: row;
  justifyContent: space-between;
  alignItems: space-between;
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