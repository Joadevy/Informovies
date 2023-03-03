import { getApiURL, getImageURL } from "@/utils/helpers";

type props = {
  title: string;
};

export type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

const getTopRated = async (): Promise<Movie[]> => {
  const response = await fetch(getApiURL("movie/top_rated", "&page=1")!, {});
  const { results } = await response.json();

  return results;
};

//@ts-ignore
const Section: React.FC<props> = async ({ title }) => {
  const movies = await getTopRated();
  return (
    <section className="text-white">
      <h2>{title}</h2>
      {movies.map((movie) => (
        <div key={movie.id}>
          <p>{movie.title}</p>
          <img src={getImageURL(movie.poster_path)} alt="" />
        </div>
      ))}
    </section>
  );
};

export default Section;
