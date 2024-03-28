import { TypeBreadcrumb } from "@/components/type-breadcrumb";
import { PokemonBreadcrumb } from "@/components/pokemon-breadcrumb";
import { BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { StatBreadcrumb } from "@/components/stat-breadcrumb";

interface PageProps {
  params: {
    typeId: string;
    pokemonId: string;
    statId: string;
  };
}
export default function StatBreadcrumbPage({ params }: PageProps) {
  return (
    <>
      <TypeBreadcrumb typeId={params.typeId} />
      <BreadcrumbSeparator />
      <PokemonBreadcrumb typeId={params.typeId} pokemonId={params.pokemonId} />
      <BreadcrumbSeparator />
      <StatBreadcrumb
        typeId={params.typeId}
        pokemonId={params.pokemonId}
        statId={params.statId}
      />
    </>
  );
}
