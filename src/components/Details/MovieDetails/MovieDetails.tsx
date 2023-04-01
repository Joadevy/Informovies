import { getStars } from "@/utils/helpers";
import type { MovieDetails as IMovieD } from "@/utils/types";

type Props = {
  Details: IMovieD;
};

export const MovieDetails = ({ Details }: Props) => {
  return (
    <article className="w-7/12 flex flex-col gap-4 mt-[11vh]">
      <header className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold">{Details.title}</h1>
        <p className="text-white-dust">{Details.tagline}</p>
        <div className="flex gap-5 items-center">
          <ul className="flex gap-2">
            {Details.genres.map((genre) => (
              <li
                className="border border-grayish-blue text-grayish-blue py-1 px-2 rounded-lg bg-semi-dark-blue"
                key={genre.id}
              >
                {genre.name}
              </li>
            ))}
          </ul>
          <p className="text-xl">
            <span className="text-2xl">{getStars(Details.vote_average)}</span>{" "}
            {`(${(Details.vote_average / 2).toFixed(2)})`}
          </p>
        </div>
      </header>
      <div>
        <h2 className="mb-1 font-bold">Synopsis</h2>
        <p className="text-white-dust">{Details.overview}</p>
      </div>
      <a
        className="text-white-smoke rounded-xl p-2 border bg-red mt-5 max-w-fit"
        href={Details.homepage}
      >
        Official website
      </a>
    </article>
  );
};
