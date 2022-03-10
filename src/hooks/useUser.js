import {
  useEffect, useState
} from "react";
import { getUsers } from "../services/axios";
import { useSMUpdater } from "./useSM";

const useUser = () => {
  const [users, setUsers] = useState([]);
  const dispatch = useSMUpdater();

  useEffect(() => {
    fetchUsers();
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
  return { users, setUsers, fetchUsers };
};

export default useUser;
