import { useEffect, useState } from "react";
import "../App.css";
import { getUsers } from "../services/axios";

function Users() {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async() => {
    try {
     const payload = await getUsers();
     if (payload?.data?.data) {
      setUsers(payload?.data?.data)
     } else throw payload
    } catch (error) {
      console.error(error) 
    }
  }
  return (
    <div className="App">
      <h1>users</h1>
      {users.map((item, index) => {
        return (
          <p key={item.id}>{item?.first_name} {item?.last_name}</p>
        );
      })}
    </div>
  );
}

export default Users;

