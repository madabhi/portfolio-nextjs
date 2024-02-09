"use client";
import { set } from "mongoose";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import AdminNav from "@/components/AdminNav/AdminNav";

const AddAchievement = () => {
  const loadingNotify = () =>
    toast.success("Project Added", {
      icon: "🚀",
    });
  const errorNotify = () => toast.error("Error uploading project!");

  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("image", image); // Assuming 'image' is the name of the file input

      formData.append("title", title);
      formData.append("description", description);
      let fetchUrl = "/api/achievements";

      const response = await fetch(fetchUrl, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      loadingNotify();
      setTitle("");
      setDescription("");

      setTimeout(() => {
        router.push("/admin/achievements");
      }, 1500);
    } catch (error) {
      errorNotify();
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <ToastContainer />
      <AdminNav />
      <div className="p-1 md:px-0 mb-2">
        <form action="" onSubmit={handleSubmit}>
          <div className="mt-4 flex flex-col bg-gray-100 rounded-lg p-4 shadow-sm">
            <h2 className="ai-story-maker-dream-form text-black font-bold text-2xl">
              Add Your Project
            </h2>
            <div className="mt-4">
              <label className="text-black" htmlFor="title">
                Title
              </label>
              <input
                placeholder="Project Title"
                className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1"
                type="text"
                required
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </div>

            <div className="mt-3">
              <label className="text-black" htmlFor="image">
                Project Image: &nbsp;
                <input
                  type="file"
                  name="image"
                  id="image"
                  className=""
                  required
                  accept=".jpg, .jpeg, .png"
                  onChange={(e) => {
                    setImage(e.target.files?.[0]);
                  }}
                />
              </label>
            </div>

            <div className="mt-4">
              <textarea
                placeholder="Project Description"
                className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1 h-48"
                id="story-output"
                defaultValue={""}
                required
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
            </div>
            <div className="flex justify-end md:mt-2">
              <button
                type="submit"
                className="bg-dark text-light p-1 rounded-md"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddAchievement;
