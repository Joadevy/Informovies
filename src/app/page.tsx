import SectionMedia from "@/components/SectionMedia";
import SwipeSection from "@/components/SwipeSection/SwipeSection";

export default function Home() {
  return (
    <main>
      {/* <SliderSection title={"Trending"} /> */}
      {/* @ts-expect-error Server Component */}
      <SwipeSection
        title="Trending"
        url={{ path: "trending/all/week", optional: "&page=1" }}
        sizeImages={400}
      ></SwipeSection>
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
    </main>
  );
}
