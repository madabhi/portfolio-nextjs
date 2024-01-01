import { NextResponse } from "next/server";
import ProjectModel from "@/models/ProjectModel";
import connect from "@/db/index";
import { writeFile } from "fs/promises";
import { unlink } from "fs/promises";
// ------------------POST METHOD ------------------
export async function POST(req) {
  const data = await req.formData();
  const title = data.get("title");
  const description = data.get("description");
  const category = data.get("category");
  const gitHubLink = data.get("gitHubLink");
  const isFeatured = data.get("isFeatured");
  const image = data.get("image");

  let date = new Date();
  let projectId = title.replace(/\s/g, "-").toLowerCase();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  projectId = projectId + `-${hours}-${minutes}-${seconds}`;

  const byteImage = await image.arrayBuffer();
  const buffer = Buffer.from(byteImage);
  const imagePath = `./public/images/projects/${projectId}+${image.name}`;
  await writeFile(imagePath, buffer);
  const projectImage = imagePath.slice(8);

  try {
    await connect();
    const Project = ProjectModel.create({
      title,
      description,
      category,
      gitHubLink,
      isFeatured,
      projectId,
      projectImage,
    });
    return NextResponse.json({
      status: 200,
      success: true,
      message: "Project added successfully",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      status: 500,
      message: "An error occured",
    });
  }
}

// ------------------GET METHOD ------------------

export async function GET(req) {
  const id = req.nextUrl.searchParams.get("id");

  if (!id) {
    try {
      const resp = await ProjectModel.find().sort({ date: -1 });

      return NextResponse.json(resp, { status: 200 });
    } catch (error) {
      console.error(error);
      return NextResponse.json({
        status: 500,
        message: "An error occured",
      });
    }
  } else {
    try {
      const project = await ProjectModel.findOne({ projectId: id });

      if (!project) {
        return NextResponse.json({
          status: 404,
          message: "Project not found",
        });
      }

      return NextResponse.json(project, { status: 200 });
    } catch (error) {
      console.error(error);
      return NextResponse.json({
        status: 500,
        message: "An error occurred",
      });
    }
  }
}

// ------------------PUT METHOD ------------------
export async function PUT(req) {
  const { title, description, category, gitHubLink, isFeatured, uniqueId } =
    await req.json();
  try {
    await connect();
    const projectImage = `${gitHubLink}/blob/master/projectImage/project.jpg?raw=true`;
    let date = new Date();
    let projectId = title.replace(/\s/g, "-").toLowerCase();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    projectId = projectId + `-${hours}-${minutes}-${seconds}`;
    const project = await ProjectModel.findOne({ projectId: uniqueId });
    if (!project) {
      return NextResponse.json({
        status: 404,
        message: "Project not found",
      });
    }
    project.title = title;
    project.description = description;
    project.category = category;
    project.gitHubLink = gitHubLink;
    project.isFeatured = isFeatured;
    project.projectId = projectId;
    project.projectImage = projectImage;
    await project.save();
    return NextResponse.json({
      status: 200,
      success: true,
      message: "Project updated successfully",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      status: 500,
      message: "An error occured",
    });
  }
}

export async function DELETE(req) {
  const { uniqueId } = await req.json();
  try {
    const project = await ProjectModel.findOneAndDelete({
      projectId: uniqueId,
    });

    if (!project) {
      return NextResponse.json({
        status: 404,
        message: "Project not found",
      });
    }

    const imagePath = `./public/${project.projectImage}`;
    await unlink(imagePath);

    return NextResponse.json({
      status: 200,
      success: true,
      message: "Project and associated image deleted successfully",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      status: 500,
      message: "An error occurred",
    });
  }
}
