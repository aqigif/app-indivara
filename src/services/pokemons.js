import axios from "axios";
const baseURL = process.env.REACT_APP_API_URL

export const getPokemons = () => axios({
  method: "GET",
  baseURL,
  url: "/pokemon",
});

export const getPokemonByName = (name) => axios({
  method: "GET",
  baseURL,
  url: `/pokemon/${name}`,
});
