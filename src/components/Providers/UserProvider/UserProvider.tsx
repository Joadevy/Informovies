"use client";

import { Bookmark, type UserContext as User } from "@/utils/types";
import { useSession } from "next-auth/react";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext<GlobalUserContext>({
  userData: { bookmarks: new Set() },
  toggleMediaClient: () => {},
});

type Props = {
  children: React.ReactNode;
};

type GlobalUserContext = {
  userData: User;
  toggleMediaClient: (_: Bookmark["mediaId"]) => void;
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

  useEffect(() => {
    const fetchBookmarks = async () => {
      const MediaIdOfBookmarks = await getBOOKMARKS();
      setUserData({
        bookmarks: MediaIdOfBookmarks ? new Set(MediaIdOfBookmarks) : new Set(),
      });
    };

    fetchBookmarks();
  }, []);

  const toggleMediaClient = async (mediaId: Bookmark["mediaId"]) => {
    const newUserData = structuredClone(userData);
    if (newUserData.bookmarks.has(mediaId))
      newUserData.bookmarks.delete(mediaId);
    else newUserData.bookmarks.add(mediaId);

    setUserData(newUserData);
  };

  return (
    <UserContext.Provider value={{ userData, toggleMediaClient }}>
      {children}
    </UserContext.Provider>
  );
}
