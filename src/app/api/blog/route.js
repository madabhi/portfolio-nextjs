import connect from "@/db";
import Blog from "@/models/Blog";
import { model } from "mongoose";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { title, tag, content, date, blogId } = await req.json();
  await connect();
  await Blog.create({ blogId, title, tag, content, date });
  return NextResponse.json({ title, tag, content, date }, { status: 200 });
}
export async function GET(req) {
  // const { title, tag, content, date } = await req.json();
  // await connect();
  const resp = await Blog.find();
  return NextResponse.json(resp, { status: 200 });
}

export async function PUT(req) {
  const { _id, title, tag, content, date } = await req.json();

  try {
    await connect();

    const existingBlog = await Blog.findById(_id);

    if (!existingBlog) {
      return NextResponse.json({ message: "Blog not found" }, { status: 404 });
    }

    // Update the blog fields
    existingBlog.title = title;
    existingBlog.tag = tag;
    existingBlog.content = content;
    existingBlog.date = date;

    // Save the updated blog
    await existingBlog.save();
    return NextResponse.redirect(new URL('/admin', req.url))
  } catch (error) {
    console.error("Error updating blog:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
