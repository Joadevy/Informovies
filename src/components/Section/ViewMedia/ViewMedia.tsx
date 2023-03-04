import { getImageURL } from "@/utils/helpers";
import React from "react";
import Image from "next/image";

import type { Media } from "../Section";

type props = {
  media: Media;
  sizeImages?: number;
};

const ViewMedia = ({ media, sizeImages = 200 }: props) => {
  return (
    <div className={`border-2 border-white flex-grow flex flex-col flex-wrap`}>
      <p>{media.title ?? media.name}</p>
      <Image
        src={getImageURL(media.poster_path, sizeImages)}
        width={sizeImages}
        height={sizeImages}
        alt=""
      />
    </div>
  );
};

export default ViewMedia;
