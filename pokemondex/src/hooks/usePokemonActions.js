// hooks/usePokemonActions.js
import { useDispatch } from "react-redux";
import { addPokemon, removePokemon } from "../redux/modules/pokemonSlices.js";

const usePokemonActions = () => {
  const dispatch = useDispatch();

  const tryAddPokemon = (pokemon, myPokemons) => {
    if (myPokemons.length >= 6) {
      alert("최대 6마리까지 선택할 수 있어요!");
      return;
    }

    const isExist = myPokemons.some((p) => p.id === pokemon.id);
    if (isExist) {
      alert("이미 추가된 포켓몬입니다!");
      return;
    }

    dispatch(addPokemon(pokemon));
    alert("포켓몬이 추가되었습니다!");
  };

  const tryRemovePokemon = (pokemonId) => {
    dispatch(removePokemon(pokemonId));
    alert("포켓몬이 삭제되었습니다!");
  };

  return { tryAddPokemon, tryRemovePokemon };
};

export default usePokemonActions;
