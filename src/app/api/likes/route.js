import Blog from "@/models/Blog";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { blogId } = await req.json();

  try {
    const blog = await Blog.findOne({ _id: blogId });

    if (!blog) {
      return NextResponse.error("Error");
    }

    blog.likes += 1;

    await blog.save();
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.error(error.message);
  }
}

export async function DELETE(req) {
  // decrement likes form Blog Model.
  const { blogId } = await req.json();
  try {
    const blog = await Blog.findOne({ _id: blogId });

    if (!blog) {
      return NextResponse.error("Error");
    }

    blog.likes -= 1;

    await blog.save();
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.error(error.message);
  }
}
