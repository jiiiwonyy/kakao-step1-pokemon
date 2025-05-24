import React from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { usePokemon } from "../context/PokemonContext.jsx";

const PokemonDetail = () => {
  const { allPokemons } = usePokemon();
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/dex");
  };
  const { id } = useParams();
  const pokemon = allPokemons.find((p) => p.id === parseInt(id));

  if (!pokemon) return <div>포켓몬을 찾을 수 없습니다.</div>;

  return (
    <PokemonDetailContainer>
      <PokemonDetailImage src={pokemon.img_url} alt={pokemon.korean_name} />
      <PokemonDetailName>{pokemon.korean_name}</PokemonDetailName>
      <PokemonDetailType>타입: {pokemon.types}</PokemonDetailType>
      <PokemonDetailDescription>{pokemon.description}</PokemonDetailDescription>
      <NavigateDexButton onClick={handleNavigate}>뒤로 가기</NavigateDexButton>
    </PokemonDetailContainer>
  );
};

export default PokemonDetail;

const PokemonDetailContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  gap: 20px;
`;

const PokemonDetailImage = styled.img`
  width: 200px;
  height: auto;
`;

const PokemonDetailName = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #ff0000;
`;

const PokemonDetailType = styled.div`
  font-size: 18px;
  color: #555;
`;

const PokemonDetailDescription = styled.div`
  font-size: 16px;
  color: #333;
  margin-top: 10px;
`;

const NavigateDexButton = styled.button`
  font-size: 16px;
  background-color: #f0f0f0;
  cursor: pointer;
  border: none;
  padding: 12px 16px;
  border-radius: 5px;
  margin-top: 20px;
`;
