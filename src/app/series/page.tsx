import SectionMedia from "@/components/SectionMedia";

export default function Series() {
  return (
    <main>
      {/* <SliderSection title={"Trending"} /> */}
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
