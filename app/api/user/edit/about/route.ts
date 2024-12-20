import { auth } from "@auth";
import connectDB from "@lib/db";
import User from "@models/User";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest) {
  const session = await auth();
  const formData = await request.formData();

  if (!session?.user?.id) {
    return NextResponse.json({ message: "Unauthorized, no session" }, { status: 401 });
  }

  await connectDB();

  const about = formData.get("about") as string;

  if (!about) {
    return NextResponse.json({ message: "Name is required field." }, { status: 400 });
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      session.user.id,
      {
        about: about,
      },
      {
        new: true,
        strict: false,
        timestamps: false,
      }
    );

    return NextResponse.json({ user: updatedUser }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: `Internal Server Error ${error}` }, { status: 500 });
  }
}
