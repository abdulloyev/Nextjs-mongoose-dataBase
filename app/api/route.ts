// HTTP METHODS

import { NextResponse } from "next/server";

export async function GET(req: Request) {
  return await NextResponse.json({ message: "Hello world!" });
}
