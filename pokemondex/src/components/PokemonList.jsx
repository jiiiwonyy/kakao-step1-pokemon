import React from "react";
import styled from "styled-components";
// import MOCK_DATA from "../../public/data/mock.js";
import PokemonCard from "./PokemonCard";
// import { usePokemon } from "../context/PokemonContext.jsx";
import { useSelector, useDispatch } from "react-redux";
import { addPokemon } from "../redux/modules/pokemonSlices.js";

const PokemonList = () => {
  const dispatch = useDispatch();
  const allPokemons = useSelector((state) => state.pokemon.allPokemons);
  const myPokemons = useSelector((state) => state.pokemon.myPokemons);

  const handleAdd = (pokemon) => {
    if (myPokemons.length >= 6) {
      alert("최대 6마리까지 선택할 수 있어요!");
      return;
    }

    const isExist = myPokemons.some((p) => p.id === pokemon.id);
    if (isExist) {
      alert("이미 추가된 포켓몬입니다!");
      return;
    }

    dispatch(addPokemon(pokemon));
  };
  return (
    <PokemonGrid>
      {allPokemons.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          pokemon={pokemon}
          onAdd={() => handleAdd(pokemon)}
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
