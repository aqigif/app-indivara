import RemoveIcon from "@mui/icons-material/Remove";
import { Card, IconButton, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import usePokemon from "../../hooks/usePokemon";

function PokemonsCart() {
  const navigate = useNavigate();
  const { pokemonCarts, deletePokemonFromCart } = usePokemon();
  useAuth("protected");

  return (
    <div className="App">
      <h1>My Pokemons</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {Array.from(pokemonCarts || []).map((item, index) => {
          return (
            <Card
              style={{
                margin: 14,
                marginLeft: 0,
                marginRight: 28,
                marginBottom: 30,
                background: "white",
                padding: 10,
                borderRadius: 10,
                cursor: "pointer",
              }}
            >
              <img
                onClick={() =>
                  navigate(`/pokemons/${item.id}?name=${item.name}`)
                }
                src={item?.img}
                alt="span"
                style={{ height: 200 }}
              />
              <Typography variant="h6" gutterBottom>
                {item?.name}
              </Typography>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div />
                <IconButton
                  size="small"
                  style={{ backgroundColor: "#fd1d1d", color: "white" }}
                  onClick={(e) => {
                    e.preventDefault();
                    deletePokemonFromCart(index);
                  }}
                >
                  <RemoveIcon />
                </IconButton>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default PokemonsCart;
