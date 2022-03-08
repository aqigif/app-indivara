import "./App.css";
import { useState } from "react";
import ListItem from "./components/list-item";
import FooterAction from "./components/footer-action";
import { todos } from "./constants/dummy";


function App() {
  const [todoState, setTodoState] = useState(todos);
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

  const handleGet = ({ item, index }) => {
    // setTodoData(item)
    setTodoIndex(index);
    setValue(item.name);
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
    setTodoIndex(null);
    setValue("");
  };

  return (
    <div className="App">
      <h1>todo list</h1>
      {todoState.map((item, index) => {
        return (
          <ListItem
            item={item}
            index={index}
            handleDone={handleDone}
            handleRemove={handleRemove}
            handleGet={handleGet}
          />
        );
      })}
      <FooterAction
        value={value}
        setValue={setValue}
        todoIndex={todoIndex}
        handleAdd={handleAdd}
        handleUpdate={handleUpdate}
      />
    </div>
  );
}

export default App;
