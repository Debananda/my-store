import User from "@/models/user.schema";
import { NextRequest, NextResponse } from "next/server";
import * as bcrypt from "bcrypt";
import { connectDB } from "@/utils/connect-db";

export async function POST(request: NextRequest) {
  const { userName, password } = await request.json();
  await connectDB();
  const user = await User.findOne({
    userName: userName,
  });
  if (user && bcrypt.compareSync(password, user.password)) {
    return NextResponse.json(
      {
        firstName: user.firstName,
        lastName: user.lastName,
        userName: user.userName,
        email: user.email,
        phone: user.phone,
      },
      { status: 200 }
    );
  }
  return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
}
