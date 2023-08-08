import { getGenres } from "lib/getData";
import GenreBarClient from "./GenreBarClient";

type Props = {
  mediaType: "tv" | "movie";
};

export type Genre = {
  id: number;
  name: string;
};

const GenreBar = async ({ mediaType }: Props) => {
  const genres = await getGenres(mediaType);
  return <GenreBarClient genres={genres} />;
};

export default GenreBar;
