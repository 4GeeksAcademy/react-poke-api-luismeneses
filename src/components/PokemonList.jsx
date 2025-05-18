import React from "react";
import { useContext } from "react";
import { PokemonContext } from "./PokemonContext";
import { PokemonCard } from "./PokemonCard";
import { useNavigate } from "react-router-dom";

export const PokemonList = () => {
  const { pokemonList } = useContext(PokemonContext);
  const navigate = useNavigate();
  if (pokemonList.length === 0) return null;
  return (
    <div className="row">
      {pokemonList.map((pokemon) => (
        <PokemonCard key={pokemon.name} pokemon={pokemon} />
      ))}
    </div>
  );
};
