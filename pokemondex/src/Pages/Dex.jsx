import React from "react";
import PokemonCard from "../components/PokemonCard";
import styled from "styled-components";
import MOCK_DATA from "../../public/data/mock.js";

const Dex = () => {
  return (
    <Container>
      <Title>포켓몬 도감</Title>
      <PokemonGrid>
        {MOCK_DATA.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </PokemonGrid>
    </Container>
  );
};

export default Dex;

const Container = styled.div`
  padding: 20px;
  width: 100%;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 30px;
  color: #333;
`;

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
