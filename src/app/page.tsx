import SearchBar from "@/components/SearchBar";
import SectionMedia from "@/components/SectionMedia";
import TopRatedMovies from "@/components/Sections/TopRatedMovies";
// import SliderSection from "@/components/SwipeSection";

export default function Home() {
  return (
    <main className="flex flex-col gap-4">
      <div className="mt-10 w-4/12 relative">
        <SearchBar />
      </div>
      {/* <SliderSection title={"Trending"} /> */}
      {/* @ts-expect-error Server Component */}
      <SectionMedia
        title="Trending"
        url={{ path: "trending/all/week", optional: "&page=1" }}
        sizeImages={300}
      />
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
