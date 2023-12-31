import User from "@/models/UserModel";
import connect from "@/db";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req) {
  const { email, password } = await req.json();

  try {
    await connect();
    const user = await User.findOne({ email: email }).exec();

    console.log("User value " + user);

    if (!user) {
      return NextResponse.json({
        message: "Invalid Credentials",
        success: false,
      });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json({
        message: "Invalid Credentials",
        success: false,
      });
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    const response = NextResponse.json({ message: "Success", success: true });
    response.cookies.set("token", token, {
      path: "/",
      httpOnly: true,
    });
    return response;
  } catch (err) {
    console.log(err);
    return NextResponse.json({
      message: "Invalid Credentials",
      success: false,
    });
  }
}
