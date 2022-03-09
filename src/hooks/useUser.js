import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { getUsers } from "../services/axios";

const useUser = () => {
  const [users, setUsers] = useState([]);
  const dispatch = useUsersUpdater();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const payload = await getUsers();
      if (payload?.data?.data) {
        setUsers(payload?.data?.data);
        dispatch({ type: "PEOPLES", data: payload?.data?.data });
        dispatch({ type: "CART", data: "KERANJANGKU" });
      } else throw payload;
    } catch (error) {
      console.error(error);
    }
  };
  return { users, setUsers };
};

const UsersStateContext = createContext();
const UsersUpdaterContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "USERS":
      return {
        ...state,
        users: action.data,
      };

    case "PEOPLES":
      return {
        ...state,
        peoples: action.data,
      };

    case "ROLES":
      return {
        ...state,
        roles: action.data,
      };

    case "CART":
        return {
            ...state,
            cart: action.data,
        };
    default:
      return state;
  }
};
export const StateProviders = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
      users: [],
      peoples: [],
      roles: [],
      cart: ""
  });
  console.log(state)
  return (
    <UsersStateContext.Provider value={state}>
      <UsersUpdaterContext.Provider value={dispatch}>
        {children}
      </UsersUpdaterContext.Provider>
    </UsersStateContext.Provider>
  );
};

export const useUsersState = () => useContext(UsersStateContext);

export const useUsersUpdater = () => useContext(UsersUpdaterContext);

export default useUser;
