import { createSlice } from "@reduxjs/toolkit";
import MOCK_DATA from "../../../public/data/mock.js"; // 실제 경로에 맞게 수정하세요

const initialState = {
  allPokemons: MOCK_DATA,
  myPokemons: [],
};

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    addPokemon: (state, action) => {
      state.myPokemons.push(action.payload);
    },
    removePokemon: (state, action) => {
      state.myPokemons = state.myPokemons.filter(
        (p) => p.id !== action.payload
      );
    },
  },
});

export const { addPokemon, removePokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;
