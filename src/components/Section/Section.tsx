import { getImageURL } from "@/utils/helpers";
import getTopRatedMovies from "lib/getTopRatedMovies";

type props = {
  title: string;
};

const Section = async ({ title }: props) => {
  const movies = await getTopRatedMovies();
  return (
    <section className="text-white">
      <h2>{title}</h2>
      {movies?.map((movie) => (
        <div key={movie.id}>
          <p>{movie.title}</p>
          <img src={getImageURL(movie.poster_path)} alt="" />
        </div>
      ))}
    </section>
  );
};

export default Section;
