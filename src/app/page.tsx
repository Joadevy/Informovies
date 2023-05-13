import SearchBar from "@/components/SearchBar";
import SectionMedia from "@/components/SectionMedia";
import SwipeSection from "@/components/SwipeSection";

export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="mt-10 mb-5 w-3/4 lg:w-4/12 relative">
        <SearchBar />
      </div>

      <div className="flex flex-col gap-2 lg:gap-6">
        {/* @ts-expect-error Server Component */}
        <SwipeSection
          url={{ path: "trending/all/week", optional: `&page=1` }}
          title={"Trending"}
          showMediaType={true}
        />

        {/* <SectionMedia
        title="Trending"
        url={{ path: "trending/all/week", optional: "&page=2" }}
        sizeImages={300}
      /> */}

        {/* @ts-expect-error Server Component */}
        <SectionMedia
          title="Recommended for you"
          url={{ path: "trending/all/week", optional: "&page=2" }}
          sizeImages={300}
          showMediaType={true}
        />
      </div>
    </main>
  );
}
