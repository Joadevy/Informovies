import type { Genre } from "@/utils/types";
import {
  decodeURL,
  encodeURL,
  getGenreNameFromURL,
  getGenrePageFromURL,
  getIdGenreByName,
} from "@/utils/helpers";
import Link from "next/link";
import { getGenres } from "lib/getData";
import SwipeSection from "@/components/SwipeSection";
import SectionMedia from "@/components/SectionMedia";
import PrevNextPage from "@/components/Buttons/PrevNextPage";
import { Metadata } from "next";

type Props = {
  params: {
    genre: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const decodedURL = decodeURL(params.genre).toString();
  const genreName = getGenreNameFromURL(decodedURL);
  return {
    title: `${genreName} movies —Informovies`,
    description: `All ${genreName} movies we have for you`,
  };
}

export async function generateStaticParams() {
  const idGenres = await getGenres("movie");
  const genres = idGenres.map((genre) => ({
    genre: encodeURL(`genre=${genre.name}&page=1`),
  }));
  return genres;
}

export default async function Media({ params }: Props) {
  const decodedURL = decodeURL(params.genre).toString();
  const genreName = getGenreNameFromURL(decodedURL);
  const genrePage = getGenrePageFromURL(decodedURL);
  const genres: Genre[] = await getGenres("movie");
  const idGenre = getIdGenreByName(genreName!, genres);

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
