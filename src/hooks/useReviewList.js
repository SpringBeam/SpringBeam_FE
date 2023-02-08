import { useState } from "react";
import dayjs from "dayjs";

const defaultReviewList = [
  {
    id: 1,
    content: "고쟁이 레벨 A",
    date: dayjs(),
    isDone: true,
  },
  {
    id: 2,
    content: "국어 문법 복습",
    date: dayjs(),
    isDone: false,
  },
  {
    id: 3,
    content: "유기화학 유기하기",
    date: dayjs(),
    isDone: true,
  },
];

export const useReviewList = (selectedDate) => {
  const [ reviewList, setReviewList ] = useState(defaultReviewList);
  const [ input, setInput ] = useState("");

  const addReview = () => {
    const len = reviewList.length;
    const lastId = len === 0 ? 0 : reviewList[len - 1].id;

    const newReviewList = [
      ...reviewList,
      {
        id: lastId + 1,
        content: input,
        date: selectedDate,
        isDone: false,
      }
    ]
    setReviewList(newReviewList);
  }

  const removeReview = (reviewId) => {
    const newReviewList = reviewList.filter(review => review.id !== reviewId);
    setReviewList(newReviewList)
  }

  const toggleReview = (reviewId) => {
    const newReviewList = reviewList.map(review => {
      if (review.id !== reviewId) return review;
      return {
        ...review,
        isDone: !review.isDone,
      }
    });
    setReviewList(newReviewList);
  }

  return {
    reviewList,
    addReview,
    removeReview,
    toggleReview,
    input,
    setInput,
  }
}