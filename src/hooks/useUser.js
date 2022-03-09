import { useEffect, useState } from "react";
import { getUsers } from "../services/axios";

const useUser = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const payload = await getUsers();
      if (payload?.data?.data) {
        setUsers(payload?.data?.data);
      } else throw payload;
    } catch (error) {
      console.error(error);
    }
  };
  return { users, setUsers };
};

export default useUser