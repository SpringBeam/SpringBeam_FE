import { API } from './TokenAPI';

const BASE_API = "http://ec2-3-35-210-123.ap-northeast-2.compute.amazonaws.com";

/**
 * IF-07
 * 수업 생성 (일정, 과목 등 정보 등록) /api/command/tutoring/create
 * @param {{ subject: string, dayTime: string, startDate: string }} 과목, 정규일정, 과외 시작일
 * @returns { code: SUCCESS, FAIL } 응답 코드
 */

export const createClassAPI = async (data) => {
  return await API.post(`${BASE_API}/api/tutoring`, data)
};

/**
 * IF-08
 * 수업 정보 수정 /api/command/tutoring/update
 * @param {{ tutoringId: int, subject: string, startDate: string }} 식별번호, 과목, 과외 시작일
 * @returns { code: SUCCESS, FAIL } 응답 코드
 */

export const changeClassAPI = async (data) => {
  return await API.post(`${BASE_API}/command/tutoring/update`, data)
};

/**
 * IF-09
 * 수업 삭제 /api/command/tutoring/delete
 * @param {{ tutoringId: int }} 식별번호
 * @returns { code: SUCCESS, FAIL } 응답 코드
 */

export const removeClassAPI = async (data) => {
  return await API.post(`${BASE_API}/command/tutoring/delete`, data)
};