"use client";

import { MovieDetails, TvDetails } from "@/utils/types";
import React, { useState } from "react";
import ViewMedia from "../SectionMedia/ViewMedia/ViewMedia";

type Props = {
  randomMedia: (TvDetails | MovieDetails)[];
  mediaToRecommend: string;
};

const moreMediaClientSide = async (mediaToRecommend: string) => {
  const totalPages = 100; // The maximum according to the API docs is 500 but the first 100 pages are probably more interesting
  const randomPage = Math.floor(Math.random() * totalPages) + 1;
  const data: {
    status: number;
    data: (TvDetails | MovieDetails)[];
    message: string;
  } = await fetch(
    `/api/proxy/fetchContentAPI?path=discover/${mediaToRecommend}&sort_by=popularity.desc&page=${randomPage}`
  ).then((res) => res.json());

  if (data.status !== 200) {
    throw new Error(`Error while fetching discover/${mediaToRecommend}`);
  }

  return data;
};

const ClientRandomRecommendation = ({
  randomMedia,
  mediaToRecommend,
}: Props) => {
  const [viewRandom, toggleViewRandom] = useState(false);
  const [media, setMedia] = useState<(TvDetails | MovieDetails)[]>(randomMedia);

  const changeMovie = async () => {
    if (!viewRandom) toggleViewRandom(true);
    if (media.length > 1) return setMedia(media.slice(1));
    try {
      const { data } = await moreMediaClientSide(mediaToRecommend);
      if (data.length > 0) return setMedia(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <header className="flex flex-col gap-2 items-center mb-6 lg:mb-4">
        <h2 className="p-2 lg:p-0 text-2xl text-white-smoke">
          Nothing to watch? Get a recommendation!
        </h2>
        <button
          onClick={() => changeMovie()}
          className={`border rounded-lg w-5/12 p-2 bg-red text-white-smoke hover:opacity-70 transition-opacity`}
        >
          <p>
            {viewRandom
              ? "Give me another"
              : `View random ${
                  mediaToRecommend === "tv" ? "tv show" : "movie"
                }`}
          </p>
        </button>
      </header>
      {viewRandom && (
        <div className="w-1/2 lg:w-2/12 relative self-center text-white-smoke">
          <ViewMedia media={media[0]!} showDetails={false} />
        </div>
      )}
    </>
  );
};

export default ClientRandomRecommendation;
