import styled from "styled-components/native"
import { FontAwesome5 } from '@expo/vector-icons';

export default CurrentDateArrow = ({ iconName, onPress }) => {
  return (
    <CurrentTouchableArea
      onPress={onPress}
    >
      <FontAwesome5
        name={iconName} 
        size={18} 
        color="#404040" 
      />
    </CurrentTouchableArea>
  )
}

const CurrentTouchableArea = styled.TouchableOpacity`
  paddingHorizontal: 20px;
  paddingVertical: 15px;
`;