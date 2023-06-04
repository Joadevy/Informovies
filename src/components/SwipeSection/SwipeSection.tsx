import getData from "lib/getData";
import SwipeSlider from "./SwipeSlider";
import { MovieDetails, TvDetails } from "@/utils/types";
import { shuffleArray } from "@/utils/helpers";

type Props = {
  title: string;
  url: {
    path: string;
    optional?: string;
  };
  showMediaType: boolean;
  sizeImages?: number;
  url2?: {
    path: string;
    optional?: string;
  };
};

export const SwipeSection = async ({
  title,
  url,
  showMediaType,
  url2,
}: Props) => {
  let media = await getData<TvDetails | MovieDetails>(
    url.path,
    url.optional ?? ""
  );

  if (url2) {
    const media2 = await getData<TvDetails | MovieDetails>(
      url2.path,
      url2.optional ?? ""
    );
    // console.log(media2);
    media = shuffleArray(media.concat(media2));
  }

  if (media.length === 0) return null;

  return (
    <article className="text-white p-2 lg:p-0">
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
