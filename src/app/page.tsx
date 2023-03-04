import TopRatedMovies from "@/components/Sections/TopRatedMovies";
import SliderSection from "@/components/SliderSection";

export default function Home() {
  return (
    <main>
      <SliderSection title={"Trending"} />
      {/* @ts-expect-error Server Component */}
      <TopRatedMovies title="Top rated" widthImages={200} />
    </main>
  );
}
