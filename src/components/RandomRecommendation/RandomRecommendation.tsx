import { MovieDetails, TvDetails } from "@/utils/types";
import getData from "lib/getData";
import ClientRandomRecommendation from "./ClientRandomRecommendation";

type Props = {
  mediaToRecommend: string;
};

const moreMedia = async (mediaToRecommend: string) => {
  const totalPages = 499; // That's the maximum according to the API docs (the max is 500 but maybe this would be safer)
  const randomPage = Math.floor(Math.random() * totalPages) + 1;
  const data = await getData<TvDetails | MovieDetails>(
    `discover/${mediaToRecommend}/`,
    "&sort_by=popularity.desc&page=" + randomPage
  );
  return data;
};

const RandomRecommendation = async ({ mediaToRecommend }: Props) => {
  const data = await moreMedia(mediaToRecommend);
  return (
    <ClientRandomRecommendation
      randomMedia={data}
      mediaToRecommend={mediaToRecommend}
    />
  );
};

export default RandomRecommendation;
