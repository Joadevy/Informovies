import { getApiURL } from "@/utils/helpers";
import { Movie } from "@/utils/types";

const getTopRated = async (): Promise<Movie[]> => {
  const response = await fetch(getApiURL("movie/top_rated", "&page=1")!, {});
  const { results } = await response.json();

  return results;
};

export default getTopRated;
