import getData from "lib/getData";
import GenreBarClient from "./GenreBarClient";

type Props = {
  mediaType: string;
};

export type Genre = {
  id: number;
  name: string;
};

const GenreBar = async ({ mediaType }: Props) => {
  const genres = await getData<Genre>(`genre/${mediaType}/list`, "", "genres");
  return <GenreBarClient genres={genres} />;
};

export default GenreBar;
