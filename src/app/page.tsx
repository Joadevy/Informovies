import SliderSection from "@/components/SliderSection";
import { Outfit } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={outfit.className + " bg-dark-blue"}>
      <SliderSection title={"Trending"} />
    </main>
  );
}
