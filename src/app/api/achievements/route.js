import { NextResponse } from "next/server";
import AchievementModel from "@/models/AchievementModel";
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
  const image = data.get("image");

  let date = new Date();
  let achievement_id = title.replace(/\s/g, "-").toLowerCase();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  achievement_id = achievement_id + `-${hours}-${minutes}-${seconds}`;

  const byteImage = await image.arrayBuffer();
  const buffer = Buffer.from(byteImage);

  const imageName = `${achievement_id}-${image.name.split(" ").join("-")}`;
  const storageRef = ref(storage, imageName);
  const uploadTask = await uploadBytes(storageRef, buffer).then((snapshot) => {
  });
  let projectImage = process.env.DEFAULT_PROJECT_IMAGE;
  const gsReference = ref(storage, storageRef);
  const imageRef = storageRef;
  await getDownloadURL(gsReference)
    .then((url) => {
      projectImage = url;
    })
    .catch((error) => {
      console.error("Error getting download URL:", error);
    });

  try {
    await connect();
    const Achievememt = AchievementModel.create({
      title,
      achievement_id,
      description,
      image: projectImage,
      date,
      imageRef,
    });
    return NextResponse.json({
      status: 200,
      success: true,
      message: "Achievement added successfully",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      status: 500,
      message: "An error occured",
    });
  }
}

// -----------------------------GET---------
export async function GET(req) {
  const id = req.nextUrl.searchParams.get("id");

  if (!id) {
    try {
      const resp = await AchievementModel.find().sort({
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
      const achievements = await AchievementModel.findOne({
        achievement_id: id,
      });
      if (!achievements) {
        return NextResponse.json({
          status: 404,
          message: "achievements not found",
        });
      }

      return NextResponse.json(achievements, { status: 200 });
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
  const { title, description, dbId } = await req.json();
  try {
    await connect();
    let date = new Date();
    let achievement_id = title.replace(/\s/g, "-").toLowerCase();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    achievement_id = achievement_id + `-${hours}-${minutes}-${seconds}`;
    const achievememt = await AchievementModel.findOne({ _id: dbId });
    if (!achievememt) {
      return NextResponse.json({
        status: 404,
        message: "achievememt not found",
      });
    }
    achievememt.title = title;
    achievememt.description = description;
    achievememt.achievement_id = achievement_id;
    await achievememt.save();
    return NextResponse.json({
      status: 200,
      success: true,
      message: "achievememt updated successfully",
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
    const achievememt = await AchievementModel.findOneAndDelete({
      _id: dbId,
    });

    if (!achievememt) {
      return NextResponse.json({
        status: 404,
        message: "achievememt not found",
      });
    }
    const imageRef = achievememt.imageRef;

    const desertRef = ref(storage, imageRef);

    // Delete the file
    deleteObject(desertRef)
      .then(() => {
      })
      .catch((error) => {});

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
