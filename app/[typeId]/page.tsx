import { H1 } from "@/components/h1";
import { getPokemonType } from "@/data/pokemon";
import Link from "next/link";

interface PageProps {
  params: {
    typeId: string;
  };
}
export default async function PokemonTypePage({ params }: PageProps) {
  const { typeId } = params;
  const { id, name, pokemon } = await getPokemonType(typeId);

  return (
    <div className="flex flex-col gap-4 p-4">
      <H1>Pokemon Type: {name}</H1>
      <ul>
        {pokemon.map(({ id, name }) => (
          <li key={id}>
            <Link href={`/${typeId}/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
