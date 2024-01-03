import { db } from "@/backend/db/turso";
import { Bookmark } from "@/utils/types";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";

const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:3001",
  "https://informovies.vercel.app/",
];

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export async function OPTIONS(req: NextRequest) {
  const origin = req.headers.get("origin") ?? "";

  if (!allowedOrigins.includes(origin)) {
    return NextResponse.error();
  }

  corsHeaders["Access-Control-Allow-Origin"] = origin;

  return NextResponse.json({}, { headers: corsHeaders });
}

async function GET() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email)
    return NextResponse.json({ status: 401, data: [] });

  const resultSet = await db.execute(
    `SELECT mediaId FROM Bookmark JOIN typeMedia on (Bookmark.typeMediaId = typeMedia.id) JOIN User on (User.id = Bookmark.userId) WHERE Bookmark.active AND User.email = '${session?.user?.email}'`
  );

  const userBookmarksId = resultSet.rows as unknown as [
    {
      mediaId: Bookmark["mediaId"];
    }
  ];

  return NextResponse.json({ status: 200, data: userBookmarksId });
}

async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    return NextResponse.json({ status: 401, data: [] });
  }

  const {
    mediaId,
    title,
    overview,
    imageUrl,
    name,
    voteAverage,
    dateReleased,
  } = await req.json();

  const resultTypeMediaSet = db.execute(
    `SELECT id FROM typeMedia WHERE name = '${name.toLowerCase()}'`
  );

  const resultUserSet = db.execute(
    `SELECT id FROM User WHERE email == '${session?.user?.email}'`
  );

  const [TypeMediaSet, UserSet] = await Promise.all([
    resultTypeMediaSet,
    resultUserSet,
  ]);

  const userId = UserSet.rows[0][0] as string;
  const typeMediaId = TypeMediaSet.rows[0][0] as string;

  try {
    const escapedOverview = overview.replace(/'/g, "''");
    const escapedTitle = title.replace(/'/g, "''");

    await db.execute(
      `INSERT INTO Bookmark (id, mediaId, active, userId, overview, title, imageUrl, typeMediaId, voteAverage, dateReleased) VALUES ('${crypto.randomUUID()}', '${mediaId}', 1, '${userId}', '${escapedOverview}', '${escapedTitle}', '${imageUrl}', ${typeMediaId}, ${voteAverage}, '${dateReleased}')`
    );
    return NextResponse.json({ status: 200, data: [] });
  } catch {
    return NextResponse.json({ status: 500, data: [] });
  }
}

async function PATCH(req: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    return NextResponse.json({ status: 401, data: [] });
  }

  const { mediaId, active } = await req.json();

  const resultSet = await db.execute(
    `SELECT id FROM User WHERE email == '${session?.user?.email}'`
  );

  const userId = resultSet.rows[0][0] as string;

  try {
    await db.execute(
      `UPDATE Bookmark SET active = ${active} WHERE mediaId = ${mediaId} AND userId = '${userId}'`
    );
    return NextResponse.json({ status: 200, data: [] });
  } catch {
    return NextResponse.json({ status: 500, data: [] });
  }
}

export { GET, POST, PATCH };
