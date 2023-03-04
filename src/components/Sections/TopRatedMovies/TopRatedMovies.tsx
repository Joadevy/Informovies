import { getImageURL } from "@/utils/helpers";
import { Movie } from "@/utils/types";
import getData from "lib/getData";
import Image from "next/image";

type props = {
  title: string;
  widthImages: number;
};

// A title prop doesn't make sense unless it was a generic section component
const TopRatedMovies = async ({ title, widthImages }: props) => {
  const movies = await getData<Movie>("movie/top_rated", "&page=1");
  return (
    <article className="text-white">
      <h2>{title}</h2>
      {movies?.map((movie) => (
        <div key={movie.id}>
          <p>{movie.title}</p>
          <Image
            src={getImageURL(movie.poster_path, widthImages)}
            width={widthImages}
            height={widthImages}
            alt=""
          />
        </div>
      ))}
    </article>
  );
};

export default TopRatedMovies;
