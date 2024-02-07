import ProjectModel from "@/models/ProjectModel";
import { NextResponse } from "next/server";
export async function GET() {
  ProjectModel.updateMany(
    { category: { $exists: false } },
    { $set: { category: null } }
  )
    .then((result) => {
      console.log("Documents updated successfully:", result);
    })
    .catch((error) => {
      console.error("Error updating documents:", error);
    });
}
