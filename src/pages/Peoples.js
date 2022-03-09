import useUser from "../hooks/useUser";

function Peoples() {
  const { users, setUsers } = useUser();
  return (
    <div className="App">
      <h1>peoples</h1>
      {Array.from(users || []).map((item, index) => {
        return (
          <p key={item.id}>
            {item?.first_name} {item?.last_name}
          </p>
        );
      })}
      <button onClick={() => setUsers([])}>Clear</button>
    </div>
  );
}

export default Peoples;
