import React, { useCallback } from "react";
import styled from "styled-components/native";

import { FontAwesome } from "@expo/vector-icons";

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
          <FontAwesome name="arrow-left" size={22} color="#fff" />
        </Button>
      </ButtonFrame>
    </ButtonSection>
  );
}

const ButtonSection = styled.View`
  position: absolute;
  right: 15px;
  bottom: 24px;
`;

const ButtonFrame = styled.TouchableOpacity`

`;

const Button = styled.View`
  width: 60px;
  height: 60px;
  backgroundColor: black;
  borderRadius 30px;
  alignItems: center;
  justifyContent: center;
`;