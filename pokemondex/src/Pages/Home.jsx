import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <PokemonLogo src="public/pokemon-logo.png" alt="pokemon logo" />
      <StartButton onClick={() => navigate("/dex")}>
        포켓몬 도감 시작하기
      </StartButton>
    </>
  );
};

export default Home;

const PokemonLogo = styled.img`
  width: 100%;
  height: auto;
  max-width: 600px;
  margin: 0 auto;
  display: block;
  padding: 20px;
  border-radius: 10px;
`;

const StartButton = styled.button`
  background-color: #ff0000;
  color: white;
`;
