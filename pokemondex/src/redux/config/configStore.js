import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "../modules/pokemonSlices";

export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
  },
});
