import { getApiURL } from "@/utils/helpers";
import { MovieDetails, TvDetails } from "@/utils/types";
import getData from "lib/getData";
import { NextRequest, NextResponse } from "next/server";

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

export const dynamic = "force-dynamic";
async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const path = searchParams.get("path");
  const optional = searchParams.get("optional");

  if (!path) {
    return NextResponse.json({
      status: 400,
      message: "Path is required",
      data: [],
    });
  }

  const mediaData = await getData<TvDetails | MovieDetails>(
    path,
    optional ?? ""
  );

  return NextResponse.json({ status: 200, data: mediaData, message: "OK" });
}

export { GET };
