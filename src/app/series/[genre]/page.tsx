import { decodeURL, getApiURL } from "@/utils/helpers";

type Props = {
  params: {
    genre: string;
  };
};

// Quitar esto, no entiendo porque esta aca
// const getData = async (
//   path: string,
//   optional?: string
// ): Promise<MovieDetails> => {
//   const response = await fetch(getApiURL(path, optional), {});
//   if (!response.ok) throw new Error(`Error while fetching ${path}`);

//   const results = await response.json();
//   return results;
// };

export default async function Media({ params }: Props) {
  const genre = params.genre;

  // Buscar el endpoint the imbd para mostrar contenido por genero
  const path = `discover/tv?with_genres=${genre}`;
  //   const Details = await getData(path);

  return (
    <main className="text-white text-3xl">
      There will be tv series with genre: {decodeURL(genre)}
    </main>
  );
}
