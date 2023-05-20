import { ENDPOINT, API_KEY } from "@/utils/constants";
import { Genre } from "./types";
export const getApiURL = (path: string, optional?: string) =>
  `${ENDPOINT}${path}?api_key=${API_KEY}${optional ?? ""}`;

export const getImageURL = (path: string, width = 200) =>
  `https://image.tmdb.org/t/p/w${width}/${path}`;

export const getYear = (date: string) => {
  return new Date(date).getFullYear();
};

export const getStars = (voteAverage: number) =>
  "★".repeat(Math.floor(voteAverage / 2)).padEnd(5, "☆");

export const decodeURL = (url: string) =>
  decodeURIComponent(url.replace(/\+/g, " "));

export const getGenreNameFromURL = (url: string) => {
  const genreNameRegex = /genre=(.*?)(?=&page|$)/;
  const generoMatch = url.match(genreNameRegex);
  return generoMatch ? decodeURIComponent(generoMatch[1]) : "";
};

export const getGenrePageFromURL = (url: string) => {
  const paginaExp = /page=(.*)/;
  const paginaMatch = url.match(paginaExp);
  return paginaMatch ? Number(paginaMatch[1]) : 1;
};

export const getIdGenreByName = (name: string, genres: Genre[]) =>
  genres.find((genre) => genre.name === name)?.id;
