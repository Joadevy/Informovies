"use client";
import { useContext } from "react";
import { UserContext } from "@/components/Providers/UserProvider/UserProvider";
import ViewMedia from "@/components/SectionMedia/ViewMedia/ViewMedia";
import SearchBar from "@/components/SearchBar";

export default function ClientBookmarks() {
  const { userData } = useContext(UserContext);
  const bookmarks = Array.from(userData.bookmarks.values());
  return (
    <main className="text-white">
      <div className="mt-10 mb-5 w-3/4 lg:w-4/12 relative">
        <SearchBar />
      </div>
      <h2 className="text-2xl m-2">Bookmarks</h2>
      <div className="grid grid-cols-mobile lg:grid-cols-desktop gap-4 p-3">
        {bookmarks.map((media) => (
          <ViewMedia
            key={media.id}
            media={media}
            showDetails={true}
          ></ViewMedia>
        ))}
      </div>
    </main>
  );
}
