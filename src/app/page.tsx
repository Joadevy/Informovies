import SearchBar from "@/components/SearchBar";
import SectionMedia from "@/components/SectionMedia";
import SwipeSection from "@/components/SwipeSection";

export default function Home() {
  return (
    <main className="flex flex-col gap-4">
      <div className="mt-10 mb-5 w-3/4 lg:w-4/12 relative">
        <SearchBar />
      </div>
      {/* @ts-expect-error Server Component */}
      <SwipeSection
        url={{ path: "trending/all/week", optional: "&page=1" }}
        title={"Trending"}
        showDetails={true}
      />

      {/* <SectionMedia
        title="Trending"
        url={{ path: "trending/all/week", optional: "&page=1" }}
        sizeImages={300}
      /> */}

      {/* @ts-expect-error Server Component */}
      <SectionMedia
        title="Recommended for you"
        url={{ path: "trending/all/week", optional: "&page=2" }}
        sizeImages={300}
      />

      {/* <TopRatedMovies title="Top rated" widthImages={200} /> */}
    </main>
  );
}
