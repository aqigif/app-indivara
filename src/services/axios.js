import axios from "axios";
const baseURL = "https://pokeapi.co/api/v2"

export const client = axios.create({
  baseURL
})

client.interceptors.request.use((config) => {
  const data = localStorage.getItem("persistData");
  const token = JSON.parse(data)?.token
  if (token) {
    config.headers = {
      Authorization: "Bearer " + token,
      ...config.headers,
    };
  }
  return config;
});

client.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return error
  }
);