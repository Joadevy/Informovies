"use client";

import IconBookmarks from "@/components/Icons/IconBookmark";
import { UserContext } from "@/components/Providers/UserProvider/UserProvider";
import { Bookmark } from "@/utils/types";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

type Props = {
  media: Bookmark;
  refreshAfter?: boolean;
};

const ButtonBookmark = ({ media, refreshAfter }: Props) => {
  const { userData, toggleMedia } = useContext(UserContext);
  const [isBookmarked, setBookmarked] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setBookmarked(userData.bookmarks.has(media.mediaId));
  }, [userData.bookmarks]); // eslint-disable-line react-hooks/exhaustive-deps

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
      aria-label="Bookmark this media"
    >
      <IconBookmarks isBookmarked={isBookmarked} />
    </button>
  );
};

export default ButtonBookmark;
