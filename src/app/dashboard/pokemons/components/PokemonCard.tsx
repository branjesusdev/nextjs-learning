"use client";

import { SimplePokemon } from "@/app/common/models/pokemons";
import Image from "next/image";

interface Props {
  pokemon: SimplePokemon;
  handlePokemonClick: (pokemonId: string) => void;
}


export const PokemonCard = ({ pokemon, handlePokemonClick }: Props) => {
  const { id, name } = pokemon;

  return (
    <div
      onClick={(e) => {
        e.preventDefault();
        handlePokemonClick(id);
      }}
      className="flex flex-col items-center card-shape-down p-6 group hover:card-shape-straight cursor-pointer relative"
    >
      <span className="absolute top-4 right-8 rotate-12 font-bold text-4xl">#{id}</span>
      <Image
        className="aspect-square group-hover:scale-110 transition-transform z-10"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
        onError={(e) => {
          e.currentTarget.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
        }}
        alt={name}
        width={140}
        height={140}
        priority={false}
      />
      <span className="font-bold text-sm">{name}</span>
    </div>
  );
};
