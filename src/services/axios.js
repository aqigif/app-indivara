import axios from "axios";

export const getUsers = () => axios({
  method: "GET",
  baseURL: "https://reqres.in",
  url: "/api/users?page=2",
});
