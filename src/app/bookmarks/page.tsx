"use client";
import { useContext } from "react";
import { UserContext } from "@/components/Providers/UserProvider/UserProvider";
import ViewMedia from "@/components/SectionMedia/ViewMedia/ViewMedia";

export default function Bookmarks() {
  const { userData } = useContext(UserContext);
  const bookmarks = Array.from(userData.bookmarks.values());
  return (
    <main className="text-white">
      <h2 className="text-2xl m-2">Bookmarks</h2>
      <div className="grid grid-cols-mobile lg:grid-cols-desktop gap-4 p-3">
        {bookmarks.map((media) => (
          <ViewMedia key={media.id} media={media}></ViewMedia>
        ))}
      </div>
    </main>
  );
}
