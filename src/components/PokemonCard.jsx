import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { PokemonContext } from "./PokemonContext";
import { useNavigate } from "react-router-dom";

export const PokemonCard = ({ pokemon }) => {
  const { setCurrentPokemon } = useContext(PokemonContext);
  const [PokemonDetails, setPokemonDetails] = useState({});
  const navigate = useNavigate();
  const getPokemonDetails = async () => {
    const response = await fetch(pokemon.url);
    const data = await response.json();
    setPokemonDetails(data);
  };
  const handleClick = () => {
    setCurrentPokemon(PokemonDetails);
    navigate("/details");
  };
  useEffect(() => {
    getPokemonDetails();
  }, []);
  console.log(PokemonDetails);
  return (
    <div className="col-sm-6 col-md-4 col-lg-3 m-4">
      <div
        className="card"
        style={{
          width: "18rem",
        }}
      >
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${PokemonDetails.id}.png`}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{pokemon.name}</h5>
          <button onClick={handleClick} className="btn btn-primary">
            Details
          </button>
        </div>
      </div>
    </div>
  );
};
