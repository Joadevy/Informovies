import { getStars } from "@/utils/helpers";
import type { MovieDetails as IMovieD } from "@/utils/types";
import ClientDate from "../ClientDate";
import LiMainInformation from "../LiMainInformation";
import RedAnchorTag from "@/components/Buttons/RedAnchorTag";
import ButtonBookmark from "@/components/Buttons/ButtonBookmark";
import LinkToGenre from "@/components/Buttons/LInkToGenre";

type Props = {
  Details: IMovieD;
};

export const MovieDetails = ({ Details }: Props) => {
  return (
    <article className="flex flex-col p-2 gap-4 lg:p-0 lg:w-7/12 lg:mt-[11vh]">
      <header className="flex flex-col gap-2">
        <div className="lg:max-w-fit relative">
          <h1 className="text-2xl w-[85%] lg:w-full lg:text-4xl font-bold">
            {Details.title}
          </h1>
          <div className="absolute -top-1 right-0 lg:top-0 lg:-right-12">
            <ButtonBookmark
              media={{
                mediaId: Details.id,
                title: Details.title,
                overview: Details.overview,
                imageUrl: Details.poster_path ?? Details.backdrop_path,
                name: "tv series",
                voteAverage: Details.vote_average,
                dateReleased: Details.release_date,
              }}
            />
          </div>
        </div>
        <p className="text-white-dust">{Details.tagline}</p>
        <div className="flex flex-col mt-2 lg:mt-0 lg:flex-row gap-5 lg:items-center">
          <ul className="flex gap-2">
            {Details.genres.map((genre) => (
              <LinkToGenre
                key={genre.id}
                genre={genre.name}
                mediatype="movies"
              />
            ))}
          </ul>
          <p className="hidden text-lg lg:text-xl lg:flex lg:gap-1 lg:items-center lg:justify-center">
            <span className="text-md lg:text-2xl">
              {getStars(Details.vote_average)}
            </span>{" "}
            <span className="">{`(${(Details.vote_average / 2).toFixed(
              2
            )})`}</span>
          </p>
        </div>
      </header>

      <ul className="flex gap-10 lg:gap-2 border justify-around lg:justify-between w-full lg:w-3/4 p-3 rounded-xl border-grayish-blue border-opacity-30">
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

      {Details.production_companies.length > 0 ||
      Details.production_countries.length > 0 ? (
        <article>
          <h2 className="mb-1 font-bold">More about</h2>
          <div className="flex gap-2">
            {Details.production_countries.length > 0 && (
              <div className="border border-grayish-blue border-opacity-30 rounded-lg max-w-fit p-2">
                <h3 className="mb-1 font-semibold">Production countries</h3>
                <ul className="flex flex-col gap-1 max-w-fit rounded-xl text-white-smoke">
                  {Details.production_countries.map((country) => (
                    <li key={country.name}>◟{country.name} </li>
                  ))}
                </ul>
              </div>
            )}

            {Details.production_companies.length > 0 && (
              <div className="border border-grayish-blue border-opacity-30 rounded-lg max-w-fit p-2">
                <h3 className="mb-1 font-semibold">Production companies</h3>
                <ul className="flex flex-col gap-1 max-w-fit rounded-xl text-white-smoke">
                  {Details.production_companies.map((country) => (
                    <li key={country.id}>◟{country.name} </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </article>
      ) : null}

      <RedAnchorTag linkTo={Details.homepage} label="Official website" />
    </article>
  );
};
