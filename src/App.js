import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Peoples from "./pages/Peoples";
import Todo from "./pages/Todos";
import Users from "./pages/Users";
import Pokemons from "./pages/Pokemons/Pokemons";
import PokemonId from "./pages/Pokemons/PokemonId";
import PokemonsCart from "./pages/Pokemons/PokemonsCart";
import Login from "./pages/Login";
import Header from "./components/header";
import { Container } from "@mui/material";
import useAuth from "./hooks/useAuth";

const routesData = [
  {
    title: "Todo",
    url: "/",
    isMenu: true,
    component: <Todo />
  },
  {
    title: "Users",
    url: "/users",
    isMenu: true,
    component: <Users />
  },
  {
    title: "Peoples",
    url: "/peoples",
    isMenu: true,
    component: <Peoples />
  },
  {
    title: "Pokemons",
    url: "/pokemons",
    isMenu: true,
    isProtected: true,
    component: <Pokemons />
  },
  {
    title: "My Pokemons",
    url: "/pokemons/cart",
    isMenu: true,
    isProtected: true,
    component: <PokemonsCart />
  },
  {
    title: "Pokemon Detail",
    url: "/pokemons/:id",
    component: <PokemonId />
  },
  {
    title: "Login",
    url: "/login",
    component: <Login />
  },
];
function App() {
  const { token } = useAuth();
  const routes = routesData.filter((item) => item.isProtected ? Boolean(token) : true)
  const menus = routes.filter((item) => item.isMenu)

  return (
    <Container>
      <Header title="Indivara App" menus={menus} />
      <Routes>
        {routes.map((item) => {
          return (
            <Route key={item.url} path={item.url} element={item.component} />
          )
        })}
      </Routes>
    </Container>
  );
}

export default App;
