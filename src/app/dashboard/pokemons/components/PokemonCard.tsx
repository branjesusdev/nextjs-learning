import { SimplePokemon } from "@/app/common/models/pokemons";
import Image from "next/image";

interface Props {
    pokemon: SimplePokemon;
}

export default function PokemonCard({ pokemon }: Props) {

    const { id, name } = pokemon

    return (
        <div className="flex flex-col items-center card-shape p-4 group hover:card-shape-up">
            <Image
                className="aspect-square cursor-crosshair group-hover:scale-110 transition-transform"
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                alt={name}
                width={120}
                height={120}
                priority={false}
            />
            <span className="font-bold text-sm">{name}</span>
        </div>
    )

}