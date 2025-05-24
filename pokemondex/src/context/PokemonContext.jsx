import React, { createContext, useContext, useState } from "react";
import MOCK_DATA from "../../public/data/mock.js";

// Context 생성
const PokemonContext = createContext();

// Provider 컴포넌트
export const PokemonProvider = ({ children }) => {
  const [allPokemons] = useState(MOCK_DATA); // 전체 포켓몬 데이터
  const [myPokemons, setMyPokemons] = useState([]); // 내가 추가한 포켓몬
  const isExist = (id) => myPokemons.some((p) => p.id === id);

  // 포켓몬 추가
  const addPokemon = (pokemon) => {
    if (myPokemons.length >= 6) {
      alert("최대 6마리까지 선택할 수 있어요!");
      return;
    }

    if (isExist(pokemon.id)) {
      alert("이미 추가된 포켓몬입니다!");
      return;
    }
    setMyPokemons((prev) => [...prev, pokemon]);
  };

  // 포켓몬 삭제
  const removePokemon = (id) => {
    setMyPokemons((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <PokemonContext.Provider
      value={{
        allPokemons,
        myPokemons,
        addPokemon,
        removePokemon,
        isExist,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

// 커스텀 훅
export const usePokemon = () => useContext(PokemonContext);

// import { createContext, useContext, useState } from "react";

// const PokemonContext = createContext();

// export const PokemonProvider = ({ children }) => {
//   const [myPokemons, setMyPokemons] = useState([]);

//   const addPokemon = (pokemon) => {
//     if (myPokemons.length >= 6) {
//       alert("최대 6마리까지 선택할 수 있어요!");
//       return;
//     }

//     const isExist = myPokemons.some((p) => p.id === pokemon.id);
//     if (isExist) {
//       alert("이미 추가된 포켓몬입니다!");
//       return;
//     }

//     setMyPokemons((prev) => [...prev, pokemon]);
//   };

//   const removePokemon = (id) => {
//     setMyPokemons((prev) => prev.filter((p) => p.id !== id));
//   };

//   return (
//     <PokemonContext.Provider value={{ myPokemons, addPokemon, removePokemon }}>
//       {children}
//     </PokemonContext.Provider>
//   );
// };

// export const usePokemon = () => useContext(PokemonContext);
