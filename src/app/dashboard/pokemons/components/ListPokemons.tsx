import { SimplePokemon } from "@/app/common/models/pokemons";
import PokemonCard from "./PokemonCard";

interface Props {
  pokemons: SimplePokemon[];
}

export default function ListPokemons({ pokemons }: Props) {
  return (
    <>
      <div className="flex flex-wrap gap-2 items-center">
        {pokemons.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} ></PokemonCard>
        ))}
      </div>
    </>
  );
}
