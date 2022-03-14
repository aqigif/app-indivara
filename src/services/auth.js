import { client } from "./axios";

export const serviceLogin = (data) => client({
  method: "POST",
  baseURL: "https://reqres.in",
  url: "/api/login",
  data: data
});
