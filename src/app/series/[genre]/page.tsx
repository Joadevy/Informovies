import SwipeSection from "@/components/SwipeSection";
import { decodeURL, getIdGenreByName } from "@/utils/helpers";
import { Genre } from "@/utils/types";
import getData from "lib/getData";
import Link from "next/link";

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
        <Link href={"/series"}>
          <h1 className="text-xl text-white-dust">{"Tv series"}</h1>
        </Link>
        <span className="text-xl text-white-dust">{">"}</span>
        <span className="text-4xl text-white">{decodeURL(genreName)}</span>
      </header>
      <main className="text-white text-3xl mt-16">
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
    </>
  );
}
