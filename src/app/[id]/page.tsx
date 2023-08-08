import {
  type MovieDetails as IMovieD,
  type TvDetails as ITVD,
} from "@/utils/types";
import { getApiURL } from "@/utils/helpers";
import TvDetails from "@/components/Details/TvDetails";
import MovieDetails from "@/components/Details/MovieDetails";
import VideoComponent from "@/components/Details/VideoComponent";
import CastComponent from "@/components/Details/CastComponent";
import SwipeSection from "@/components/SwipeSection";
import PosterImage from "./PosterImage";

const getId = (pathname: String) => {
  const id = pathname.match(/%3D(\d+)/g)?.[0];
  if (id) return +id.substring(3);
  throw new Error("Error obtaining the id of the media content");
};

const getMediaType = (pathname: String) => {
  const type = pathname.match(/[a-z][A-Z]+/gi)?.[0];
  if (type!.length > 0) return type as string;
  throw new Error("Error obtaining the type of the media content");
};

type Props = {
  params: {
    id: string;
  };
};

const getData = async (
  path: string,
  optional?: string
): Promise<IMovieD | ITVD> => {
  const response = await fetch(getApiURL(path, optional), {});
  if (!response.ok) throw new Error(`Error while fetching ${path}`);

  const results = await response.json();
  return results;
};

export default async function Media({ params }: Props) {
  const typeMedia = getMediaType(params.id);
  // console.log(params);
  const idMedia = getId(params.id);
  const path = `${typeMedia}/${idMedia}`;
  const Details = await getData(path);

  return (
    <>
      <main className="text-white flex flex-col lg:gap-10">
        <section className="flex flex-col lg:flex-row lg:gap-10 w-full min-h-screen lg:pr-10 relative">
          {Details.poster_path && Details.backdrop_path ? (
            <div className="self-center h-[30vh] w-full sm:w-[450px] lg:h-[500px] lg:w-[350px] relative">
              <PosterImage Details={Details} />
            </div>
          ) : null}

          {"number_of_seasons" in Details ? (
            <TvDetails Details={Details} />
          ) : (
            <MovieDetails Details={Details} />
          )}
        </section>

        <section className="flex flex-col my-10 lg:my-0 lg:flex-row items-center justify-around gap-5 lg:gap-2 p-2 lg:p-0">
          {/* @ts-expect-error Server Component */}
          <VideoComponent endpoint={path} />
          {/* @ts-expect-error Server Component */}
          <CastComponent path={path} />
        </section>

        {/* @ts-expect-error Server Component */}
        <SwipeSection
          url={{
            path: `${typeMedia}/${idMedia}/recommendations`,
            optional: `&page=1`,
          }}
          title={"More that maybe you would like based on this content"}
          showMediaType={true}
        />
      </main>
    </>
  );
}
