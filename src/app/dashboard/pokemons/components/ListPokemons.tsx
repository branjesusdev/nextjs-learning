"use client";

import { PokemonsResponse, SimplePokemon } from "@/app/common/models/pokemons";
import { PokemonCard, PokemonDetail } from ".";
import { useEffect, useState } from "react";
import { SpinnerUI } from "@/components";

interface Props {
  pokemonsList: SimplePokemon[];
  offset: number;
}

const getPokemons = async ({
  limit = 71,
  offset = 0,
}): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((response) => response.json());

  const pakemons = data.results.map(({ name, url }) => {
    const id = url.split("/").at(-2) ?? "0";
    return { id, name };
  }) as SimplePokemon[];

  return pakemons;
};

export function ListPokemons({ pokemonsList, offset }: Props) {
  const [pokemons, setPokemons] = useState<SimplePokemon[]>(pokemonsList);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(offset);
  const [selectedPokemonId, setSelectedPokemonId] = useState("");

  const handlePokemonClick = (pokemonId: string) => {
    console.log("handlePokemonClick", pokemonId);
    setSelectedPokemonId(pokemonId);
  };

  const loadPokemons = async () => {
    setLoading(true);

    const pokemonsList = await getPokemons({ offset: currentPage });
    setPokemons((prevPokemons) => prevPokemons.concat(pokemonsList));
    setLoading(false);
  };

  useEffect(() => {
    if (currentPage === offset) return;

    loadPokemons();
  }, [currentPage]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setCurrentPage((prevOffset) => prevOffset + offset);
      }
    });

    observer.observe(document.querySelector("#load-more") as Element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div className="flex flex-wrap gap-2 items-center">
        {pokemons.map((pokemon) => (
          <div
            key={pokemon.id}
            className={`${
              selectedPokemonId === pokemon.id ? "w-full" : "w-auto"
            }`}
          >
            {selectedPokemonId === pokemon.id && (
              <div className="w-full mb-4">
                <PokemonDetail
                  pokemon={pokemons.find((p) => p.id === selectedPokemonId)}
                />
              </div>
            )}

            {selectedPokemonId !== pokemon.id && (
              <div className="w-auto mb-4">
                <PokemonCard
                  pokemon={pokemon}
                  handlePokemonClick={handlePokemonClick}
                />
              </div>
            )}
          </div>
        ))}
      </div>

      <div id="load-more" className="flex justify-center items-center p-5">
        {loading && <SpinnerUI></SpinnerUI>}
      </div>
    </>
  );
}
