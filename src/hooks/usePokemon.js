import { useEffect, useState } from "react";
import {
  ADD_POKEMON_TO_CART,
  DELETE_POKEMON_FROM_CART,
} from "../constants/action.type";
import { getPokemonByName, getPokemons } from "../services/pokemons";
import { useSMState, useSMUpdater } from "./useSM";

const usePokemon = () => {
  const state = useSMState();
  const dispatch = useSMUpdater();

  const addPokemonToCart = (data) => {
    dispatch({
      type: ADD_POKEMON_TO_CART,
      data,
    });
  };

  const deletePokemonFromCart = (index) => {
    dispatch({
      type: DELETE_POKEMON_FROM_CART,
      index: index,
    });
  };
  const [pokemonData, setPokemons] = useState([]);

  useEffect(() => {
    fetchPokemons();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchPokemons = async () => {
    try {
      const payload = await getPokemons();
      const promises = Array.from(payload?.data?.results || []).map(
        async (item) => {
          const payloadDetail = await getPokemonByName(item?.name || "");
          return {
            ...payloadDetail.data,
            id: payloadDetail?.data?.name || "",
            name: payloadDetail?.data?.name || "",
            img:
              payloadDetail?.data?.sprites.other.dream_world.front_default ||
              "",
          };
        }
      );
      const results = await Promise.all(promises);
      setPokemons(results);
    } catch (error) {
      console.log(error, "error");
    }
  };

  return {
    pokemonData,
    pokemonCarts: state?.pokemonCarts,
    addPokemonToCart,
    deletePokemonFromCart,
  };
};

export default usePokemon;
