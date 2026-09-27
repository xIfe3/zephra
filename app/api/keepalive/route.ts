import { NextResponse } from "next/server";
import { pingDatabase } from "@/lib/supabase";

export const dynamic = "force-dynamic";

// Hit daily by Vercel Cron (see vercel.json) so the free Supabase project never pauses.
export async function GET(req: Request) {
  const secret = process.env.CRON_SECRET;
  if (secret && req.headers.get("authorization") !== `Bearer ${secret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const result = await pingDatabase();
  return NextResponse.json(result, { status: result.ok ? 200 : 503 });
}
