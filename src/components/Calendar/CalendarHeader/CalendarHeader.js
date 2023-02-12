import React from "react";
import styled from "styled-components/native";
import { getDayText } from "../../../utils/util";

import CurrentDate from "./CurrentDate";

export default CalendarHeader = ({selectedDate, showDatePicker, addMonth, subtractMonth}) => {

  return(
    <HeaderSection>
      <CurrentDate
        selectedDate={selectedDate}
        showDatePicker={showDatePicker}
        addMonth={addMonth}
        subtractMonth={subtractMonth}
      />
      <ColumnSection>
        {[0, 1, 2, 3, 4, 5, 6].map(day => {
          const dayText = getDayText(day);
          return(
            <ColumnDaySection
              disabled={true}
            >
              <ColumnText
                day={day}
                >
                {dayText}
              </ColumnText>
            </ColumnDaySection>
          )
        })}
      </ColumnSection>
    </HeaderSection>
  );
}

const HeaderSection = styled.View`
  justifyContent: center;
  alignItems: center;
`;

const ColumnSection = styled.View`
  display: flex;
  flexDirection: row;
`;
  
const ColumnDaySection = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  justifyContent: center;
  alignItems: center;
`;

const ColumnText = styled.Text`
  fontSize: 14px;
  color: ${props => props.day === 0 ? "#e67639" : props.day === 6 ? "#5872d1" : "#2b2b2b"};
`;