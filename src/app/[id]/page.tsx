import {
  type MovieDetails as IMovieD,
  type TvDetails as ITVD,
} from "@/utils/types";
import Image from "next/image";
import { getApiURL, getImageURL, getStars } from "@/utils/helpers";
import { Suspense } from "react";
import Loading from "./loading";
import TvDetails from "@/components/Details/TvDetails";
import MovieDetails from "@/components/Details/MovieDetails";

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
  const idMedia = getId(params.id);
  const Details = await getData(`${typeMedia}/${idMedia}`);
  console.log(Details);

  return (
    <main className="text-white flex gap-10 w-full min-h-screen lg:pr-10">
      <Suspense fallback={<Loading />}>
        <div className="self-center h-[400px] w-[250px] lg:h-[500px] lg:w-[350px] relative">
          <Image
            className=" rounded-t-xl lg:rounded-xl lg:backface-hidden"
            src={getImageURL(Details.poster_path, 500)}
            sizes={`25vw`}
            fill
            alt=""
          />
        </div>
      </Suspense>

      {"number_of_seasons" in Details ? (
        <TvDetails Details={Details} />
      ) : (
        <MovieDetails Details={Details} />
      )}
    </main>
  );
}
