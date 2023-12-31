-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Bookmark" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "mediaId" INTEGER NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "userId" TEXT NOT NULL,
    "overview" TEXT,
    "title" TEXT,
    "imageUrl" TEXT,
    "voteAverage" INTEGER,
    "dateReleased" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "typeMediaId" INTEGER NOT NULL,
    CONSTRAINT "Bookmark_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Bookmark_typeMediaId_fkey" FOREIGN KEY ("typeMediaId") REFERENCES "TypeMedia" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Bookmark" ("active", "createdAt", "dateReleased", "id", "imageUrl", "mediaId", "overview", "title", "typeMediaId", "userId", "voteAverage") SELECT "active", "createdAt", "dateReleased", "id", "imageUrl", "mediaId", "overview", "title", "typeMediaId", "userId", "voteAverage" FROM "Bookmark";
DROP TABLE "Bookmark";
ALTER TABLE "new_Bookmark" RENAME TO "Bookmark";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
