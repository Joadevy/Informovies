import { MovieDetails, TvDetails } from "@/utils/types";
import getData from "lib/getData";
import ClientRandomRecommendation from "./ClientRandomRecommendation";
import ViewMedia from "../SectionMedia/ViewMedia/ViewMedia";

type Props = {
  mediaToRecommend: "movie" | "tv";
};

const RandomRecommendation = async ({ mediaToRecommend }: Props) => {
  const totalPages = 499; // That's the maximum according to the API docs (the max is 500 but maybe this would be safer)
  const randomPage = Math.floor(Math.random() * totalPages) + 1;
  const data = await getData<TvDetails | MovieDetails>(
    `discover/${mediaToRecommend}/`,
    "&sort_by=popularity.desc&page=" + randomPage
  );

  const randomMedia = data[Math.floor(Math.random() * data.length)];
  return <ClientRandomRecommendation randomMedia={randomMedia} />;
};

export default RandomRecommendation;
