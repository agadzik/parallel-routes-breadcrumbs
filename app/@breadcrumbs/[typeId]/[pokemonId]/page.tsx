import { TypeBreadcrumb } from "@/components/type-breadcrumb";
import { PokemonBreadcrumb } from "@/components/pokemon-breadcrumb";
import { BreadcrumbSeparator } from "@/components/ui/breadcrumb";

interface PageProps {
  params: {
    typeId: string;
    pokemonId: string;
  };
}
export default function PokemonBreadcrumbPage({ params }: PageProps) {
  return (
    <>
      <TypeBreadcrumb typeId={params.typeId} />
      <BreadcrumbSeparator />
      <PokemonBreadcrumb typeId={params.typeId} pokemonId={params.pokemonId} />
    </>
  );
}
