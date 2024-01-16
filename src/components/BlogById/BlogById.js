"use client";
import { useEffect, useState } from "react";
import React from "react";
import { createRoot } from "react-dom/client";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useRouter } from "next/navigation"; // Corrected import for Next.js router
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BlogById = ({ id }) => {
  const router = useRouter();
  const fetchFailed = () => toast.error("No Blog with this Name");
  const [markdown, setMarkdown] = useState("Loading...");
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");
  const [formattedDate, setFormattedDate] = useState("");
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

  return (
    <>
      <ToastContainer />
      <div className="flex md:justify-center px-4 md:p-0">
        <div className="md:w-[700px] flex flex-col font-medium w-full">
          <div>
            <h1 className="text-[28px] md:text-[48px] md:leading-tight font-bold">
              {title}
            </h1>
            <div className="flex gap-4 mb-3 items-center">
              <span
                className="font-semibold bg-gray-400 text-light rounded-md w-auto text-center text-sm p-1"
                style={{ width: `${tag.length * 10 + 10}px` }}
              >
                {tag}
              </span>
              <span>
                <p className="text-sm">{formattedDate}</p>
              </span>
            </div>
            <hr className="mb-5" />
            <Markdown remarkPlugins={[remarkGfm]} className="prose mb-8 ">
              {markdown}
            </Markdown>
            {title && <h1 className="mb-5">Thank you for reading 😁.</h1>}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogById;
