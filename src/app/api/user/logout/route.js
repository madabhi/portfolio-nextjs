import { NextResponse } from "next/server";
export async function GET(res) {
  try {
    const response = NextResponse.json({
      message: "LogOut Successful",
      success: true,
    });
    response.cookies.set("token", "", {
      path: "/",
        httpOnly: true,
      expires: new Date(0),
    });
    return response;
  } catch (err) {
    console.log(err);
    return NextResponse.redirect(new URL("/login", req.url));
  }
}
