import React from "react";
import styled from "styled-components/native";

export default DateList = ({totalDate}) => {
  const dayList = ["월", "화", "수", "목", "금", "토", "일"];
  const dateList = totalDate.filter((item) => item !== "");

  const renderItem = ({item}) => {
    const array = item.split(" ");
    const day = dayList[array[0]-1];
    const startTime = array[1];
    const endTime = array[2];

    return (
      <ListItem>
        <ItemContent>
          {day}요일
        </ItemContent>
        <DateContainer>
          <DateContent>
            {startTime}
          </DateContent>
        </DateContainer>
        <DateSeparator>
          <DateSeparatorContent>
            ~
          </DateSeparatorContent>
        </DateSeparator>
        <DateContainer>
          <DateContent>
            {endTime}
          </DateContent>
        </DateContainer>
      </ListItem>
    );
  };

  return(
    <ListWrapper>
      <ListContainer
        data={dateList}
        renderItem={renderItem}
        keyExtractor={(item) => item}
        ItemSeparatorComponent={() => <Separator />}
      />
    </ListWrapper>
  );
}

const ListWrapper = styled.View`

`;

const ListContainer = styled.FlatList`

`;

const ListItem = styled.View`
  display: flex;
  flex-direction: row;
  alignItems: center;
  paddingVertical: 10px;
`;

const ItemContent = styled.Text`
  fontSize: 20px;
  fontFamily: "ExtraBold";
  paddingRight: 20px;
  color: ${(props) => props.theme["blue_100"]}
`;

const Separator = styled.View`
  height: 1px;
  background-color: ${(props) => props.theme["grey_200"]};
`;

const DateContainer = styled.View`
  backgroundColor: ${(props) => props.theme["blue_100"]};
  borderRadius: 12px;
  paddingVertical: 5px;
  paddingHorizontal: 8px;
`;

const DateContent = styled.Text`
  color: #fff;
  fontSize: 12px;
  fontFamily: "Bold";
`;
  
const DateSeparator = styled.View`
  display: flex;
  flexDirection: column;
  marginHorizontal: 4px;
  paddingHorizontal: 4px;
`;

const DateSeparatorContent = styled.Text`
  color: ${(props) => props.theme["blue_100"]};
  fontSize: 20px;
  fontFamily: "Bold";
`;