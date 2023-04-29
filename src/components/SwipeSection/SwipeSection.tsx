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
  showMediaType: boolean;
};

export const SwipeSection = async ({ title, url, showMediaType }: Props) => {
  const media = await getData<TvDetails | MovieDetails>(
    url.path,
    url.optional ?? ""
  );

  if (media.length === 0) return null;

  return (
    <article className="text-white">
      <h2
        className="text-2xl mb-2
      "
      >
        {title}
      </h2>
      <SwipeSlider slides={media} showMediaType={showMediaType} />
    </article>
  );
};
