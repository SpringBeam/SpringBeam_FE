import React, { useCallback } from "react";
import styled from "styled-components/native";

import { FontAwesome5 } from "@expo/vector-icons";

export default AddReviewButton = ({navigation}) => {

  const onPressAdd = useCallback(()=> {
    navigation.navigate("AddReviewScreen")
  })

  return (
    <ButtonSection>
      <ButtonFrame
        onPress={onPressAdd}
      >
        <Button>
          <FontAwesome5 name="pencil-alt" size={20} color="black" />
        </Button>
      </ButtonFrame>
    </ButtonSection>
  );
}

const ButtonSection = styled.View`
  position: absolute;
  top: 90px;
  right: 0px;
`;

const ButtonFrame = styled.TouchableOpacity`

`;

const Button = styled.View`
  width: 60px;
  height: 60px;
  alignItems: center;
  justifyContent: center;
`;