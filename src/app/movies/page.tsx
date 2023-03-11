import SectionMedia from "@/components/SectionMedia";

export default function Movies() {
  return (
    <main>
      {/* <SliderSection title={"Trending"} /> */}
      {/* @ts-expect-error Server Component */}
      <SectionMedia
        title="Top rated"
        url={{ path: "movie/top_rated", optional: "&page=1" }}
        sizeImages={400}
      />
      {/* @ts-expect-error Server Component */}
      <SectionMedia
        title="Upcoming"
        url={{ path: "movie/upcoming", optional: "&page=2" }}
        sizeImages={400}
      />
    </main>
  );
}
