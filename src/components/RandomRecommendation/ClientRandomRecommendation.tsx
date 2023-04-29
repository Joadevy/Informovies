"use client";

import { MovieDetails, TvDetails } from "@/utils/types";
import React, { useState } from "react";
import ViewMedia from "../SectionMedia/ViewMedia/ViewMedia";

type Props = {
  randomMedia: (TvDetails | MovieDetails)[];
};

const ClientRandomRecommendation = ({ randomMedia }: Props) => {
  const [viewRandom, toggleViewRandom] = useState(false);
  const [media, setMedia] = useState<TvDetails | MovieDetails>();

  const changeMovie = () => {
    if (!viewRandom) toggleViewRandom(true);
    return setMedia(
      randomMedia.length > 1 ? randomMedia.pop()! : randomMedia[0]!
    );
  };

  console.log(randomMedia.length);

  return (
    <>
      <header className="flex flex-col gap-2 items-center mb-3">
        <h2 className="text-2xl text-white-smoke">
          Nothing to watch? Get a recommendation!
        </h2>
        <button
          onClick={() => changeMovie()}
          className={
            `border rounded-lg w-5/12 p-2 bg-red text-white-smoke 
      ` + (randomMedia.length > 1 ? "" : "hidden")
          }
        >
          <p>{viewRandom ? "Give me another" : "View random movie"}</p>
        </button>
      </header>
      {viewRandom && (
        <div className="w-2/12 relative self-center text-white-smoke">
          <ViewMedia media={media!} showDetails={false} />
        </div>
      )}
    </>
  );
};

export default ClientRandomRecommendation;
