import { useEffect, useState } from "react";
import PokemonCard from "../../components/cards";
import usePokemon from "../../hooks/usePokemon";
import { getPokemonByName, getPokemons } from "../../services/axios";

function Pokemons() {
  const { addPokemonToCart } = usePokemon();
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
    </div>
  );
}

export default Pokemons;
