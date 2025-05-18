import { createContext, useState, useEffect } from "react";

const PokemonContext = createContext();
const url = "https://pokeapi.co/api/v2/pokemon";

const PokemonProvider = ({ children }) => {
  const [pokemonList, setPokemonList] = useState([]);
  const [currentPokemon, setCurrentPokemon] = useState({});
  const getPokemons = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setPokemonList(data.results || []);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <PokemonContext.Provider
      value={{
        pokemonList,
        currentPokemon,
        setCurrentPokemon,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export { PokemonProvider, PokemonContext };
