import React from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

import Margin from "../Margin";

export default StudentProfile = () => {
  return(
    <ProfileSection>
      <ImageSection>
        <Ionicons name="person-circle-outline" size={56} color="black" />
      </ImageSection>
      <BasicInfoSection>
        <NameSection>
          <StudentName>
            김철수
          </StudentName>
          <EditButtonContainer>
            <Ionicons name="pencil" size={16} color="black" />
          </EditButtonContainer>
        </NameSection>
        <Margin size={2} />
        <SchoolSection>
          <SchoolName>
            아현중학교 3학년
          </SchoolName>
        </SchoolSection>
      </BasicInfoSection>
      <DetailInfoSection>
        <ClassSection>
          <KeyText>
            과목
          </KeyText>
          <ValueText>
            수학
          </ValueText>
        </ClassSection>
        <TimeSection>
          <KeyText>
            시간
          </KeyText>
          <ValueTextContainer>
            <ValueText>
              매주 수요일
            </ValueText>
            <ValueText>
              19:00 ~ 21:00
            </ValueText>
          </ValueTextContainer>
        </TimeSection>
      </DetailInfoSection>
    </ProfileSection>
  );
}

const ProfileSection = styled.View`
  paddingVertical: 10px;
  paddingHorizontal: 10px;
  display: flex;
  flexDirection: row;
  alignItems: center;
  backgroundColor: white;
`;

const ImageSection = styled.View`
`;

const BasicInfoSection = styled.View`
  display: flex;
  flexDirection: column;
  marginLeft: 10px;
  marginRight: 40px;
`;
  
const NameSection = styled.View`
  display: flex;
  flexDirection: row;
  justifyContent: space-between;
  alignItems: center;
  `;
  
const StudentName = styled.Text`
  fontSize: 18px;
  fontWeight: 500;
  textAlign: left;
`;
  
const EditButtonContainer = styled.TouchableOpacity`
`;
  
const SchoolSection = styled.View`
`;
  
const SchoolName = styled.Text`
  color: grey;
  textAlign: left;
`;

const DetailInfoSection = styled.View`
  flex: 1;
  display: flex;
  flexDirection: column;
`;

const ClassSection = styled.View`
  display: flex;
  flexDirection: row;
`;

const TimeSection = styled.View`
  display: flex;
  flexDirection: row;
`;

const KeyText = styled.Text`
  color: grey;
  paddingRight: 10px;
`;

const ValueTextContainer = styled.View`
  display: flex;
  flexDirection: column;
`;

const ValueText = styled.Text`

`;