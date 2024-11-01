import { createReducer } from "../state";

const addPokemon = createReducer(
  "add-pokemon",
  (store, payload: { newPokemonName: string }) => {
    store.state.pokemons.push(payload.newPokemonName);
  }
);

export const pokemonsReducers = [addPokemon];
