"use client";
import { set } from "mongoose";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import AdminNav from "@/components/AdminNav/AdminNav";

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
  const [dbId, setDbId] = useState("");

  const deleteProject = async () => {
    try {
      const response = await fetch("/api/achievements", {
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
            router.push("/admin/achievements");
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
      const response = await fetch(`/api/achievements`, {
        method: "PUT",
        body: JSON.stringify({
          dbId,
          title,
          description,
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

      setTimeout(() => {
        router.push("/admin/achievements");
      }, 1500);
    } catch (error) {
      errorNotify();
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/achievements?id=${uniqueId}`, {
          method: "GET",
        });

        if (response.success) {
        }

        const data = await response.json();
        setTitle(data.title);
        setDescription(data.description);

        setDbId(data._id);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <ToastContainer />
      <AdminNav />
      <div className="p-1  md:px-0 mb-2">
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
              <textarea
                placeholder="Project Description"
                value={description}
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
