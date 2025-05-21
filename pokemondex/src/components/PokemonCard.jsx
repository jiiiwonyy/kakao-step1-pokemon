import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const PokemonCard = ({ pokemon, onAdd, isAdded, onRemove }) => {
  const navigate = useNavigate();
  const handleCardClick = () => {
    navigate(`/pokemon/${pokemon.id}`);
  };

  return (
    <PokemonCardContainer onClick={handleCardClick}>
      <PokemonCardImage src={pokemon.img_url} alt={pokemon.korean_name} />
      <PokemonCardName>{pokemon.korean_name}</PokemonCardName>
      <PokemonCardNumber>No. {pokemon.id}</PokemonCardNumber>
      {isAdded ? (
        <RemoveButton
          onClick={(e) => {
            e.stopPropagation();
            onRemove?.(pokemon.id);
          }}
        >
          삭제
        </RemoveButton>
      ) : (
        <PokemonCardAddButton
          onClick={(e) => {
            e.stopPropagation();
            onAdd?.(pokemon);
          }}
        >
          추가
        </PokemonCardAddButton>
      )}
    </PokemonCardContainer>
  );
};

export default PokemonCard;

const PokemonCardContainer = styled.div`
  border: 1px solid rgb(221, 221, 221);
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 8px;
  text-align: center;
  padding: 20px;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &:hover {
    transform: translateY(-5px);
    transition: transform 0.2s;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const PokemonCardImage = styled.img`
  width: 100px;
  height: 100px;
`;

const PokemonCardName = styled.p`
  font-size: 14px;
  font-weight: bold;
  text-align: center;
`;

const PokemonCardNumber = styled.p`
  font-size: 12px;
  text-align: center;
`;

const PokemonCardAddButton = styled.button`
  background-color: #ff0000;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 12px;
  margin-top: 10px;

  &:hover {
    background-color: #e60000;
  }
`;

const RemoveButton = styled.button`
  background-color: #ff0000;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 12px;
  margin-top: 10px;

  &:hover {
    background-color: #ff0000;
  }
`;
