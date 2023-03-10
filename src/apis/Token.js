import axios from "axios";
import moment from "moment";

export const API = axios.create({});

API.intercepters.request.use(async (res) => {
  let accessToken = ("수정");
})