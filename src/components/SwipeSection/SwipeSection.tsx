import getData from "lib/getData";
import SwipeSlider from "./SwipeSlider";
import { MovieDetails, TvDetails } from "@/utils/types";

type Props = {
  title: string;
  url: {
    path: string;
    optional?: string;
  };
  sizeImages?: number;
};

export const SwipeSection = async ({ title, url, sizeImages = 200 }: Props) => {
  const media = await getData<TvDetails | MovieDetails>(
    url.path,
    url.optional ?? ""
  );
  console.log("data swipe: " + media);
  return (
    <article className="text-white">
      <h2>{title}</h2>
      <SwipeSlider data={media} sizeImages={sizeImages}></SwipeSlider>
    </article>
  );
};

export default SwipeSection;
