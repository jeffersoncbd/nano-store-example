import { initState } from "@jeff.carlosbd/nano-store";

interface InitialState {
  pokemons: string[];
}

const initialState: InitialState = {
  pokemons: ["bulbasaur", "ivysaur"],
};

export const { createReducer, mountStore } = initState(initialState);
