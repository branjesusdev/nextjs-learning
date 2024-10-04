"use client";

import { PokemonResponse, PokemonsResponse, SimplePokemon } from "@/app/common/models/pokemons";
import { PokemonCard, PokemonDetail } from ".";
import { useEffect, useRef, useState } from "react";
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

const getPokemon = async (id: string) => {
  const data: PokemonResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${id}/`,
    {
      cache: "force-cache",
    }
  ).then((response) => response.json());

  return data;
};

export function ListPokemons({ pokemonsList, offset }: Props) {
  const [pokemons, setPokemons] = useState<SimplePokemon[]>(pokemonsList);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(offset);
  const [selectedPokemon, setSelectedPokemon] = useState<PokemonResponse | null>(null)
  const detailRefCard = useRef<HTMLDivElement>(null);

  const handlePokemonClick = async (pokemonId: string) => {
    
    const pokemon = await getPokemon(pokemonId);
    
    setSelectedPokemon(pokemon);

    setTimeout(() => {
      detailRefCard.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 100);

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
              selectedPokemon?.id == pokemon.id ? "w-full" : "w-auto"
            }`}
          >

            {selectedPokemon?.id == pokemon.id && (
              <div className="w-full mb-4" ref={detailRefCard}>
                <PokemonDetail
                  pokemon={selectedPokemon}
                />
              </div>
            )}

            {selectedPokemon?.id != pokemon.id && (
              <div className="w-auto mb-4 animate-fade-up">
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
