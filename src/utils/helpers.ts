import { ENDPOINT, API_KEY } from "@/utils/constants";
export const getApiURL = (path: string, optional?: string) =>
  `${ENDPOINT}${path}?api_key=${API_KEY}${optional ?? ""}`;

export const getImageURL = (path: string, width = 200) =>
  `https://image.tmdb.org/t/p/w${width}/${path}`;

export const getYear = (date: string) => {
  return new Date(date).getFullYear();
};

export const getStars = (voteAverage: number) =>
  "★".repeat(Math.floor(voteAverage / 2)).padEnd(5, "☆");
