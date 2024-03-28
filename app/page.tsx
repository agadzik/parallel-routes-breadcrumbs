import { H1 } from "@/components/h1";
import { getPokemonTypes } from "@/data/pokemon";
import Link from "next/link";

export default async function PokemonTypesPage() {
  const types = await getPokemonTypes();
  return (
    <div className="flex flex-col gap-4 p-4">
      <H1>Pokemon Types</H1>
      <ul>
        {types.map(({ id, name }) => (
          <li key={id}>
            <Link href={`/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
