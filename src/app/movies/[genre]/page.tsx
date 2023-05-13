import { Genre, type MovieDetails } from "@/utils/types";
import { decodeURL, getApiURL, getIdGenreByName } from "@/utils/helpers";
import Link from "next/link";
import getData from "lib/getData";
import SwipeSection from "@/components/SwipeSection";
import SectionMedia from "@/components/SectionMedia";

type Props = {
  params: {
    genre: string;
  };
};

export default async function Media({ params }: Props) {
  const genreName = decodeURL(params.genre).toString();
  const idGenres = await getData<Genre>("genre/tv/list", "", "genres");
  const idGenre = getIdGenreByName(genreName, idGenres);

  return (
    <>
      <header className="py-4 flex gap-1 items-center lg:-ml-7 fixed z-20 bg-dark-blue w-full top-0">
        <Link href={"/movies"}>
          <h1 className="text-xl text-white-dust">{"Movies"}</h1>
        </Link>
        <span className="text-xl text-white-dust">{">"}</span>
        <span className="text-4xl text-white">{decodeURL(genreName)}</span>
      </header>
      <main className="text-white mt-16 flex flex-col gap-4">
        {/* @ts-expect-error Server Component */}
        <SwipeSection
          url={{
            path: "discover/movie",
            optional: `&include_adult=false&with_genres=${idGenre}&sort_by=vote_count.desc`,
          }}
          title={"More popular"}
          showMediaType={false}
        />

        {/* This will be a paginated component starting in 2 and user can navigate and update the request by incrementing &page=X+1 */}
        {/* @ts-expect-error Server Component */}
        <SectionMedia
          title="All we have for you"
          url={{
            path: "discover/movie",
            optional: `&include_adult=false&with_genres=${idGenre}&sort_by=vote_count.desc&page=2`,
          }}
          sizeImages={300}
          showMediaType={false}
        />
      </main>
    </>
  );
}
