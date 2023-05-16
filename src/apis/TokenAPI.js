import AsyncStorage from "@react-native-async-storage/async-storage";
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
  const accessTokenExpirationTime = AsyncStorage.getItem("accessTokenExpirationTime");

  console.log("인터셉터 가동")

  // if (refreshToken && moment(accessTokenExpirationTime).diff(moment()) < 0) {
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
    AsyncStorage.setItem(
      "accessTokenExpirationTime",
      moment().add(8, "minutes").format("yyyy-MM-DD HH:mm:ss"),
    );
  // }
});