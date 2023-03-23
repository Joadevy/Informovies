import { IMedia, MovieDetails, TvDetails } from "@/utils/types";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getApiURL, getImageURL, getStars } from "@/utils/helpers";

type Props = {
  idMedia: IMedia["id"];
  typeMedia: IMedia["media_type"];
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

export default function MediaDetails({ idMedia, typeMedia }: Props) {
  const [Details, setDetails] = useState<TvDetails | MovieDetails | null>(null);

  useEffect(() => {
    getData(`${typeMedia}/${idMedia}`).then((res) => setDetails(res));
  }, []);

  if (!Details)
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );

  return (
    <main className="text-white flex gap-10 border w-full min-h-screen">
      <div className="self-center h-[400px] w-[250px] lg:h-[500px] lg:w-[350px] relative">
        <Image
          className=" rounded-t-xl lg:rounded-xl lg:backface-hidden"
          src={getImageURL(Details.poster_path, 500)}
          sizes={`25vw`}
          fill
          alt=""
        />
      </div>
      <header className="w-3/4 gap-2 border mt-[11vh]">
        <h1 className="text-4xl font-bold">
          {"name" in Details ? Details.name : Details.title}
        </h1>
        <p className="text-xl">
          <span className="text-2xl">{getStars(Details.vote_average)}</span>{" "}
          {`(${Details.vote_average / 2})`}
        </p>
        <p className="text-white-smoke">{Details.overview}</p>

        <a className="text-white-smoke" href={Details.homepage}>
          Link to the media!
        </a>
      </header>
      {/* <Image src={data.poster_path} alt=""></Image> */}
    </main>
  );
}
