import axios from "axios";
import moment from "moment";
import {
  setAccessToken,
  getAccessToken,
  setRefreshToken,
  getRefreshToken,
  setAuthentication,
} from "../auth/index";

export const API = axios.create({});

// API.intercepters.request.use(async (res) => {
//   let accessToken = getAccessToken();
//   const refreshToken = getRefreshToken();
// })