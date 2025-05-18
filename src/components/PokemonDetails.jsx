import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PokemonContext } from "./PokemonContext";

export const PokemonDetails = () => {
  const { currentPokemon } = useContext(PokemonContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (currentPokemon.id === undefined) {
      navigate("/");
    }
  }, []);
  if (currentPokemon.id === undefined) {
    return null;
  }
  return (
    <div
      className="card"
      style={{
        width: "18rem",
      }}
    >
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${currentPokemon.id}.png`}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{currentPokemon.name}</h5>
        <p className="card-text">
          Types:
          {currentPokemon.types.map((type) => {
            return (
              <span
                key={type.type.name}
                className="badge rounded-pill bg-primary"
              >
                {type.type.name}
              </span>
            );
          })}
        </p>
        <p className="card-text">
          Abilities:{" "}
          {currentPokemon.abilities.map((ability) => {
            return (
              <span
                key={ability.ability.name}
                className="badge rounded-pill bg-primary"
              >
                {ability.ability.name}
              </span>
            );
          })}
        </p>
      </div>
          
    </div>
  );
};
