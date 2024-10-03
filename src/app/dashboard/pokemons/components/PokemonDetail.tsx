import { SimplePokemon } from "@/app/common/models/pokemons";
import { MagicCard } from "@/components";

interface Props {
  pokemon: SimplePokemon;
}

export function PokemonDetail({ pokemon }: Props) {
  const { id, name } = pokemon;

  const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;

  return (
    <>
      <div>
        <MagicCard number={id} img={img} name={name} />
      </div>
    </>
  );
}
