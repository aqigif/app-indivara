import { useSMState } from "../hooks/useSM";

function Peoples() {
  const state = useSMState()
  const {peoples} = state

  return (
    <div className="App">
      <h1>peoples</h1>
      {Array.from(peoples || []).map((item, index) => {
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
