import Image from "next/image";
import Link from "next/link";

interface HeaderProps {
  breadcrumbs?: React.ReactNode;
}

export function Header({ breadcrumbs }: HeaderProps) {
  return (
    <header className="flex flex-row items-center gap-2 border-b h-20 px-4 relative">
      <Link href="/">
        <Image
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
          alt="Pikachu"
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
          width={96}
          height={96}
        />
      </Link>
      {breadcrumbs}
    </header>
  );
}
