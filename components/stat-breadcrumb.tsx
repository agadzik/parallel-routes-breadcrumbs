import { getPokemon, getPokemonStat } from "@/data/pokemon";
import Link from "next/link";
import { Suspense } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { BreadcrumbItem, BreadcrumbLink } from "./ui/breadcrumb";

interface Props {
  typeId: string;
  pokemonId: string;
  statId: string;
}

async function AsyncStatBreadcrumb({ typeId, pokemonId, statId }: Props) {
  const [pokemon, stat] = await Promise.all([
    getPokemon(pokemonId),
    getPokemonStat(statId),
  ]);
  const stats = pokemon.stats;

  return (
    <BreadcrumbItem>
      <BreadcrumbLink href={`/${typeId}/${pokemonId}/${statId}`}>
        {stat.name}
      </BreadcrumbLink>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center gap-1">
          <ChevronDown />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          {stats.map(({ id, name }) => (
            <DropdownMenuItem key={id}>
              <Link href={`/${typeId}/${pokemonId}/${id}`}>{name}</Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </BreadcrumbItem>
  );
}

export function StatBreadcrumb({ typeId, pokemonId, statId }: Props) {
  return (
    <Suspense fallback={null}>
      <AsyncStatBreadcrumb
        typeId={typeId}
        pokemonId={pokemonId}
        statId={statId}
      />
    </Suspense>
  );
}
