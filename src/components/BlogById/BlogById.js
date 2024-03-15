"use client";
import { useEffect, useState } from "react";
import React from "react";
import { createRoot } from "react-dom/client";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useRouter } from "next/navigation"; // Corrected import for Next.js router
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BlogByIdSkeleton from "../BlogByIdSkeleton/BlogByIdSkeleton";
import { LikeIcon } from "../Icons/Icons";

const BlogById = ({ id }) => {
  const router = useRouter();
  const fetchFailed = () => toast.error("No Blog with this Name");
  const [markdown, setMarkdown] = useState("");
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");
  const [formattedDate, setFormattedDate] = useState("");
  const [isLiked, setisLiked] = useState(false);
  const [noOfLikes, setnoOfLikes] = useState(0);
  // const id = id;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/post?id=${id}`);
        if (!response.ok) throw new Error("Blog fetch failed");

        const blog = await response.json();
        if (blog.error) {
          throw new Error(blog.error);
        }

        setMarkdown(blog.content);
        setTitle(blog.title);
        setTag(blog.tag);
        setnoOfLikes(blog.likes);
        const dateObject = new Date(blog.date);
        const options = { day: "2-digit", month: "short", year: "numeric" };
        setFormattedDate(dateObject.toLocaleDateString("en-IN", options));
      } catch (error) {
        console.error(error.message);
        fetchFailed();

        setTimeout(() => {
          router.push("/blog");
        }, 2000);
      }
    };

    fetchData();
  }, [id]); // Added id as a dependency

  const handleLike = async () => {
    setisLiked(!isLiked); // Toggling the like status

    try {
      let response;
      if (!isLiked) {
        response = await fetch(`/api/likes`, {
          method: "POST", // Corrected: Method should be a string
          body: JSON.stringify({ id }), // Corrected: Body should be stringified JSON
          headers: {
            "Content-Type": "application/json", // Specify JSON content type
          },
        });
        setnoOfLikes(noOfLikes + 1);
      } else {
        response = await fetch(`/api/likes/`, {
          method: "DELETE",
          body: JSON.stringify({ id }),
        });
        setnoOfLikes(noOfLikes - 1);
      }

      if (response.ok) {
        const blog = await response.json();
      } else {
        console.error("Failed to update likes:", response.statusText);
        setisLiked(!isLiked);
      }
    } catch (error) {
      console.error("Error:", error);
      setisLiked(!isLiked);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="flex md:justify-center px-4 md:p-0">
        <div className="md:w-[700px] flex flex-col font-medium w-full">
          <div>
            {title ? (
              <>
                <h1 className="text-[28px] md:text-[48px] md:leading-tight font-bold">
                  {title}
                </h1>
                <div className="flex gap-4 mb-3 items-center">
                  {tag && (
                    <span className="text-sm text-white bg-slate-500 p-1 rounded-lg">
                      {tag}
                    </span>
                  )}
                  <span>
                    <p className="text-sm">{formattedDate}</p>
                  </span>
                  <div
                    className="flex gap-2 items-center cursor-pointer"
                    onClick={handleLike}
                  >
                    <LikeIcon
                      className="w-7"
                      fill={!isLiked ? "none" : "red"}
                    />
                    <span>{noOfLikes} Likes</span>
                  </div>
                </div>
                <hr className="mb-5" />
                <Markdown remarkPlugins={[remarkGfm]} className="prose mb-8 ">
                  {markdown}
                </Markdown>
                <h1 className="mb-5">Thank you for reading 😁.</h1>
              </>
            ) : (
              <>
                <BlogByIdSkeleton />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogById;
