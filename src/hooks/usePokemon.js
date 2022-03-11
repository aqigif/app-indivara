import {
  ADD_POKEMON_TO_CART,
  DELETE_POKEMON_FROM_CART,
} from "../constants/action.type";
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

  return {
    pokemonCarts: state?.pokemonCarts,
    addPokemonToCart,
    deletePokemonFromCart,
  };
};

export default usePokemon;
