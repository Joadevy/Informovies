import GenreBar from "@/components/FilterBars/GenreBar";
import RandomRecommendation from "@/components/RandomRecommendation";
import SearchBar from "@/components/SearchBar";
import SectionMedia from "@/components/SectionMedia";
import SwipeSection from "@/components/SwipeSection";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Movies —Informovies",
  description: "The best movies in one place",
};

export default function Movies() {
  return (
    <main>
      <div className="flex gap-2 items-center">
        <div className="mt-10 mb-5 w-3/4 lg:w-4/12 relative">
          <SearchBar />
        </div>

        <div className="mt-10 mb-5 relative">
          {/* @ts-expect-error Server Component */}
          <GenreBar mediaType="movie" />
        </div>
      </div>

      <div className="flex flex-col gap-2 lg:gap-6">
        {/* @ts-expect-error Server Component */}
        <SwipeSection
          url={{ path: "trending/movie/week", optional: "&page=1" }}
          title={"Top 10 trending movies"}
          showMediaType={false}
          isTopSection={true}
        />
        {/* @ts-expect-error Server Component */}
        <SectionMedia
          title="Top rated"
          url={{ path: "movie/top_rated", optional: "&page=1" }}
          sizeImages={400}
          showMediaType={false}
        />

        <article className="flex flex-col w-full items-center justify-center my-4">
          {/* @ts-expect-error Server Component */}
          <RandomRecommendation mediaToRecommend="movie" />
        </article>

        {/* @ts-expect-error Server Component */}
        <SectionMedia
          title="Upcoming"
          url={{ path: "movie/upcoming", optional: "&page=1" }}
          sizeImages={400}
          showMediaType={false}
        />
      </div>
    </main>
  );
}
