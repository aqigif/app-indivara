import { useSMState, useSMUpdater } from "./useSM";
  
  const usePokemon = () => {
    const state = useSMState();
    const dispatch = useSMUpdater();
    
    const addPokemonToCart = (data) => {
        dispatch({
            type: "ADD_POKEMON_TO_CART",
            data
        })
    }
    console.log(state)
    return { pokemonCarts: state?.pokemonCarts, addPokemonToCart };
  };
  
  export default usePokemon;
  