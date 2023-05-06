"use client";

import { MovieDetails, TvDetails } from "@/utils/types";
import React, { useState } from "react";
import ViewMedia from "../SectionMedia/ViewMedia/ViewMedia";
import getData from "lib/getData";

type Props = {
  randomMedia: (TvDetails | MovieDetails)[];
  mediaToRecommend: string;
};

const moreMediaClientSide = async (mediaToRecommend: string) => {
  const totalPages = 499; // That's the maximum according to the API docs (the max is 500 but maybe this would be safer)
  const randomPage = Math.floor(Math.random() * totalPages) + 1;
  const data = await getData<TvDetails | MovieDetails>(
    `discover/${mediaToRecommend}/`,
    "&sort_by=popularity.desc&page=" + randomPage
  );
  return data[0];
};

const ClientRandomRecommendation = ({
  randomMedia,
  mediaToRecommend,
}: Props) => {
  const [viewRandom, toggleViewRandom] = useState(false);
  const [media, setMedia] = useState<TvDetails | MovieDetails>();

  const changeMovie = async () => {
    if (!viewRandom) toggleViewRandom(true);
    if (randomMedia.length >= 1) return setMedia(randomMedia.pop());
    const moreMedia = await moreMediaClientSide(mediaToRecommend);
    if (moreMedia) return setMedia(moreMedia);
  };

  return (
    <>
      <header className="flex flex-col gap-2 items-center mb-6 lg:mb-4">
        <h2 className="p-2 lg:p-0 text-2xl text-white-smoke">
          Nothing to watch? Get a recommendation!
        </h2>
        <button
          onClick={() => changeMovie()}
          className={`border rounded-lg w-5/12 p-2 bg-red text-white-smoke`}
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
          <ViewMedia media={media!} showDetails={false} />
        </div>
      )}
    </>
  );
};

export default ClientRandomRecommendation;
