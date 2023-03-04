import { getApiURL } from "@/utils/helpers";

const getTopRated = async <Movie>(): Promise<Movie[]> => {
  const response = await fetch(getApiURL("movie/top_rated", "&page=1"), {});
  if (!response.ok) throw new Error("Error while fetching top rated movies");

  const { results } = await response.json();

  return results;
};

export default getTopRated;
