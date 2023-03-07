"use client";

import IconBookmarks from "@/components/Icons/IconBookmark";
import { UserContext } from "@/components/Providers/UserProvider/UserProvider";
import { IMedia } from "@/utils/types";
import { useContext, useState } from "react";

type Props = {
  media: IMedia;
};

const ButtonBookmark = ({ media }: Props) => {
  const { userData, toggleMedia } = useContext(UserContext);
  const [isBookmarked, setBookmarked] = useState(
    userData.bookmarks.has(media.id)
  );

  const handleBookmark = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setBookmarked(!isBookmarked);
    toggleMedia(media);
  };

  console.log(userData);

  return (
    <button
      onClick={handleBookmark}
      className="absolute flex items-center justify-center top-2 right-3 z-10 rounded-full bg-semi-dark-blue w-7 h-7"
    >
      <IconBookmarks isBookmarked={isBookmarked} />
    </button>
  );
};

export default ButtonBookmark;
