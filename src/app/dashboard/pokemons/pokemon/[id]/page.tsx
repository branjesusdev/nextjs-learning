import { PokemonResponse } from "@/app/common/models/pokemons";
import { Metadata } from "next";
import Image from "next/image";

interface Props {
  params: {
    id: string;
  };
  searchParams: {};
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { name, id } = await getPokemon(params.id);

  return {
    title: `#${id} - ${name}`,
    description: `Pokemon #${id} - ${name}`,
  };
}

const getPokemon = async (id: string) => {
  const data: PokemonResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${id}/`,
    {
      cache: "force-cache",
    }
  ).then((response) => response.json());

  return data;
};

export default async function PokemonPage({ params }: Props) {
  const pokemon = await getPokemon(params.id);

  return (
    <>
      <span className="fixed top-24 right-24 z-10 text-6xl text-slate-500 font-bold rotate-45">
        #{pokemon.id}
      </span>

      <section className="w-full h-[80vh] relative flex justify-center">
        <article className="flex gap-48 justify-between items-center">
          <div className="flex flex-col gap-9">
            <h1 className="text-7xl font-bold">
              {" "}
              {pokemon.name.toLocaleUpperCase()}{" "}
            </h1>

            <span className="text-xl font-bold">{pokemon.weight} kg</span>

            <div className="text-base font-medium text-navy-700 flex">
              {pokemon.types.map((type) => (
                <p key={type.slot} className="mr-2 capitalize">
                  {type.type.name}
                </p>
              ))}
            </div>

            <div className="flex">
              <Image
                src={pokemon.sprites.front_default}
                width={100}
                height={100}
                alt={`sprite ${pokemon.name}`}
              />

              <Image
                src={pokemon.sprites.back_default}
                width={100}
                height={100}
                alt={`sprite ${pokemon.name}`}
              />

            </div>
          </div>

          <Image
            src={pokemon.sprites.other?.dream_world.front_default ?? ""}
            width={400}
            height={400}
            alt={`Imagen del pokemon ${pokemon.name}`}
            className="mb-5"
          />
        </article>
      </section>
    </>
  );
}
