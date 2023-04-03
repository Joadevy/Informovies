import { getStars } from "@/utils/helpers";
import type { MovieDetails as IMovieD } from "@/utils/types";
import ClientDate from "../ClientDate";
import LiMainInformation from "../LiMainInformation";
import RedAnchorTag from "@/components/Buttons/RedAnchorTag";
import ButtonBookmark from "@/components/Buttons/ButtonBookmark";

type Props = {
  Details: IMovieD;
};

export const MovieDetails = ({ Details }: Props) => {
  return (
    <article className="w-7/12 flex flex-col gap-4 mt-[11vh]">
      <header className="flex flex-col gap-2">
        <div className="max-w-fit relative">
          <h1 className="text-4xl font-bold">{Details.title}</h1>
          <div className="absolute top-0 -right-12">
            <ButtonBookmark media={Details} />
          </div>
        </div>
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

      <ul className="flex gap-2 border justify-between w-3/4 p-3 rounded-xl border-grayish-blue border-opacity-30">
        <LiMainInformation
          title="Release"
          content={<ClientDate date={Details.release_date} />}
        />
        <LiMainInformation
          title="Duration"
          content={Details.runtime}
          extra={" Min"}
        />
        <LiMainInformation
          title="Original language"
          content={Details.original_language}
        />
      </ul>

      <div>
        <h2 className="mb-1 font-bold">Synopsis</h2>
        <p className="text-white-smoke">{Details.overview}</p>
      </div>

      <article>
        <h2 className="mb-1 font-bold">More about</h2>
        <div className="flex gap-2">
          <div className="border border-grayish-blue border-opacity-30 rounded-lg max-w-fit p-2">
            <h3 className="mb-1 font-semi">Production countries</h3>
            <ul className="flex flex-col gap-1 max-w-fit rounded-xl text-white-smoke">
              {Details.production_countries.map((country) => (
                <li key={country.name}>◟{country.name} </li>
              ))}
            </ul>
          </div>

          <div className="border border-grayish-blue border-opacity-30 rounded-lg max-w-fit p-2">
            <h3 className="mb-1 font-semi">Production companies</h3>
            <ul className="flex flex-col gap-1 max-w-fit rounded-xl text-white-smoke">
              {Details.production_companies.map((country) => (
                <li key={country.id}>◟{country.name} </li>
              ))}
            </ul>
          </div>
        </div>
      </article>

      <RedAnchorTag linkTo={Details.homepage} label="Official website" />
    </article>
  );
};
