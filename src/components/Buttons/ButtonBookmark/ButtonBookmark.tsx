"use client";

import IconBookmarks from "@/components/Icons/IconBookmark";
import { UserContext } from "@/components/Providers/UserProvider/UserProvider";
import { MovieDetails, TvDetails } from "@/utils/types";
import { useContext, useEffect, useState } from "react";

type Props = {
  media: MovieDetails | TvDetails;
};

const ButtonBookmark = ({ media }: Props) => {
  const { userData, toggleMedia } = useContext(UserContext);
  const [isBookmarked, setBookmarked] = useState(false);

  useEffect(() => {
    setBookmarked(userData.bookmarks.has(media.id));
  }, [userData.bookmarks]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleBookmark = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();
    setBookmarked(!isBookmarked);
    toggleMedia({
      id: media.id,
      title: "title" in media ? media.title : media.name,
      overview: media.overview,
      imageUrl: media.poster_path ?? media.backdrop_path,
      typeMedia: "title" in media ? "movie" : "tv series",
      voteAverage: media.vote_average,
      dateReleased:
        "title" in media ? media.release_date : media.first_air_date,
    });
  };

  return (
    <button
      onClick={handleBookmark}
      className="absolute flex items-center justify-center top-2 right-2 z-10 rounded-full bg-dark-blue lg:bg-semi-dark-blue border border-grayish-blue w-7 h-7 hover:opacity-50 transition-opacity"
      aria-label="Bookmark this media"
    >
      <IconBookmarks isBookmarked={isBookmarked} />
    </button>
  );
};

export default ButtonBookmark;
