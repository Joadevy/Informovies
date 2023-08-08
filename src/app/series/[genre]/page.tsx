import PrevNextPage from "@/components/Buttons/PrevNextPage";
import SectionMedia from "@/components/SectionMedia";
import SwipeSection from "@/components/SwipeSection";
import {
  decodeURL,
  encodeURL,
  getGenreNameFromURL,
  getGenrePageFromURL,
  getIdGenreByName,
} from "@/utils/helpers";
import { getGenres } from "lib/getData";
import Link from "next/link";

type Props = {
  params: {
    genre: string;
  };
};

export async function generateStaticParams() {
  const idGenres = await getGenres("tv");
  const genres = idGenres.map((genre) => ({
    genre: encodeURL(`genre=${genre.name}&page=1`),
  }));
  return genres;
}

export default async function Media({ params }: Props) {
  const decodedURL = decodeURL(params.genre).toString();
  const genreName = getGenreNameFromURL(decodedURL);
  const genrePage = getGenrePageFromURL(decodedURL);

  const idGenres = await getGenres("tv");
  const idGenre = getIdGenreByName(genreName!, idGenres);
  return (
    <>
      <header className="lg:py-4 flex justify-center lg:justify-start gap-1 items-center lg:-ml-7 lg:fixed lg:z-20 bg-dark-blue w-full lg:top-0">
        <Link href={"/series"}>
          <h1 className="text-xl text-white-dust">{"Tv series"}</h1>
        </Link>
        <span className="text-xl text-white-dust">{">"}</span>
        <span className="text-4xl text-white">{genreName}</span>
      </header>
      <main className="text-white mt-2 lg:mt-16 flex flex-col gap-4">
        {/* @ts-expect-error Server Component */}
        <SwipeSection
          url={{
            path: "discover/tv",
            optional: `&include_adult=false&with_genres=${idGenre}&sort_by=vote_count.desc`,
          }}
          title={"More popular"}
          showMediaType={false}
        />

        <article id="all">
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
        </article>

        <div className="flex w-full items-center justify-center">
          <PrevNextPage
            nextUrl={`/series/genre=${genreName}&page=${Number(genrePage) + 1}`}
            prevUrl={
              genrePage > 1
                ? `/series/genre=${genreName}&page=${Number(genrePage) - 1}`
                : ""
            }
          />
        </div>
      </main>
    </>
  );
}
