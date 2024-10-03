import { PokemonsResponse, SimplePokemon } from "@/app/common/models/pokemons";
import { ListPokemons } from "./components";

const OFFSET = 71;

const getPokemons = async ({
  limit = 10,
  offset = OFFSET,
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

export default async function PokemonsPage() {
  const pokemons = await getPokemons({ limit: 71, offset: 0 });

  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-2xl font-bold">
        Listado de Pokemons <small>estaticó</small>
      </h1>

      <ListPokemons
        pokemonsList={pokemons}
        offset={71}
      ></ListPokemons>
    </div>
  );
}
