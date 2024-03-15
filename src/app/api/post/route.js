import connect from "@/db";
import Blog from "@/models/Blog";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req) {
  const id = req.nextUrl.searchParams.get("id");

  try {
    await connect();
    const blog = await Blog.findOne({ blogId: id });

    if (!blog) {
      return NextResponse.json(
        { error: "Internal Server Error" },
        { status: 500 }
      );
    } else {
      return NextResponse.json(blog, { status: 200 }, { success: true });
    }
  } catch (error) {
    console.error("Error fetching blog:", error.message);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { success: false },
      { status: 500 }
    );
  }
}
