"use client";

import { MovieDetails, TvDetails } from "@/utils/types";
import React, { useState } from "react";
import ViewMedia from "../SectionMedia/ViewMedia/ViewMedia";

type Props = {
  randomMedia: TvDetails | MovieDetails;
};

const ClientRandomRecommendation = ({ randomMedia }: Props) => {
  const [viewRandom, toggleViewRandom] = useState(false);

  return (
    <div className="text-white border w-2/12">
      ClientRandomRecommendation
      <button
        onClick={() => toggleViewRandom(true)}
        className="border p-2 bg-red
      "
      >
        <p>{viewRandom ? "Give me another" : "View random movie"}</p>
      </button>
      {viewRandom && (
        <div className="">
          <ViewMedia media={randomMedia} showDetails={false} />
        </div>
      )}
    </div>
  );
};

export default ClientRandomRecommendation;
