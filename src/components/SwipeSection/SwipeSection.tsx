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
  showDetails: boolean;
};

export const SwipeSection = async ({ title, url, showDetails }: Props) => {
  const media = await getData<TvDetails | MovieDetails>(
    url.path,
    url.optional ?? ""
  );

  return (
    <article className="text-white">
      <h2
        className="text-2xl mb-2
      "
      >
        {title}
      </h2>
      <SwipeSlider slides={media} showDetails={showDetails} />
    </article>
  );
};
