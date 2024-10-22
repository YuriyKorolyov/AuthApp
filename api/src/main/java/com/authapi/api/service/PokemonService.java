package com.authapi.api.service;

import com.authapi.api.dto.PokemonDto;

public interface PokemonService {
    PokemonDto createPokemon(PokemonDto pokemonDto);
}
