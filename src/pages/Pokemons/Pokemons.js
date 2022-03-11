import { Card, IconButton, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import usePokemon from "../../hooks/usePokemon";
import { getPokemonByName, getPokemons } from "../../services/axios";

function Pokemons() {
  const { addPokemonToCart } = usePokemon();
  const navigate = useNavigate();
  const [pokemonData, setPokemons] = useState([]);

  useEffect(() => {
    fetchPokemons();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchPokemons = async () => {
    try {
      const payload = await getPokemons();
      const promises = Array.from(payload?.data?.results || []).map(
        async (item) => {
          const payloadDetail = await getPokemonByName(item?.name || "");
          return {
            ...payloadDetail.data,
            id: payloadDetail?.data?.name || "",
            name: payloadDetail?.data?.name || "",
            img:
              payloadDetail?.data?.sprites.other.dream_world.front_default ||
              "",
          };
        }
      );
      const results = await Promise.all(promises);
      setPokemons(results);
    } catch (error) {
      console.log(error, "error");
    }
  };

  return (
    <div className="App">
      <h1>Pokemons</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {Array.from(pokemonData || []).map((item, index) => {
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
              <div style={{marginBottom: 4}}>
                <Typography variant="h6" gutterBottom >
                  {item?.name}
                </Typography>
                <Typography variant="subtitle" >
                  Lorem ipsum is placeholder 
                </Typography>
              </div>
              <div style={{display: 'flex', justifyContent:"space-between"}}>
                <div />
                <IconButton
                  size="small"
                  style={{ backgroundColor: "#006cff", color: 'white' }}
                  onClick={(e) => {
                    e.preventDefault()
                    addPokemonToCart(item)
                  }}
                >
                  <AddIcon />
                </IconButton>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default Pokemons;
