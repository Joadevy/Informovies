"use server";

import { getServerSession } from "next-auth";
import { db } from "@/backend/db/turso";
import { Bookmark } from "@/utils/types";
import { authOptions } from "@/utils/authOptions";
import { revalidatePath } from "next/cache";

export const toggleMediaAction = async (media: Bookmark) => {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) return;

  const resultSet = await db.execute(
    `SELECT mediaId FROM Bookmark JOIN User on (Bookmark.userId = User.id)  WHERE Bookmark.active AND email = '${session.user.email}'`
  );

  const userBookmarksIds = resultSet.rows.map(
    (row) => row.mediaId
  ) as unknown as [Bookmark["mediaId"]];

  if (userBookmarksIds.includes(media.mediaId)) {
    // if is an actual bookmark, mark it as inactive
    const { mediaId } = media;

    const resultSet = await db.execute(
      `SELECT id FROM User WHERE email == '${session?.user?.email}'`
    );

    const userId = resultSet.rows[0][0] as string;

    try {
      await db.execute(
        `UPDATE Bookmark SET active = 0 WHERE mediaId = ${mediaId} AND userId = '${userId}'`
      );
    } catch (error) {
      console.log("error: ", error);
    }
  } else {
    // if is not an actual bookmark, add it to the database
    const resultTypeMediaSet = db.execute(
      `SELECT id FROM typeMedia WHERE name = '${media.name.toLowerCase()}'`
    );

    const resultUserSet = db.execute(
      `SELECT id FROM User WHERE email == '${session.user.email}'`
    );

    const [TypeMediaSet, UserSet] = await Promise.all([
      resultTypeMediaSet,
      resultUserSet,
    ]);

    const userId = UserSet.rows[0][0] as string;
    const typeMediaId = TypeMediaSet.rows[0][0] as string;

    try {
      const escapedOverview = media.overview?.replace(/'/g, "''");
      const escapedTitle = media.title?.replace(/'/g, "''");

      await db.execute(
        `INSERT INTO Bookmark (id, mediaId, active, userId, overview, title, imageUrl, typeMediaId, voteAverage, dateReleased) VALUES ('${crypto.randomUUID()}', '${
          media.mediaId
        }', 1, '${userId}', '${escapedOverview}', '${escapedTitle}', '${
          media.imageUrl
        }', ${typeMediaId}, ${media.voteAverage}, '${media.dateReleased}')`
      );
    } catch (error) {
      console.log("error: ", error);
    }
  }

  revalidatePath("/bookmarks");
  revalidatePath("/movies");
};
