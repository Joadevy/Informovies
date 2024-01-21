import { db } from "@/backend/db/turso";
import { Bookmark } from "@/utils/types";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "@/utils/authOptions";

const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:3001",
  "https://informovies.vercel.app/",
];

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
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

export { GET };
