import React from "react";
import styled from "styled-components";
import PokemonCard from "./PokemonCard";
import { useSelector } from "react-redux";
import usePokemonActions from "../hooks/usePokemonActions.js";

const PokemonList = () => {
  const allPokemons = useSelector((state) => state.pokemon.allPokemons);
  const myPokemons = useSelector((state) => state.pokemon.myPokemons);
  const { tryAddPokemon } = usePokemonActions();

  return (
    <PokemonGrid>
      {allPokemons.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          pokemon={pokemon}
          onAdd={() => tryAddPokemon(pokemon, myPokemons)}
        />
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
  width: 100%;

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
