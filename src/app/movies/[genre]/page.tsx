import { Genre } from "@/utils/types";
import {
  decodeURL,
  getGenreNameFromURL,
  getGenrePageFromURL,
  getIdGenreByName,
} from "@/utils/helpers";
import Link from "next/link";
import getData from "lib/getData";
import SwipeSection from "@/components/SwipeSection";
import SectionMedia from "@/components/SectionMedia";
import PrevNextPage from "@/components/Buttons/PrevNextPage";

type Props = {
  params: {
    genre: string;
  };
};

export default async function Media({ params }: Props) {
  const decodedURL = decodeURL(params.genre).toString();
  const genreName = getGenreNameFromURL(decodedURL);
  const genrePage = getGenrePageFromURL(decodedURL);
  const idGenres = await getData<Genre>("genre/movie/list", "", "genres");
  const idGenre = getIdGenreByName(genreName!, idGenres);

  return (
    <>
      <header className="lg:py-4 flex justify-center lg:justify-start gap-1 items-center lg:-ml-7 lg:fixed lg:z-20 bg-dark-blue w-full lg:top-0">
        <Link href={"/movies"}>
          <h1 className="text-xl text-white-dust">{"Movies"}</h1>
        </Link>
        <span className="text-xl text-white-dust">{">"}</span>
        <span className="text-4xl text-white">{genreName}</span>
      </header>
      <main className="text-white mt-2 lg:mt-16 flex flex-col gap-4">
        {/* @ts-expect-error Server Component */}
        <SwipeSection
          url={{
            path: "discover/movie",
            optional: `&include_adult=false&with_genres=${idGenre}&sort_by=vote_count.desc&page=1`,
          }}
          title={"More popular"}
          showMediaType={false}
        />

        <article id="all">
          {/* @ts-expect-error Server Component */}
          <SectionMedia
            title="All we have for you"
            url={{
              path: "discover/movie",
              optional: `&include_adult=false&with_genres=${idGenre}&sort_by=vote_count.desc&page=${
                genrePage + 1
              }`,
            }}
            sizeImages={300}
            showMediaType={false}
          />
        </article>

        <div className="flex w-full items-center justify-center">
          <PrevNextPage
            nextUrl={`/movies/genre=${genreName}&page=${Number(genrePage) + 1}`}
            prevUrl={
              genrePage > 1
                ? `/movies/genre=${genreName}&page=${Number(genrePage) - 1}`
                : ""
            }
          />
        </div>
      </main>
    </>
  );
}
