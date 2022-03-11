import axios from "axios";

export const serviceLogin = (data) => axios({
  method: "POST",
  baseURL: "https://reqres.in",
  url: "/api/login",
  data: data
});
