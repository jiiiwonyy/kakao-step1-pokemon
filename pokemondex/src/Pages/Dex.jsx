import React from "react";
import styled from "styled-components";
import PokemonList from "../components/PokemonList";
import Dashboard from "../components/Dashboard";
import MOCK_DATA from "../../public/data/mock";
import { useState } from "react";

const Dex = () => {
  const [myPokemons, setMyPokemons] = useState([]);

  const handleAddPokemon = (pokemon) => {
    if (myPokemons.length >= 6) return; // 최대 6개 제한
    // 이미 추가된 포켓몬인지 확인
    const alreadyExists = myPokemons.some((p) => p.id === pokemon.id);
    if (!alreadyExists) setMyPokemons([...myPokemons, pokemon]);
  };

  return (
    <Container>
      <Dashboard myPokemons={myPokemons} setMyPokemons={setMyPokemons} />
      <PokemonList pokemons={MOCK_DATA} onAdd={handleAddPokemon} />
    </Container>
  );
};

export default Dex;

const Container = styled.div`
  max-width: 1200px;
  padding: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
