import { API } from './Token';

const BASE_API = "https://address.com/api/";

/**
 * IF-02
 * 이메일 중복여부 확인 /api/query/user/checkemail
 * @param {{ email: string }} 이메일
 * @returns { isExist: true / false } 중복 여부
 */

export const checkEmailAPI = async (data) => {
  return await API.post(`${BASE_API}/query/user/checkemail`, data)
};

/**
 * IF-03
 * 회원가입 정보 저장 /api/query/user/signup
 * @param {{ email: string, password: string, role: string, name: string }} 이메일, 비밀번호, 역할, 이름
 * @returns { email, role, name } 이메일, 역할, 이름
 */

export const signUPAPI = async (data) => {
  return await API.post(`${BASE_API}/command/user/signup`, data)
};

/**
 * IF-04
 * 회원정보 수정 /api/command/user/update
 * @param {{ rename: string }} 바꿀 이름
 * @returns { code: SUCCESS / FAIL } 응답코드
 */

export const changeInfoAPI = async (data) => {
  return await API.post(`${BASE_API}/command/user/update`, data)
};

/**
 * IF-05
 * 회원 탈퇴 /api/command/user/withdraw
 * @param {{ email: string }} 이메일
 * @returns { code: SUCCESS / FAIL } 응답코드
 */

export const withdrawUserAPI = async () => {
  return await API.post(`${BASE_API}/command/user/withdraw`, data)
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

