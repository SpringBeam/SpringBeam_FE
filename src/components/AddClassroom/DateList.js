import React from "react";
import styled from "styled-components/native";

export default DateList = ({totalDate}) => {
  const dateList = totalDate;

  const renderItem = ({item}) => {
    return (
      <ListItem>
        <ItemContent>
          {item}
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

`;

const ItemContent = styled.Text`

`;



