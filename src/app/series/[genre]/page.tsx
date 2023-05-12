import SwipeSection from "@/components/SwipeSection";
import { decodeURL } from "@/utils/helpers";
import { Genre } from "@/utils/types";
import getData from "lib/getData";

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

const getIdGenreByName = (name: string, genres: Genre[]) => {
  return genres.find((genre) => genre.name === name)?.id;
};

export default async function Media({ params }: Props) {
  const genreName = decodeURL(params.genre).toString();
  const idGenres = await getData<Genre>("genre/movie/list", "", "genres");
  const idGenre = getIdGenreByName(genreName, idGenres);
  // const data = await getData(path, `&with_genres=${genre}&adult=false`);
  return (
    <main className="text-white text-3xl">
      <header className="mt-1 mb-2">
        <h1 className="text-2xl lg:-ml-7">{`Tv series > ${decodeURL(
          genreName
        )}`}</h1>
      </header>
      {/* @ts-expect-error Server Component */}
      <SwipeSection
        url={{
          path: "discover/tv",
          optional: `&include_adult=false&with_genres=${idGenre}&sort_by=vote_count.desc`,
        }}
        title={"More popular"}
        showMediaType={false}
      />
    </main>
  );
}
