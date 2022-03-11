import { useSMState, useSMUpdater } from "./useSM";
  
  const usePokemon = () => {
    const state = useSMState();
    const dispatch = useSMUpdater();
    
    const addPokemonToCart = (data) => {
        dispatch({
            type: "ADD_DIGIMON_TO_CART",
            data
        })
    }

    const deletePokemonFromCart = (index) => {
      dispatch({
          type: "DELETE_DIGIMON_FROM_CART",
          index: index
      })
    }
    
    return { pokemonCarts: state?.pokemonCarts, addPokemonToCart, deletePokemonFromCart };
  };
  
  export default usePokemon;
  
export const switcherDigimons = (state, action) => {
  switch (action.type) {
    case "ADD_DIGIMON_TO_CART":
      return {
        ...state,
        pokemonCarts:[...state.pokemonCarts, action.data],
      };
    case "DELETE_DIGIMON_FROM_CART":
      return {
        ...state,
        pokemonCarts: state.pokemonCarts.filter((item, index) => index !== action.index)
      };
    default:
      return state;
  }
};