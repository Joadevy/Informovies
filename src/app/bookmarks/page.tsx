import type { Metadata } from "next";
import { db } from "@/backend/db/turso";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
import ViewBookmark from "@/components/SectionMedia/ViewBookmark/ViewBookmark";
import { Bookmark } from "@/utils/types";
import SearchBar from "@/components/SearchBar";
import Link from "next/link";
import { unstable_noStore } from "next/cache";

export const metadata: Metadata = {
  title: "Bookmarks —Informovies",
  description: "The favorite tv shows and movies in one place",
};

export const revalidate = 0;
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export default async function Bookmarks() {
  const session = await getServerSession(authOptions);

  unstable_noStore();
  const resultSet = await db.execute(
    `SELECT * FROM Bookmark JOIN typeMedia on (Bookmark.typeMediaId = typeMedia.id)  JOIN User on (Bookmark.userId = User.id)  WHERE Bookmark.active AND email = '${session?.user?.email}'`
  );

  const userBookmarks = resultSet.rows as unknown as Bookmark[];

  return (
    <main
      className={`text-white min-h-screen ${
        userBookmarks.length > 4 ? "pb-32" : ""
      } border border-transparent`}
    >
      <div className="mt-10 mb-5 w-3/4 lg:w-4/12 relative">
        <SearchBar />
      </div>

      <h2 className="text-2xl m-2">Bookmarks</h2>
      {userBookmarks.length > 0 ? (
        <div className="grid grid-cols-mobile lg:grid-cols-desktop gap-4 p-3">
          {userBookmarks.map((media) => (
            <ViewBookmark
              key={media.mediaId}
              media={media}
              showDetails={true}
            ></ViewBookmark>
          ))}
        </div>
      ) : (
        <p className="italic text-slate-400">
          You don&apos;t have any bookmarks yet, take a look at our{" "}
          <Link
            href="/movies"
            className="underline hover:text-transparent hover:bg-clip-text bg-gradient-to-r hover:from-blue-600 hover:via-green-500 hover:to-indigo-400"
          >
            movies
          </Link>{" "}
          or{" "}
          <Link
            href="/series"
            className="underline hover:text-transparent hover:bg-clip-text bg-gradient-to-r hover:from-blue-600 hover:via-green-500 hover:to-indigo-400"
          >
            tv shows
          </Link>{" "}
          . We guarantee you&apos;ll find something you like!
        </p>
      )}
    </main>
  );
}
