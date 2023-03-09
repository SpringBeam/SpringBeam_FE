import React from "react";
import styled from "styled-components/native";

export default DateList = ({totalDate}) => {
  const dayList = ["월", "화", "수", "목", "금", "토", "일"];
  const dateList = totalDate;

  console.log(totalDate);

  const renderItem = ({item}) => {
    const array = item.split(" ");
    const day = dayList[array[0]-1];
    const startTime = array[1];
    const endTime = array[2];

    console.log(totalDate);

    if (!item) {
      return null;
    };

    return (
      <ListItem>
        <ItemContent>
          {day}
        </ItemContent>
        <ItemContent>
          {startTime}
        </ItemContent>
        <ItemContent>
          {endTime}
        </ItemContent>
      </ListItem>
    );
  };

  return(
    <ListWrapper>
      <ListContainer
        data={dateList}
        renderItem={renderItem}
        keyExtractor={(item) => item}
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
`;

const ItemContent = styled.Text`

`;

