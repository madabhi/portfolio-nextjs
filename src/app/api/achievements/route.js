import { NextResponse } from "next/server";
import ProjectModel from "@/models/ProjectModel";
export async function GET() {
  try {
    const resp = await ProjectModel.find({ isAchievement: true }).sort({
      date: -1,
    });
    console.log(resp)
    return NextResponse.json(resp, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      status: 500,
      message: "An error occured",
    });
  }
}
