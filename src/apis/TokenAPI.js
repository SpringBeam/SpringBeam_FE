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

const BASE_API = "";

API.interceptors.request.use(async (res) => {
  let accessToken = getAccessToken();
  const refreshToken = getRefreshToken();
  const accessTokenExpirationTime = localStorage.getItem("accessTokenExpirationTime");

  if (refreshToken && moment(accessTokenExpirationTime).diff(moment()) < 0) {
    const { data } = await axios.post(
      `${BASE_API}/auth/refresh`,
      {},
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          refreshToken: refreshToken,
        },
      },
    );
    accessToken = data.accessToken;
    setAccessToken(data.accessToken);
    setRefreshToken(data.refreshToken);
    localStorage.setItem(
      "accessTokenExpirationTime",
      moment().add(8, "minutes").format("yyyy-MM-DD HH:mm:ss"),
    );
  }
});