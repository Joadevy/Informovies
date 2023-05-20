import SectionMedia from "@/components/SectionMedia";
import SwipeSection from "@/components/SwipeSection";
import {
  decodeURL,
  getGenreNameFromURL,
  getGenrePageFromURL,
  getIdGenreByName,
} from "@/utils/helpers";
import { Genre } from "@/utils/types";
import getData from "lib/getData";
import Link from "next/link";

type Props = {
  params: {
    genre: string;
  };
};

export default async function Media({ params }: Props) {
  const decodedURL = decodeURL(params.genre).toString();
  const genreName = getGenreNameFromURL(decodedURL);
  const genrePage = Number(getGenrePageFromURL(decodedURL));

  console.log({ genrePage });

  const idGenres = await getData<Genre>("genre/tv/list", "", "genres");
  const idGenre = getIdGenreByName(genreName!, idGenres);
  return (
    <>
      <header className="py-4 flex gap-1 items-center lg:-ml-7 fixed z-20 bg-dark-blue w-full top-0">
        <Link href={"/series"}>
          <h1 className="text-xl text-white-dust">{"Tv series"}</h1>
        </Link>
        <span className="text-xl text-white-dust">{">"}</span>
        <span className="text-4xl text-white">{genreName}</span>
      </header>
      <main className="text-white mt-16 flex flex-col gap-4">
        {/* @ts-expect-error Server Component */}
        <SwipeSection
          url={{
            path: "discover/tv",
            optional: `&include_adult=false&with_genres=${idGenre}&sort_by=vote_count.desc`,
          }}
          title={"More popular"}
          showMediaType={false}
        />

        {/* @ts-expect-error Server Component */}
        <SectionMedia
          title="All we have for you"
          url={{
            path: "discover/tv",
            optional: `&include_adult=false&with_genres=${idGenre}&sort_by=vote_count.desc&page=${
              genrePage + 1
            }`,
          }}
          sizeImages={300}
          showMediaType={false}
        />

        <Link href={`/series/genre=${genreName}&page=${Number(genrePage) + 1}`}>
          NEXT PAGE
        </Link>
      </main>
    </>
  );
}
