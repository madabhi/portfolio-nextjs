import ProjectModel from "@/models/ProjectModel";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const resp = await ProjectModel.find({ isAchievement: false }).sort({
      date: -1,
    });
    return NextResponse.json(resp, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      status: 500,
      message: "An error occured",
    });
  }
}
