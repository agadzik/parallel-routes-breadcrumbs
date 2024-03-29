import { H1 } from "@/components/h1";
import { getPokemon } from "@/data/pokemon";
import Link from "next/link";

interface PageProps {
  params: {
    typeId: string;
    pokemonId: string;
  };
}

export default async function PokemonPage({ params }: PageProps) {
  const { typeId, pokemonId } = params;
  const { id, name, stats } = await getPokemon(pokemonId);

  return (
    <>
      <nav className="p-4 border-b">
        <ul className="flex flex-row gap-2">
          <li>
            <Link href={`/${typeId}/${pokemonId}/about`}>About</Link>
          </li>
        </ul>
      </nav>
      <div className="flex flex-col gap-4 p-4">
        <H1>Pokemon: {name}</H1>
        <ul>
          {stats.map(({ id, name, baseStat }) => (
            <li key={id}>
              <Link href={`/${typeId}/${pokemonId}/${id}`}>{name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
