import User from "@/models/user.schema";
import { connectDB } from "@/utils/connect-db";
import { NextRequest, NextResponse } from "next/server";
import * as bcrypt from "bcrypt";

export async function POST(request: NextRequest) {
  const { firstName, lastName, userName, email, phone, password } =
    await request.json();
  try {
    await connectDB();
    const hashedPwd = await bcrypt.hash(password, 10);
    const user = await User.create({
      firstName,
      lastName,
      userName,
      email,
      phone,
      password: hashedPwd,
    });
    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error occurred" }, { status: 500 });
  }
}
