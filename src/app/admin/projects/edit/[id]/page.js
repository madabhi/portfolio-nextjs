"use client";
import { set } from "mongoose";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

const AddProject = ({ params }) => {
  const uniqueId = params.id;
  const loadingNotify = () =>
    toast.success("Project Updated", {
      icon: "🚀",
    });
  const errorNotify = () => toast.error("Error uploading project!");
  const failedNotify = () => toast.error("Failed to delete project!");
  const successDeleteNotify = () =>
    toast.error("Project deleted successfully!", { icon: "🚫" });

  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [gitHubLink, setGitHubLink] = useState("");
  const [isFeatured, setIsFeatured] = useState(false);
  const [isAchievement, setIsAchievement] = useState(false);
  const [dbId, setDbId] = useState("");

  const deleteProject = async () => {
    try {
      const response = await fetch("/api/projects", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          dbId,
        }),
      });

      if (response.ok) {
        if (response.status === 200) {
          // Notify only if the delete operation is successful
          successDeleteNotify();

          setTimeout(() => {
            router.push("/admin/projects");
          }, 1500);
        } else {
          failedNotify();
        }
      } else {
        failedNotify();
      }
    } catch (error) {
      console.error("Error deleting blog:", error.message);
      failedNotify();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/projects`, {
        method: "PUT",
        body: JSON.stringify({
          dbId,
          title,
          description,
          category,
          isAchievement,
          gitHubLink,
          isFeatured,
        }),
        headers: {
          "Content-Type": "application/json",
        },
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/projects?id=${uniqueId}`, {
          method: "GET",
        });

        if (response.success) {
          console.log("success");
        }

        const data = await response.json();
        setTitle(data.title);
        setDescription(data.description);
        setCategory(data.category);
        setGitHubLink(data.gitHubLink);
        setIsFeatured(data.isFeatured);
        setIsAchievement(data.isAchievement);
        setDbId(data._id);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  },[]);

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
                value={title}
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
                value={gitHubLink}
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
                  value={category}
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
                    checked={isFeatured}
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
                    checked={isAchievement}
                    onChange={() => {
                      setIsAchievement(!isAchievement);
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="mt-4">
              <textarea
                placeholder="Project Description"
                value={description}
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
        <button
          className="bg-red-500  mt-4 p-1 rounded-md  font-medium text-light  "
          onClick={deleteProject}
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default AddProject;
