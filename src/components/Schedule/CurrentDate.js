import React from "react";
import styled from "styled-components/native";
import dayjs from "dayjs";

import CurrentDateArrow from "./CurrentDateArrow";

export default CurrentDate = (props) => {
  const selectedDate = props.selectedDate;
  const currentDateText = dayjs(selectedDate).format("YYYY.MM.DD.");

  return (
    <CurrentDateSection>
      <CurrentDateArrow iconName="chevron-left" onPress={() => {}}/>
      <CurrentTouchableArea>
        <CurrentDateText>
          {currentDateText}
        </CurrentDateText>
      </CurrentTouchableArea>
      <CurrentDateArrow iconName="chevron-right" onPress={() => {}}/>
    </CurrentDateSection>
  );
};

const CurrentDateSection = styled.View`
  display: flex;
  flexDirection: row;
  justifyContent: center;
  alignItems: center;
`;

const CurrentTouchableArea = styled.TouchableOpacity`
  paddingHorizontal: 20px;
  paddingVertical: 15px;
`;

const CurrentDateText = styled.Text`
  fontSize: 20px;
  color: #404040;
`;