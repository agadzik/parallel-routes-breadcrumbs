import { H1 } from "@/components/h1";
import { getPokemon, getPokemonStat } from "@/data/pokemon";

interface PageProps {
  params: {
    typeId: string;
    pokemonId: string;
    statId: string;
  };
}

export default async function PokemonStatPage({ params }: PageProps) {
  const { typeId, pokemonId, statId } = params;
  const [pokemon, { name }] = await Promise.all([
    getPokemon(pokemonId),
    getPokemonStat(statId),
  ]);
  const { stats } = pokemon;
  const stat = stats.find((stat) => stat.id === statId);

  return (
    <div className="flex flex-col gap-4 p-4">
      <H1>Stat: {name}</H1>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>Effort: {stat?.effort}</li>
        <li>Base Stat: {stat?.baseStat}</li>
      </ul>
    </div>
  );
}
