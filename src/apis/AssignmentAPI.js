import { API } from './Token';

const BASE_API = "https://address.com/api/";

/**
 * IF-33
 * 숙제추가/api/command/assignment/create
 * @param {{ tutoringId.body, startDate, endDate, setting, amount:string }} 이메일
 * @returns { code } 중복 여부
 */

export const createAssinmentAPI = async (data) => {
  return await API.post(`${BASE_API}/command/assignment/create`, data)
};

``
