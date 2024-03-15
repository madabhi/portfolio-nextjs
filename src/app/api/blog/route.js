import connect from "@/db";
import Blog from "@/models/Blog";
import { model } from "mongoose";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { title, tag, content } = await req.json();
    await connect();
    let date = new Date();
    let blogId = title.replace(/\s/g, "-").toLowerCase();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    blogId = blogId + `-${hours}-${minutes}-${seconds}`;
    blogId = blogId.replace(/\?/g, "-");
    await Blog.create({ blogId, title, tag, content, date });
    return NextResponse.json({
      title,
      tag,
      content,
      date,
      blogId,
      status: 200,
      success: true,
    });
  } catch (err) {
    return NextResponse.json({
      error: "Internal Server Error",
      success: false,
    });
  }
}

export async function GET(req) {
 try {

   const resp = await Blog.find(
     {},
     { title: 1, _id: 1, blogId: 1, date: 1 }
   ).sort({ date: -1 });

   return NextResponse.json(resp, { status: 200 });
 } catch (error) {
   console.error("Error fetching blogs:", error);
   return NextResponse.json(
     { error: "Internal Server Error" },
     { status: 500 }
   );
 }
}

export async function PUT(req) {
  const { _id, title, tag, content } = await req.json();

  let date = new Date();
  let blogId = title.replace(/\s/g, "-").toLowerCase();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  blogId = blogId + `-${hours}-${minutes}-${seconds}`;
  blogId = blogId.replace(/\?/g, "-");

  try {
    await connect();

    const existingBlog = await Blog.findById(_id);

    if (!existingBlog) {
      return NextResponse.json({
        error: "Blog not found",
        success: false,
        status: 404,
      });
    }

    // Update the blog fields
    if (existingBlog.title != title) {
      existingBlog.title = title;
      existingBlog.tag = tag;
      existingBlog.content = content;
      existingBlog.blogId = blogId;
    } else {
      existingBlog.title = title;
      existingBlog.tag = tag;
      existingBlog.content = content;
    }

    // Save the updated blog
    await existingBlog.save();
    return NextResponse.json({
      message: "Successfull",
      status: 200,
      success: true,
    });
  } catch (error) {
    console.error("Error updating blog:", error);
    return NextResponse.json({ error: "Internal Server Error", status: 500 });
  }
}

export async function DELETE(req) {
  const { _id } = await req.json();
  try {
    await connect();
    const existingBlog = await Blog.deleteOne({ _id });
    if (!existingBlog) {
      return NextResponse.json({
        error: "Blog not found",
        success: false,
        status: 404,
      });
    }
    return NextResponse.json({
      message: "Successfull",
      status: 200,
      success: true,
    });
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error", status: 500 });
  }
}
