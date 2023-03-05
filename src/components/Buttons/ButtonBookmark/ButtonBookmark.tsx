"use client";

import IconBookmarks from "@/components/Icons/IconBookmark";
import { useState } from "react";

const ButtonBookmark = () => {
  const [isBookmarked, setBookmarked] = useState(false);
  const handleBookmark = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setBookmarked(!isBookmarked);
  };

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
