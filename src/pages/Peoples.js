

function Peoples({ users }) {
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
    </div>
  );
}

export default Peoples;
