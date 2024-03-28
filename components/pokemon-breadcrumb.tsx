import { getPokemon, getPokemonType } from "@/data/pokemon";
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
}

async function AsyncPokemonBreadcrumb({ typeId, pokemonId }: Props) {
  const [type, pokemon] = await Promise.all([
    getPokemonType(typeId),
    getPokemon(pokemonId),
  ]);
  const pokemons = type.pokemon;

  return (
    <BreadcrumbItem>
      <BreadcrumbLink href={`/${typeId}/${pokemonId}`}>
        {pokemon.name}
      </BreadcrumbLink>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center gap-1">
          <ChevronDown />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          {pokemons.map(({ id, name }) => (
            <DropdownMenuItem key={id}>
              <Link href={`/${typeId}/${id}`}>{name}</Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </BreadcrumbItem>
  );
}

export function PokemonBreadcrumb({ typeId, pokemonId }: Props) {
  return (
    <Suspense fallback={null}>
      <AsyncPokemonBreadcrumb typeId={typeId} pokemonId={pokemonId} />
    </Suspense>
  );
}
