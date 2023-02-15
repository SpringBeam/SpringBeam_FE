import React from "react";
import styled from "styled-components/native";

export default SignUpButton = ({text}) => {
  return (
    <TouchableArea>
      <Button>
        <Text>
          {text}
        </Text>
      </Button>
    </TouchableArea>
  );
}

const TouchableArea = styled.TouchableOpacity`
  activeOpacity: 0.8;
`;

const Button = styled.View`
  paddingVertical: 16px;
  backgroundColor: ${(props) => props.theme['blue_100']};
  border: 1px solid ${(props) => props.theme['blue_100']};
  borderRadius: 12px;
  alignItems: center;
`;

const Text = styled.Text`
  fontSize: 20px;
  lineHeight: 20px;
  fontFamily: "Bold";
  color: ${(props) => props.theme['white']};
`;