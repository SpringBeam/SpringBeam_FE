import React from "react";
import styled from "styled-components/native";

export default AssignmentNoteBtn = () => {
  return (
    <View>
      <NoteBtn>
        <Text>숙제노트</Text>
      </NoteBtn>
      <Margin size={10} />
    </View>
  );
};

const View = styled.View`
  paddinghorizontal: 20px;
  paddingvertical: 10px;
  display: flex;
  flexdirection: row;
  justify-content: space-between;
`;

const NoteBtn = styled.TouchableOpacity`
  color: white;
  background-color: #0c9bfb;
  border-radius: 12px;

  border-radius: 8px;
`;
