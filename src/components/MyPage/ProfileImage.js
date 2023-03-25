import React from "react";
import styled from "styled-components/native";

import { showPicker } from "./ImagePicker";

export default ProfileImage = () => {

  const onPressHandler = () => {
    showPicker();
  };

  return (
    <ImageContainer
      onPress={() => onPressHandler()}
    >
      
    </ImageContainer>
  );
};

const ImageContainer = styled.TouchableOpacity`
  width: 150px;
  height: 150px;
  backgroundColor: #fff;
  borderRadius: 100px;
`;

