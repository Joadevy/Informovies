import { MovieDetails, TvDetails } from "@/utils/types";
import Image from "next/image";
import { getApiURL, getImageURL, getStars } from "@/utils/helpers";
import { Suspense } from "react";
import Loading from "./loading";

const getId = (pathname: String) => {
  const id = pathname.match(/%3D(\d+)/g)?.[0];
  console.log(id);
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
): Promise<MovieDetails | TvDetails> => {
  const response = await fetch(getApiURL(path, optional), {});
  if (!response.ok) throw new Error(`Error while fetching ${path}`);

  const results = await response.json();
  return results;
};

export default async function Media({ params }: Props) {
  const typeMedia = getMediaType(params.id);
  const idMedia = getId(params.id);
  const Details = await getData(`${typeMedia}/${idMedia}`);
  return (
    <main className="text-white flex gap-10 w-full min-h-screen">
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

      <header className="w-3/4 gap-2 border mt-[11vh]">
        <h1 className="text-4xl font-bold">
          {"name" in Details ? Details.name : Details.title}
        </h1>
        <p className="text-xl">
          <span className="text-2xl">{getStars(Details.vote_average)}</span>{" "}
          {`(${(Details.vote_average / 2).toFixed(2)})`}
        </p>
        <p className="text-white-smoke">{Details.overview}</p>

        <a className="text-white-smoke" href={Details.homepage}>
          Link to the media!
        </a>
        {/* <span class>&#9734;</span> */}
      </header>
    </main>
  );
}
