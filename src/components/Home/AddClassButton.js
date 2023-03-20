import React from "react";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";

export default AddClassButton = ({navigation}) => {
  return (
    <ButtonWrapper>
      <ButtonContainer onPress={() => navigation.navigate("AddClassroomScreen")}>
        <AntDesign name="plus" size={20} color="#fff" />
      </ButtonContainer>
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled.View`
  alignItems: center;
`;

const ButtonContainer = styled.TouchableOpacity`
  padding: 2px;
  backgroundColor: ${(props) => props.theme["grey_300"]};
  borderRadius: 100px;
`;
