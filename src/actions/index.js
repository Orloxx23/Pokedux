import { getPokemonDetails } from "../api";
import { SET_POKEMONS, SET_LOADING } from "./types";

export const setPokemons = (payload) => ({
    type: SET_POKEMONS,
    payload,
})

export const getPokemonsWithDetails = (pokemons = []) => async (dispatch) => {
    const pokemonsDetailed = await Promise.all(
        pokemons.map((pokemon) => getPokemonDetails(pokemon))
    );

    dispatch(setPokemons(pokemonsDetailed));
}

export const setLoading = (payload) => ({
    type: SET_LOADING,
    payload,
})