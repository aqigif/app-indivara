
import { client } from "./axios";

export const getUsers = () => client({
  method: "GET",
  baseURL: "https://reqres.in",
  url: "/api/users?page=2",
});
