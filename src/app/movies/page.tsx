import RandomRecommendation from "@/components/RandomRecommendation";
import SearchBar from "@/components/SearchBar";
import SectionMedia from "@/components/SectionMedia";
import SwipeSection from "@/components/SwipeSection";

export default function Movies() {
  return (
    <main>
      <div className="mt-10 mb-5 w-3/4 lg:w-4/12 relative">
        <SearchBar />
      </div>
      {/* @ts-expect-error Server Component */}
      <SwipeSection
        url={{ path: "movie/top_rated", optional: "&page=1" }}
        title={"Trending"}
        showDetails={false}
      />
      {/* @ts-expect-error Server Component */}
      <SectionMedia
        title="Top rated"
        url={{ path: "movie/top_rated", optional: "&page=1" }}
        sizeImages={400}
      />

      {/* <RandomRecommendation mediaToRecommend="movie" /> */}

      {/* @ts-expect-error Server Component */}
      <SectionMedia
        title="Upcoming"
        url={{ path: "movie/upcoming", optional: "&page=2" }}
        sizeImages={400}
      />
    </main>
  );
}
