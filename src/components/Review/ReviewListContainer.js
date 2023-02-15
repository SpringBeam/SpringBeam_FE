import React from "react";
import styled from "styled-components/native";
import dayjs from "dayjs";

import ReviewCheckBox from "../../components/Review/CheckButton";

import { useCalendar } from "../../hooks/useCalendar";
import { useReviewList } from "../../hooks/useReviewList";


export default ReviewListContainer = () => {
  const now = dayjs();
  const {selectedDate} = useCalendar(now);
  const {reviewList} = useReviewList(selectedDate);

  return (
    <ListSection>
      <ListFrame
        data={reviewList}
        renderItem={({ item: review }) => {
          return (
            <ReviewContainer>
              <ReviewText>{review.content}</ReviewText>
              <ReviewCheckBox />
            </ReviewContainer>
          )
        }}
      />
    </ListSection>
  );
};

const ListSection = styled.View`
  paddingHorizontal: 15px;
`;

const ListFrame = styled.FlatList`
`;

const ReviewContainer = styled.View`
  display: flex;
  flexDirection: row;
  justifyContent: space-between;
  paddingVertical: 15px;
`;

const ReviewText = styled.Text`
  fontSize: 18px;
  lineHeight: 24px;
  fontFamily: "Regular";
  color: ${(props) => props.theme['grey_300']};
`;