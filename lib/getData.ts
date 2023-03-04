import { getApiURL } from "@/utils/helpers";

const getData = async <T>(path: string, optional?: string): Promise<T[]> => {
  const response = await fetch(getApiURL(path, optional), {});
  if (!response.ok) throw new Error(`Error while fetching ${path}`);

  const { results } = await response.json();
  return results;
};

export default getData;
