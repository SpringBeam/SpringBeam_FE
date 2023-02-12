import React from "react";
import styled from "styled-components/native";

export default AssignmentPreview = () => {
  return (
    <View>
      <AssignmentTitleSection>
        <AssignemntTitle>
          숙제 1
        </AssignemntTitle>
      </AssignmentTitleSection>
      <ProgressBarSection>
        <ProgressBar>
          <ProgressBarDone>
          </ProgressBarDone>
        </ProgressBar>
      </ProgressBarSection>
    </View>
  )
}

const View = styled.View`
  paddingHorizontal: 20px;
  paddingVertical: 10px;
  display: flex;
  flexDirection: row;
  justify-content: space-between;
`;

const ProgressBarSection = styled.View`
  width: 80%;
`;

const ProgressBar = styled.View`
  position: relative;
  width: 100%;
  borderRadius: 25px;
  border: 1px solid red;
  height: 25px;
`;

const ProgressBarDone = styled.View`
  position: absolute;
  width: 40%;
  height: 25px;
  borderRadius: 12px;
  backgroundColor: red;
`;

const AssignmentTitleSection = styled.View`
`;

const AssignemntTitle = styled.Text`
  textAlign: left;
  fontSize: 16px;
  fontWeight: 500;
`;