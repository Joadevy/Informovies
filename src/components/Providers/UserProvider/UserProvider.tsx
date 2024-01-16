"use client";

import { Bookmark, type UserContext as User } from "@/utils/types";
import { useSession } from "next-auth/react";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext<GlobalUserContext>({
  userData: { bookmarks: new Set() },
  toggleMedia: () => {},
});

type Props = {
  children: React.ReactNode;
};

type GlobalUserContext = {
  userData: User;
  toggleMedia: (_: Bookmark) => void;
};

const getBOOKMARKS = async () => {
  const {
    data: userBookmarks,
  }: {
    data: [
      {
        mediaId: Bookmark["mediaId"];
      }
    ];
    status: number;
  } = await fetch("/api/bookmarks").then((res) => res.json());

  return userBookmarks.map((bookmark) => bookmark.mediaId);
};

export default function UserProvider({ children }: Props) {
  const [userData, setUserData] = useState<User>({
    bookmarks: new Set(),
  });
  const session = useSession();

  useEffect(() => {
    const fetchBookmarks = async () => {
      const MediaIdOfBookmarks = await getBOOKMARKS();
      setUserData({
        bookmarks: MediaIdOfBookmarks ? new Set(MediaIdOfBookmarks) : new Set(),
      });
    };

    fetchBookmarks();
  }, [session]);

  const toggleMedia = async (media: Bookmark) => {
    const newUserData = structuredClone(userData);
    if (newUserData.bookmarks.has(media.mediaId)) {
      newUserData.bookmarks.delete(media.mediaId);
      await fetch(`/api/bookmarks`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ mediaId: media.mediaId, active: 0 }),
        cache: "no-store",
      });
    } else {
      newUserData.bookmarks.add(media.mediaId);
      await fetch(`/api/bookmarks`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...media, active: 1 }),
        cache: "no-store",
      });
    }
    setUserData(newUserData);
  };

  return (
    <UserContext.Provider value={{ userData, toggleMedia }}>
      {children}
    </UserContext.Provider>
  );
}
