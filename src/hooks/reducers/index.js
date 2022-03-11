import {
  ADD_POKEMON_TO_CART,
  DELETE_POKEMON_FROM_CART,
} from "../../constants/action.type";

export const reducerPokemons = (state, action) => {
  switch (action.type) {
    case ADD_POKEMON_TO_CART:
      return {
        ...state,
        pokemonCarts: [...state.pokemonCarts, action.data],
      };
    case DELETE_POKEMON_FROM_CART:
      return {
        ...state,
        pokemonCarts: state.pokemonCarts.filter(
          (item, index) => index !== action.index
        ),
      };
    default:
      return state;
  }
};

export const reducerAuth = (state, action) => {
  switch (action.type) {
    case "DO_LOGIN":
      return {
        ...state,
        token: action.token,
      };
    case "DO_LOGOUT":
      return {
        ...state,
        token: null,
      };
    default:
      return state;
  }
};

const combineReducers = (state, action) => {
  const dataAuth = reducerAuth(state, action);
  const dataPokemon = reducerPokemons(state, action);
  return { ...dataPokemon, ...dataAuth };
};

const persitingData = (state, action) => {
  let states = { ...state };
  if (action.type === "PERSIST") {
    states = {
      ...state,
      ...action.data,
    };
  }
  // to whitelist where data should be persisted
  const persistData = { pokemonCarts: state.pokemonCarts, token: state.token };
  // if u need persist all data just uncomment this line
  // const persistData = { ...state };
  localStorage.setItem("persistData", JSON.stringify(persistData));
  return states;
};

export const initialReducerState = {
  pokemonCarts: [],
  token: null,
}

const reducer = (state, action) => {
  const reducers = combineReducers(state, action);
  const persistData = persitingData(state, action);
  return { ...reducers, ...persistData };
};

export default reducer;
