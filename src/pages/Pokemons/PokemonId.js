import { Button, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PokemonCard from "../../components/cards";
import usePokemon from "../../hooks/usePokemon";
import { getPokemonByName } from "../../services/pokemons";

function Pokemons() {
  const params = useParams();
  const { addPokemonToCart, pokemonCarts } = usePokemon();
  const [pokemonData, setPokemon] = useState(null);

  useEffect(() => {
    if (params?.id) {
      fetchPokemon(params?.id);
    }
  }, [params]);

  const fetchPokemon = async (id) => {
    try {
      const payloadDetail = await getPokemonByName(id);
      const result = {
        ...payloadDetail.data,
        id: payloadDetail?.data?.name || "",
        name: payloadDetail?.data?.name || "",
        img:
          payloadDetail?.data?.sprites?.other?.dream_world?.front_default || "",
      };
      setPokemon(result);
    } catch (error) {
      console.log(error, "error");
    }
  };

  return (
    <>
      <Grid
        container
        style={{
          marginTop: 60,
          backgroundColor: "#fff",
          padding: 40,
          paddingTop: 20,
          paddingBottom: 20,
          borderRadius: 10,
          alignItems: "center",
        }}
      >
        <Grid item xs={12} md={5}>
          <img
            src={pokemonData?.img}
            alt="thumbnail"
            style={{ width: "100%" }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={7}
          justifyContent="center"
          display={"flex"}
          direction="column"
          style={{ padding: 40 }}
        >
          <Typography variant="h3">{pokemonData?.name}</Typography>
          <Typography variant="h6">Moves</Typography>
          <div style={{ display: "flex", flexWrap: "wrap", marginBottom: 20 }}>
            {Array.from(pokemonData?.moves || [])
              .slice(0, 30)
              .map((item) => {
                return (
                  <span style={{ marginRight: 6 }}>{item?.move?.name}</span>
                );
              })}
          </div>
          <Button
            variant="contained"
            color="secondary"
            disableElevation
            size="large"
            style={{ borderRadius: 12 }}
            onClick={() => addPokemonToCart(pokemonData)}
          >
            Add to my pokemon
          </Button>
        </Grid>
      </Grid>
      <h1>More Pokemons</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {Array.from(pokemonCarts || []).map((item, index) => {
          return (
            <PokemonCard
              key={index}
              id={item?.id}
              name={item?.name}
              img={item?.img}
              index={index}
              onClick={() => addPokemonToCart(item)}
            />
          );
        })}
      </div>
    </>
  );
}

export default Pokemons;
