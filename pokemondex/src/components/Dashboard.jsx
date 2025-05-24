import React from "react";
import styled from "styled-components";
import PokemonCard from "./PokemonCard";
// import { usePokemon } from "../context/PokemonContext.jsx";
import { useSelector, useDispatch } from "react-redux";
import { removePokemon } from "../redux/modules/pokemonSlices.js";

const Dashboard = () => {
  const dispatch = useDispatch();
  const myPokemons = useSelector((state) => state.pokemon.myPokemons);

  const slots = Array(6)
    .fill(null)
    .map((_, idx) => myPokemons[idx] || null);

  return (
    <DashboardContainer>
      <DashboardTitle>나만의 포켓몬</DashboardTitle>
      <MyPokemonWrapper>
        {slots.map((pokemon, idx) =>
          pokemon ? (
            <PokemonCard
              key={pokemon.id}
              pokemon={pokemon}
              onRemove={() => dispatch(removePokemon(pokemon.id))}
            />
          ) : (
            <Pokeball key={`empty-${idx}`}>
              <PokeballImage src="/pokeball.png" alt="빈 슬롯" />
            </Pokeball>
          )
        )}
      </MyPokemonWrapper>
    </DashboardContainer>
  );
};

export default Dashboard;

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 100%;
  background-color: rgb(247, 247, 247);
  border-radius: 10px;
  margin-bottom: 20px;
`;

const DashboardTitle = styled.div`
  text-align: center;
  margin-bottom: 30px;
  color: #ff0000;
  font-size: 24px;
  font-weight: bold;
`;

const MyPokemonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px;
  gap: 30px;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    flex-direction: column;
    display: grid;
    grid-template-columns: repeat(3, 2fr);
  }
`;

const Pokeball = styled.div`
  width: 120px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 1.25rem;
  border: 3px dashed rgb(182, 182, 182);
`;

const PokeballImage = styled.img`
  width: 64px;
  height: 64px;
`;
