import { IMedia } from "@/utils/types";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getApiURL, getImageURL } from "@/utils/helpers";

type Props = {
  idMedia: IMedia["id"];
  typeMedia: IMedia["media_type"];
};

type Details = {
  homepage: string;
  poster_path: string;
};

const getData = async (path: string, optional?: string): Promise<Details> => {
  const response = await fetch(getApiURL(path, optional), {});
  if (!response.ok) throw new Error(`Error while fetching ${path}`);

  const results = await response.json();
  return results;
};

export default function MediaDetails({ idMedia, typeMedia }: Props) {
  const [Details, setDetails] = useState<Details | null>(null);
  // const data = await getData<Details>(`${typeMedia}/${idMedia}`);
  // console.log(data);
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
    <main className="text-white">
      {" "}
      Esta es la media {idMedia} entonces llego la media siendo una {typeMedia}{" "}
      <a href={Details.homepage}>Link to the media!</a>
      <div className="h-[400px] w-[400px] relative">
        <Image
          className="rounded-t-xl lg:rounded-xl lg:backface-hidden"
          src={getImageURL(Details.poster_path, 500)}
          sizes={`25vw`}
          fill
          alt=""
        />
      </div>
      {/* <Image src={data.poster_path} alt=""></Image> */}
    </main>
  );
}
