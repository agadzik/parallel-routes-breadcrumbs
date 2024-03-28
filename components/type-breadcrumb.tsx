import { getPokemonType, getPokemonTypes } from "@/data/pokemon";
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
}

async function AsyncTypeBreadcrumb({ typeId }: Props) {
  const [types, type] = await Promise.all([
    getPokemonTypes(),
    getPokemonType(typeId),
  ]);

  return (
    <BreadcrumbItem>
      <BreadcrumbLink href={`/${typeId}`}>{type.name}</BreadcrumbLink>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center gap-1">
          <ChevronDown />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          {types.map(({ id, name }) => (
            <DropdownMenuItem key={id}>
              <Link href={`/${id}`}>{name}</Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </BreadcrumbItem>
  );
}

export function TypeBreadcrumb({ typeId }: Props) {
  return (
    <Suspense fallback={null}>
      <AsyncTypeBreadcrumb typeId={typeId} />
    </Suspense>
  );
}
