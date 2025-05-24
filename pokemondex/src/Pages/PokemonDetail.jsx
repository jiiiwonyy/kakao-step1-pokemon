import React from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import usePokemonActions from "../hooks/usePokemonActions";

const PokemonDetail = () => {
  const navigate = useNavigate();
  const { tryAddPokemon, tryRemovePokemon } = usePokemonActions();
  const allPokemons = useSelector((state) => state.pokemon.allPokemons);
  const myPokemons = useSelector((state) => state.pokemon.myPokemons);
  const { id } = useParams();
  const pokemon = allPokemons.find((p) => p.id === parseInt(id));
  const isExist = myPokemons.some((p) => p.id === pokemon.id);

  const handleNavigate = () => {
    navigate("/dex");
  };

  if (!pokemon) return <div>포켓몬을 찾을 수 없습니다.</div>;

  return (
    <PokemonDetailContainer>
      <PokemonDetailImage src={pokemon.img_url} alt={pokemon.korean_name} />
      <PokemonDetailName>{pokemon.korean_name}</PokemonDetailName>
      <PokemonDetailType> 타입: {pokemon.types.join(", ")}</PokemonDetailType>
      <PokemonDetailDescription>{pokemon.description}</PokemonDetailDescription>
      <NavigateDexButton onClick={handleNavigate}>뒤로 가기</NavigateDexButton>
      {isExist ? (
        <AddPokemonButton onClick={() => tryRemovePokemon(pokemon.id)}>
          포켓몬 삭제
        </AddPokemonButton>
      ) : (
        <AddPokemonButton onClick={() => tryAddPokemon(pokemon, myPokemons)}>
          포켓몬 추가
        </AddPokemonButton>
      )}
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

const AddPokemonButton = styled.button`
  margin-top: 16px;
  padding: 12px 26px;
  font-size: 16px;
  background-color: #ffcb05;
  color: #000000;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
