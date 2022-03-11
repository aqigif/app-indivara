import { createContext, useContext, useEffect, useReducer } from "react";
import { switcherPokemons } from "./usePokemon";

const SMStateContext = createContext();
const SMUpdaterContext = createContext();

const switcher = (state, action) => {
  const dataPokemon = switcherPokemons(state, action)
  const dataDigimon = switcherPokemons(state, action)
  let states = {...dataPokemon, dataDigimon}
  if (action.type === "PERSIST") {
    states = {
      ...state,
      ...action.data
    }
  }
  return states
};
const reducer = (state, action) => {
  const data = switcher(state, action);
  const persistData = { pokemonCarts: data.pokemonCarts };
  localStorage.setItem("persistData", JSON.stringify(persistData));
  return data;
};

export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    pokemonCarts: [],
  });

  useEffect(() => {
    const data = localStorage.getItem("persistData");
    if (data) {
      dispatch({ type: "PERSIST", data: JSON.parse(data) });
    }
  }, []);

  return (
    <SMStateContext.Provider value={state}>
      <SMUpdaterContext.Provider value={dispatch}>
        {children}
      </SMUpdaterContext.Provider>
    </SMStateContext.Provider>
  );
};

export const useSMState = () => useContext(SMStateContext);

export const useSMUpdater = () => useContext(SMUpdaterContext);
