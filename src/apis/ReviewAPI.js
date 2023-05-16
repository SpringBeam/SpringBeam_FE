import { API } from './TokenAPI';

const BASE_API = "https://ec2-43-201-71-214.ap-northeast-2.compute.amazonaws.com";

/**
 * IF-27
 * 복습 항목 추가 /api/review
 * @param {{ tutoringId: 수업 번호, body: 복습 내용, tagId: 태그번호 }} 
 * @returns { code: SUCCESS, FAIL } 응답 코드
 */

export const createReviewAPI = async (data) => {
  return await API.post(`${BASE_API}/api/review`, data)
};

/**
 * IF-06
 * 내 정보 조회 /api/command/user/detail
 * @param {} 
 * @returns { email: string, role: string, name: string } 이메일, 역할, 이름
 */

export const myInfoAPI = async () => {
  return await API.get(`${BASE_API}/query/user/detail`)
};
