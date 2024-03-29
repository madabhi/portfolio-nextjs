import { NextResponse } from "next/server";
import ProjectModel from "@/models/ProjectModel";
import connect from "@/db/index";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { storage, app } from "@/utils/firebase";

// ------------------POST METHOD ------------------
export async function POST(req) {
  const data = await req.formData();
  const title = data.get("title");
  const description = data.get("description");
  const category = data.get("category");
  const gitHubLink = data.get("gitHubLink");
  const isFeatured = data.get("isFeatured");
  const image = data.get("image");
  NextResponse.json({ status: 200, isFeatured });
  let date = new Date();
  let projectId = title.replace(/\s/g, "-").toLowerCase();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  projectId = projectId + `-${hours}-${minutes}-${seconds}`;

  const byteImage = await image.arrayBuffer();
  const buffer = Buffer.from(byteImage);

  const imageName = `${projectId}-${image.name.split(" ").join("-")}`;
  const storageRef = ref(storage, imageName);
  const uploadTask = await uploadBytes(storageRef, buffer).then((snapshot) => {
  });
  let projectImage = process.env.DEFAULT_PROJECT_IMAGE;
  const gsReference = ref(storage, storageRef);
  const imageRef = storageRef;
  await getDownloadURL(gsReference)
    .then((url) => {
      projectImage = url;
      // Now you can use this URL to access the file, for example, to display an image in an HTML element
    })
    .catch((error) => {
      // Handle any errors
      console.error("Error getting download URL:", error);
    });

  try {
    await connect();
    const Project = ProjectModel.create({
      title,
      description,
      category,
      gitHubLink,
      imageRef,
      isFeatured,
      projectId,
      projectImage,
    });
    if (Project) {
      return NextResponse.json({
        status: 200,
        success: true,
        message: "Project added successfully",
      });
    } else {
      const desertRef = ref(storage, imageRef);

      deleteObject(desertRef)
        .then(() => {
        })
        .catch((error) => {});

      return NextResponse.json({
        status: 500,
        message: "An error occured",
      });
    }
  } catch (error) {
    console.error(error);
    const desertRef = ref(storage, imageRef);

    deleteObject(desertRef)
      .then(() => {
      })
      .catch((error) => {});

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
      const resp = await ProjectModel.find().sort({
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
  const {
    title,
    description,
    category,
    gitHubLink,
    isFeatured,
    dbId,
    isAchievement,
  } = await req.json();
  console.log(dbId);
  try {
    await connect();
    let date = new Date();
    let projectId = title.replace(/\s/g, "-").toLowerCase();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    projectId = projectId + `-${hours}-${minutes}-${seconds}`;
    const project = await ProjectModel.findOne({ _id: dbId });
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
    project.isAchievement = isAchievement;
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
  const { dbId } = await req.json();
  try {
    const project = await ProjectModel.findOneAndDelete({
      _id: dbId,
    });

    if (!project) {
      return NextResponse.json({
        status: 404,
        message: "Project not found",
      });
    }
    const imageRef = project.imageRef;
    // const blockBlobClient = containerClient.getBlockBlobClient(blobName);

    // await blockBlobClient.delete();
    const desertRef = ref(storage, imageRef);

    // Delete the file
    deleteObject(desertRef)
      .then(() => {
        // File deleted successfully
        console.log("File Deleted");
      })
      .catch((error) => {
        // Uh-oh, an error occurred!
      });

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
