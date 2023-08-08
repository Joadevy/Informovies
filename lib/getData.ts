import { Genre } from "@/components/FilterBars/GenreBar/GenreBar";
import { getApiURL } from "@/utils/helpers";

const getData = async <T>(
  path: string,
  optional?: string,
  property?: string
): Promise<T[]> => {
  const response = await fetch(getApiURL(path, optional), {
    next: { revalidate: 60 * 60 * 24 },
  });
  if (!response.ok) throw new Error(`Error while fetching ${path}`);
  if (!property) {
    const { results } = await response.json();
    return results;
  }
  const { [property]: results } = await response.json();
  return results;
};

export const getGenres = async (
  mediaType: "tv" | "movie"
): Promise<Genre[]> => {
  const response = await fetch(getApiURL(`genre/${mediaType}/list`), {
    next: { revalidate: 60 * 60 * 24 },
  });
  if (!response.ok) throw new Error(`Error while fetching genre/tv/list`);

  const { ["genres"]: results } = await response.json();
  return results;
};

export default getData;
