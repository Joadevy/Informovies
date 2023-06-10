"use client";

import IconBookmarks from "@/components/Icons/IconBookmark";
import { UserContext } from "@/components/Providers/UserProvider/UserProvider";
import { MovieDetails, TvDetails } from "@/utils/types";
import { useContext, useState } from "react";

type Props = {
  media: MovieDetails | TvDetails;
};

const ButtonBookmark = ({ media }: Props) => {
  const { userData, toggleMedia } = useContext(UserContext);
  const [isBookmarked, setBookmarked] = useState(
    userData.bookmarks.has(media.id)
  );

  const handleBookmark = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();
    setBookmarked(!isBookmarked);
    toggleMedia(media);
  };

  return (
    <button
      onClick={handleBookmark}
      className="absolute flex items-center justify-center top-2 right-2 z-10 rounded-full bg-dark-blue lg:bg-semi-dark-blue border border-grayish-blue w-7 h-7 hover:opacity-50 transition-opacity"
    >
      <IconBookmarks isBookmarked={isBookmarked} />
    </button>
  );
};

export default ButtonBookmark;
