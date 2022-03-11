import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Peoples from "./pages/Peoples";
import Todo from "./pages/Todos";
import Users from "./pages/Users";
import Pokemons from "./pages/Pokemons/Pokemons";
import PokemonId from "./pages/Pokemons/PokemonId";
import PokemonsCart from "./pages/Pokemons/PokemonsCart";
import Header from "./components/header";
import { Container } from "@mui/material";

const sections = [
  {
    title: "Todo",
    url: "/",
  },
  {
    title: "Users",
    url: "/users",
  },
  {
    title: "Peoples",
    url: "/peoples",
  },
  {
    title: "Pokemons",
    url: "/pokemons",
  },
  {
    title: "My Pokemons",
    url: "/pokemons/cart",
  },
];
function App() {
  return (
    <Container>
      <Header title="Indivara App" sections={sections} />
      <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="users" element={<Users />} />
        <Route path="peoples" element={<Peoples />} />
        <Route path="pokemons" element={<Pokemons />} />
        <Route path="pokemons/:id" element={<PokemonId />} />
        <Route path="pokemons/cart" element={<PokemonsCart />} />
      </Routes>
    </Container>
  );
}

export default App;
