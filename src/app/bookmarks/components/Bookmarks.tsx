import { db } from "@/backend/db/turso";
import { Bookmark } from "@/utils/types";
import ViewServerBookmark from "./ViewServerBookmark";

export default async function Bookmarks({ email }: { email: string }) {
  const resultSet = await db.execute(
    `SELECT * FROM Bookmark JOIN typeMedia on (Bookmark.typeMediaId = typeMedia.id)  JOIN User on (Bookmark.userId = User.id)  WHERE Bookmark.active AND email = '${email}'`
  );

  const userBookmarks = resultSet.rows as unknown as Bookmark[];

  return (
    <div className="grid grid-cols-mobile lg:grid-cols-desktop gap-4 p-3">
      {userBookmarks.map((media) => (
        <ViewServerBookmark
          key={media.imageUrl}
          media={media}
          showDetails={true}
        ></ViewServerBookmark>
      ))}
    </div>
  );
}
