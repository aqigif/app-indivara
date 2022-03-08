import "./App.css";
import { useState } from "react";
const todos = [
  {
    id: 1,
    name: "belajar react",
    isDone: false,
  },
  {
    id: 2,
    name: "menguasai react",
    isDone: false,
  },
];

function App() {
  const [todoState, setTodoState] = useState(todos);
  // const [todoData, setTodoData] = useState(null);
  const [todoIndex, setTodoIndex] = useState(null);
  const [value, setValue] = useState("");

  const handleAdd = () => {
    const newTodos = [
      ...todoState,
      {
        id: parseInt(todoState?.[todoState.length - 1]?.id || 0) + 1,
        name: value,
        isDone: false,
      },
    ];
    setTodoState(newTodos);
    setValue("");
  };

  const handleRemove = (item) => {
    const newTodos = todoState.filter((itm, idx) => itm.id !== item.id);
    setTodoState(newTodos);
  };

  const handleDone = (index) => {
    let newTodos = [...todoState];
    newTodos[index] = {
      ...newTodos[index],
      isDone: !newTodos[index].isDone,
    };
    setTodoState(newTodos);
  };

  const handleGet = ({item, index}) => {
    // setTodoData(item)
    setTodoIndex(index)
    setValue(item.name)
  };
  const handleUpdate = () => {
    // let index = todoState.findIndex((itm, idx) => itm.id === todoData.id);
    let newTodos = [...todoState];
    newTodos[todoIndex] = {
      ...newTodos[todoIndex],
      name: value,
    };
    setTodoState(newTodos);
    // setTodoData(null)
    setTodoIndex(null)
    setValue("")
  }

  return (
    <div className="App">
      <h1>todo list</h1>
      {todoState.map((item, index) => {
        console.log(item.isDone)
        return (
          <span key={index} style={{ display: "flex", alignItems: "center" }}>
            <p
              onClick={() => {
                handleDone(index);
              }}
              className={`p-pointer ${item.isDone ? "p-done" : ""}`}
            >
              {item.name}
            </p>
            <span
              style={{ marginLeft: 10, cursor: "pointer", color: "red" }}
              onClick={() => {
                handleRemove(item);
              }}
            >
              x
            </span>
            <span
              style={{ marginLeft: 10, cursor: "pointer", color: "blue" }}
              onClick={() => handleGet({item, index})}
            >
              edit
            </span>
          </span>
        );
      })}
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      {todoIndex === null ? (
        <button onClick={handleAdd}>add</button>
      ) : (
        <button onClick={handleUpdate}>update</button>
      )}
    </div>
  );
}

export default App;
