"use client";
import { toggleMediaAction } from "@/backend/actions/actions";
import IconBookmarks from "@/components/Icons/IconBookmark";
import { UserContext } from "@/components/Providers/UserProvider/UserProvider";
import { Bookmark } from "@/utils/types";
import { useContext, useTransition } from "react";

type Props = {
  media: Bookmark;
};

const ButtonBookmark = ({ media }: Props) => {
  const { userData, toggleMediaClient } = useContext(UserContext);
  const isBookmarked = userData.bookmarks.has(media.mediaId);
  const [pending, startTransition] = useTransition();

  return (
    <button
      onClick={() => {
        toggleMediaClient(media.mediaId);
        startTransition(() => {
          toggleMediaAction(media);
        });
      }}
      className="absolute flex items-center justify-center top-2 right-2 z-10 rounded-full bg-dark-blue lg:bg-semi-dark-blue border border-grayish-blue w-7 h-7 hover:opacity-50 transition-opacity"
      aria-label="Bookmark this media"
    >
      <IconBookmarks isBookmarked={isBookmarked} />
    </button>
  );
};

export default ButtonBookmark;
