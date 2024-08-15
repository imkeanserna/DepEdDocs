import { NextRequest, NextResponse } from "next/server";
import db from "@repo/db/client";

export async function POST(req: NextRequest) {
  const body = await req.json();

  console.log(body);
  try {
    const result = await db.user.create({
      data: {
        name: "asdasd",
        email: "test@gmail.com",
        password: "test",
        isAdmin: true,
      },
    });
    console.log(result);
    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
}
