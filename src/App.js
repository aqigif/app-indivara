import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Peoples from "./pages/Peoples";
import Todo from "./pages/Todos";
import Users from "./pages/Users";

function App() {
  return (
    <div className="App">
      <h1>Welcome to Indivara JDT 9!</h1>
      <div style={{display: 'flex', justifyContent: 'space-between', maxWidth: 300}}>
        <Link to={"/"}>Todo</Link>
        <Link to={"/users"}>Users</Link>
        <Link to={"/peoples"}>Peoples</Link>
      </div>
      <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="users" element={<Users />} />
        <Route path="peoples" element={<Peoples />} />
      </Routes>
    </div>
  );
}

export default App