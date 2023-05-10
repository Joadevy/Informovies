import GenreBar from "@/components/FilterBars/GenreBar";
import RandomRecommendation from "@/components/RandomRecommendation";
import SearchBar from "@/components/SearchBar";
import SectionMedia from "@/components/SectionMedia";
import SwipeSection from "@/components/SwipeSection";

export default function Series() {
  return (
    <main>
      <div className="flex gap-2 items-center">
        <div className="mt-10 mb-5 w-3/4 lg:w-4/12 relative">
          <SearchBar />
        </div>

        <div className="mt-10 mb-5 relative">
          {/* @ts-expect-error Server Component */}
          <GenreBar mediaType="tv" />
        </div>
      </div>
      <div className="flex flex-col gap-2 lg:gap-6">
        {/* @ts-expect-error Server Component */}
        <SwipeSection
          url={{ path: "trending/tv/week", optional: "&page=1" }}
          title={"Trending"}
          showMediaType={false}
        />
        {/* @ts-expect-error Server Component */}
        <SectionMedia
          title="Popular"
          url={{ path: "tv/popular", optional: "&page=1" }}
          sizeImages={400}
          showMediaType={false}
        />

        <article className="flex flex-col w-full items-center justify-center my-4">
          {/* @ts-expect-error Server Component */}
          <RandomRecommendation mediaToRecommend="tv" />
        </article>

        {/* @ts-expect-error Server Component */}
        <SectionMedia
          title="On the air"
          url={{ path: "tv/on_the_air", optional: "&page=2" }}
          sizeImages={400}
          showMediaType={false}
        />
      </div>
    </main>
  );
}
