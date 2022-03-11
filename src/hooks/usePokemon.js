import { ADD_POKEMON_TO_CART, DELETE_POKEMON_FROM_CART } from "../constants/action.type";
import { useSMState, useSMUpdater } from "./useSM";
  
  const usePokemon = () => {
    const state = useSMState();
    const dispatch = useSMUpdater();
    
    const addPokemonToCart = (data) => {
        dispatch({
            type: ADD_POKEMON_TO_CART,
            data
        })
    }

    const deletePokemonFromCart = (index) => {
      dispatch({
          type: DELETE_POKEMON_FROM_CART,
          index: index
      })
    }
    
    return { pokemonCarts: state?.pokemonCarts, addPokemonToCart, deletePokemonFromCart };
  };
  
export const switcherPokemons = (state, action) => {
  switch (action.type) {
    case ADD_POKEMON_TO_CART:
      return {
        ...state,
        pokemonCarts:[...state.pokemonCarts, action.data],
      };
    case DELETE_POKEMON_FROM_CART:
      return {
        ...state,
        pokemonCarts: state.pokemonCarts.filter((item, index) => index !== action.index)
      };
    default:
      return state;
  }
};
  export default usePokemon;
  