import { PokemonResponse } from "@/app/common/models/pokemons";
import { MagicCard } from "@/components";

interface Props {
  pokemon: PokemonResponse;
}

export function PokemonDetail({ pokemon }: Props) {
  const { id, name, weight, types } = pokemon;

  const bottomRight = types.map((type) => type.type.name).join(", ");

  const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;

  return (
    <>
      <div className="animate-jump-in">
        <MagicCard number={String(id)} img={img} name={name} leftBottom={String(weight)} bottomRight={bottomRight} />
      </div>
    </>
  );
}
