const POKEMON_API = "http://pokeapi.co/api/v2";

function getResourceUrl(resource: string) {
  return new URL(`${POKEMON_API}/${resource}`);
}

function getIdFromResourceUrl(url: string) {
  return url.replace(/.*\/(\d+)\/$/, "$1");
}

export async function getPokemonTypes() {
  const url = getResourceUrl("type");
  const response = await fetch(url.toString());
  const data = (await response.json()) as {
    results: { name: string; url: string }[];
  };

  return data.results.map(({ name, url }) => ({
    name,
    id: getIdFromResourceUrl(url),
  }));
}

export async function getPokemonType(typeId: string) {
  const url = getResourceUrl(`type/${typeId}`);
  const response = await fetch(url.toString());
  const data = (await response.json()) as {
    id: string;
    name: string;
    pokemon: { pokemon: { name: string; url: string } }[];
  };

  return {
    id: data.id,
    name: data.name,
    pokemon: data.pokemon.map(({ pokemon }) => ({
      name: pokemon.name,
      id: getIdFromResourceUrl(pokemon.url),
    })),
  };
}

export async function getPokemon(pokemonId: string) {
  const url = getResourceUrl(`pokemon/${pokemonId}`);
  const response = await fetch(url.toString());
  const data = (await response.json()) as {
    id: string;
    name: string;
    stats: {
      base_stat: number;
      effort: number;
      stat: { name: string; url: string };
    }[];
  };

  return {
    id: data.id,
    name: data.name,
    stats: data.stats.map(({ base_stat, effort, stat }) => ({
      baseStat: base_stat,
      effort,
      name: stat.name,
      id: getIdFromResourceUrl(stat.url),
    })),
  };
}

export async function getPokemonStat(statId: string) {
  const url = getResourceUrl(`stat/${statId}`);
  const response = await fetch(url.toString());
  const data = (await response.json()) as { id: string; name: string };

  return {
    id: data.id,
    name: data.name,
  };
}
