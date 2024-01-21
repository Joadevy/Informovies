import { db } from "@/backend/db/turso";
import { Bookmark } from "@/utils/types";
import Link from "next/link";
import ViewServerBookmark from "./ViewServerBookmark";

export default async function Bookmarks({ email }: { email: string }) {
  const resultSet = await db.execute(
    `SELECT * FROM Bookmark JOIN typeMedia on (Bookmark.typeMediaId = typeMedia.id)  JOIN User on (Bookmark.userId = User.id)  WHERE Bookmark.active AND email = '${email}'`
  );

  const userBookmarks = resultSet.rows as unknown as Bookmark[];

  return userBookmarks.length > 0 ? (
    <div className="grid grid-cols-mobile lg:grid-cols-desktop gap-4 p-3">
      {userBookmarks.map((media) => (
        <ViewServerBookmark
          key={media.imageUrl}
          media={media}
          showDetails={true}
        ></ViewServerBookmark>
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
  );
}
