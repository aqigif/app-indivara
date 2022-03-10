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
            <span
              style={{
                margin: 14,
                marginBottom: 30,
                background: "gray",
                padding: 10,
                borderRadius: 10,
                cursor: "pointer",
              }}
            >
              <img
                src={item?.img}
                alt="span"
                style={{ height: 200 }}
                onClick={() =>
                  navigate(`/pokemons/${item.id}?name=${item.name}`)
                }
              />
              <p key={item.id} style={{ color: "white" }}>
                {item?.name}
              </p>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  addPokemonToCart(item);
                }}
              >
                add to cart
              </button>
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default Pokemons;
