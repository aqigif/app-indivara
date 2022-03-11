import RemoveIcon from "@mui/icons-material/Remove";
import { Card, IconButton, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import usePokemon from "../../hooks/usePokemon";

function Pokemons() {
  const navigate = useNavigate();
  const { pokemonCarts, deletePokemonFromCart } = usePokemon();

  return (
    <div className="App">
      <h1>My Pokemons</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {Array.from(pokemonCarts || []).map((item, index) => {
          return (
            <Card
              style={{
                margin: 14,
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
              <Typography variant="h6" gutterBottom >
                {item?.name}
              </Typography>
              <IconButton
                style={{ backgroundColor: "red", color: 'white' }}
                onClick={(e) => {
                  e.preventDefault()
                  deletePokemonFromCart(index)
                }}
              >
                <RemoveIcon />
              </IconButton>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default Pokemons;
