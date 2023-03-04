import { getImageURL } from "@/utils/helpers";
import getTopRated from "lib/getTopRatedMovies";
import Image from "next/image";

type props = {
  title: string;
  widthImages: number;
};

// A title prop doesn't make sense unless it was a generic section component
const TopRatedMovies = async ({ title, widthImages }: props) => {
  const movies = await getTopRated();
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
