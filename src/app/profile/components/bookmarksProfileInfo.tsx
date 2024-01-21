import { db } from "@/backend/db/turso";
import React from "react";
import ProfileInfoCard from "./ProfileInfoCard";

const GetTotalBookmarksOf = async ({ userEmail }: { userEmail: string }) => {
  const totalBookmarks = await db.execute(
    "SELECT COUNT(*) FROM bookmarks WHERE user_id = ?"
  );
  return totalBookmarks;
};

export const RegisterDateInformation = async ({
  userEmail,
}: {
  userEmail: string;
}) => {
  const email = userEmail.replace(/'/g, "''");
  const registerDateResult = await db.execute(
    `SELECT registerDate FROM User WHERE email == '${email}'`
  );

  const registerDate = registerDateResult.rows[0][0] as string;

  return (
    <ProfileInfoCard
      title="You're an informovier since"
      description={new Date(registerDate).toLocaleString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })}
    />
  );
};

export const BookmarkHistoryInformation = async ({
  userEmail,
}: {
  userEmail: string;
}) => {
  const totalBookmarksResult = await db.execute(
    `SELECT COUNT(*) FROM Bookmark b JOIN User u on (b.userId == u.id) WHERE u.email == '${userEmail}'`
  );

  const totalBookmarks = totalBookmarksResult.rows[0][0] as number;

  return (
    <ProfileInfoCard
      title="Total media liked in your history"
      description={`You have marked ${totalBookmarks} content as liked`}
    />
  );
};
