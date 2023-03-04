import Section from "@/components/Section";
import TopRatedMovies from "@/components/Sections/TopRatedMovies";
import SliderSection from "@/components/SliderSection";

export default function Home() {
  return (
    <main>
      {/* @ts-expect-error Server Component */}
      {/* <SliderSection title={"Trending"} /> */}
      {/* <Section
        title="Trending"
        url={{ path: "trending/all/week", optional: "&page=1" }}
        sizeImages={200}
      /> */}
      {/* @ts-expect-error Server Component */}
      <Section
        title="Recommended for you"
        url={{ path: "trending/all/week", optional: "&page=2" }}
        sizeImages={400}
      />

      {/* <TopRatedMovies title="Top rated" widthImages={200} /> */}
    </main>
  );
}
