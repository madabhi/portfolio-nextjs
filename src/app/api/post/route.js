import connect from "@/db";
import Blog from "@/models/Blog";
import { model } from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req) {
  console.log(req.nextUrl.searchParams.get("id"));
  const id = req.nextUrl.searchParams.get("id");
  await connect();
  const blog = await Blog.findOne({ blogId: id });
  return NextResponse.json(blog);
}
