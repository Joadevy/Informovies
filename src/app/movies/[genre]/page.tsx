import { type MovieDetails } from "@/utils/types";
import { getApiURL } from "@/utils/helpers";

type Props = {
  params: {
    genre: string;
  };
};

const getData = async (
  path: string,
  optional?: string
): Promise<MovieDetails> => {
  const response = await fetch(getApiURL(path, optional), {});
  if (!response.ok) throw new Error(`Error while fetching ${path}`);

  const results = await response.json();
  return results;
};

export default async function Media({ params }: Props) {
  const genre = params.genre;

  // Buscar el endpoint the imbd para mostrar contenido por genero
  const path = `discover/movie?with_genres=${genre}`;
  //   const Details = await getData(path);

  return (
    <main className="text-white text-3xl">
      There will be movies with genre: {genre}
    </main>
  );
}
