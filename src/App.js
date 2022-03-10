import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Peoples from "./pages/Peoples";
import Todo from "./pages/Todos";
import Users from "./pages/Users";
import Pokemons from "./pages/Pokemons/Pokemons";
import PokemonId from "./pages/Pokemons/PokemonId";
import PokemonsCart from "./pages/Pokemons/PokemonsCart";



function App() {
  return (
    <div className="App">
      <h1>Welcome to Indivara JDT 9!</h1>
      <div style={{display: 'flex', justifyContent: 'space-between', maxWidth: 600}}>
        <Link to={"/"}>Todo</Link>
        <Link to={"/users"}>Users</Link>
        <Link to={"/peoples"}>Peoples</Link>
        <Link to={"/pokemons"}>Pokemons</Link>
        <Link to={"/pokemons/cart"}>My Pokemons</Link>
      </div>
      <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="users" element={<Users />} />
        <Route path="peoples" element={<Peoples />} />
        <Route path="pokemons" element={<Pokemons />} />
        <Route path="pokemons/:id" element={<PokemonId />} />
        <Route path="pokemons/cart" element={<PokemonsCart />} />
      </Routes>
    </div>
  );
}

export default App