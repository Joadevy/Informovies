import SearchBar from "@/components/SearchBar";
import SectionMedia from "@/components/SectionMedia";
import SwipeSection from "@/components/SwipeSection";

export default function Series() {
  return (
    <main>
      <div className="mt-10 mb-5 w-3/4 lg:w-4/12 relative">
        <SearchBar />
      </div>
      {/* @ts-expect-error Server Component */}
      <SwipeSection
        url={{ path: "trending/tv/week", optional: "&page=1" }}
        title={"Trending"}
        showDetails={false}
      />
      {/* @ts-expect-error Server Component */}
      <SectionMedia
        title="Popular"
        url={{ path: "tv/popular", optional: "&page=1" }}
        sizeImages={400}
      />
      {/* @ts-expect-error Server Component */}
      <SectionMedia
        title="On the air"
        url={{ path: "tv/on_the_air", optional: "&page=2" }}
        sizeImages={400}
      />
    </main>
  );
}
