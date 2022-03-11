import {
  ADD_POKEMON_TO_CART,
  DELETE_POKEMON_FROM_CART,
} from "../../constants/action.type";

export const reducers = (state, action) => {
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
    case "PERSIST":
      return {
        ...state,
        ...action.data,
      };
    default:
      return state;
  }
};

const combineReducers = (state, action) => {
  return reducers(state, action);
};

const persitingData = (state, action) => {
  // to whitelist where data should be persisted
  const persistData = { pokemonCarts: state.pokemonCarts, token: state.token };
  // if u need persist all data just uncomment this line
  // const persistData = { ...state };
  localStorage.setItem("persistData", JSON.stringify(persistData));
};

export const initialReducerState = {
  pokemonCarts: [],
  token: null,
};

const reducer = (state, action) => {
  const states = combineReducers(state, action);
  persitingData(states, action);
  return states;
};

export default reducer;
