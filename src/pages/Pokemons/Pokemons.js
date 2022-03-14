import PokemonCard from "../../components/cards";
import usePokemon from "../../hooks/usePokemon";

function Pokemons() {
  const { addPokemonToCart, pokemonData } = usePokemon();
 
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
