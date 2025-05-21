import React from "react";
import styled from "styled-components";
import PokemonList from "../components/PokemonList";

const Dex = () => {
  return (
    <Container>
      <Title>포켓몬 도감</Title>
      <PokemonList />
    </Container>
  );
};

export default Dex;

const Container = styled.div`
  padding: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 30px;
  color: #333;
`;
