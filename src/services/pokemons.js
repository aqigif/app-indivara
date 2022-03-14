import { client } from "./axios";

export const getPokemons = () => client({
  method: "GET",
  url: "/pokemon",
});

export const getPokemonByName = (name) => client({
  method: "GET",
  url: `/pokemon/${name}`,
});
