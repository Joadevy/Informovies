import SectionMedia from "@/components/SectionMedia";
import TopRatedMovies from "@/components/Sections/TopRatedMovies";
import SliderSection from "@/components/SliderSection";

export default function Home() {
  return (
    <main>
      {/* <SliderSection title={"Trending"} /> */}
      {/* @ts-expect-error Server Component */}
      <SectionMedia
        title="Trending"
        url={{ path: "trending/all/week", optional: "&page=1" }}
        sizeImages={400}
      />
      {/* @ts-expect-error Server Component */}
      <SectionMedia
        title="Recommended for you"
        url={{ path: "trending/all/week", optional: "&page=2" }}
        sizeImages={300}
      />

      {/* @ts-expect-error Server Component */}
      {/* <TopRatedMovies title="Top rated" widthImages={200} /> */}
    </main>
  );
}
