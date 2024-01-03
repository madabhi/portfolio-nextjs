"use client";
import { set } from "mongoose";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

const AddProject = () => {
  const loadingNotify = () =>
    toast.success("Project Added", {
      icon: "🚀",
    });
  const errorNotify = () => toast.error("Error uploading project!");

  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [gitHubLink, setGitHubLink] = useState("");
  const [isFeatured, setIsFeatured] = useState(false);
  const [image, setImage] = useState("");
  const [isAchievement, setIsAchievement] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("image", image); // Assuming 'image' is the name of the file input

      formData.append("title", title);
      formData.append("description", description);
      formData.append("category", category);
      formData.append("gitHubLink", gitHubLink);
      formData.append("isFeatured", isFeatured);
      formData.append("isAchievement", isAchievement);

      const response = await fetch("/api/projects", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      loadingNotify();
      setTitle("");
      setDescription("");
      setCategory("");
      setGitHubLink("");
      setIsFeatured(false);

      setTimeout(() => {
        router.push("/admin/projects");
      }, 1500);
    } catch (error) {
      errorNotify();
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="p-1 md:px-40">
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
            <div className="mt-4">
              <label className="text-black" htmlFor="description">
                GitHub Link
              </label>
              <input
                type="text"
                required
                placeholder="Enter the link to your GitHub repository"
                className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1"
                id="description"
                onChange={(e) => {
                  setGitHubLink(e.target.value);
                }}
              />
            </div>
            <div className="mt-4 flex flex-row space-x-2">
              <div className="flex-1">
                <label className="text-black" htmlFor="emotions">
                  Category
                </label>
                <input
                  placeholder="e.g. Web Development, Android, etc."
                  className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1"
                  id="emotions"
                  required
                  type="text"
                  onChange={(e) => {
                    setCategory(e.target.value);
                  }}
                />
              </div>
              <div className="flex-1 flex items-end md:pl-8 md:gap-4">
                <label className="text-black" htmlFor="isFeatured">
                  Featured
                </label>
                <div>
                  <input
                    type="checkbox"
                    name="isFeatured"
                    id="isFeatured"
                    className=""
                    onChange={() => {
                      setIsFeatured(!isFeatured);
                    }}
                  />
                </div>
              </div>
              <div className="flex-1 flex items-end md:pl-8 md:gap-4">
                <label className="text-black" htmlFor="isFeatured">
                  Achievement
                </label>
                <div>
                  <input
                    type="checkbox"
                    name="isFeatured"
                    id="isFeatured"
                    className=""
                    onChange={() => {
                      setIsAchievement(!isAchievement);
                    }}
                  />
                </div>
              </div>
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
                {...(isFeatured ? { required: true } : {})}
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

export default AddProject;
