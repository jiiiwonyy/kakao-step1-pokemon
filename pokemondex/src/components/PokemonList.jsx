import React from "react";
import styled from "styled-components";
import MOCK_DATA from "../../public/data/mock.js";
import PokemonCard from "./PokemonCard";

const PokemonList = () => {
  return (
    <PokemonGrid>
      {MOCK_DATA.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </PokemonGrid>
  );
};

export default PokemonList;

const PokemonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 16px;
  padding: 20px;
  border-radius: 10px;
  background-color: #f0f0f0;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(6, 1fr);
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 400px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
