import { createContext, useContext, useEffect, useReducer } from "react";
import reducer, { initialReducerState } from "./reducers";

const SMStateContext = createContext();
const SMUpdaterContext = createContext();

export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialReducerState);

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
