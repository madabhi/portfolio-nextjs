"use client";
import React, { useState } from "react";
import MarkdownEditor from "@uiw/react-markdown-editor";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import { set } from "mongoose";



const mdStr = `Type your content here`;

const WriteBlog = () => {
  const router = useRouter();
  const successNotify = () => toast.success("Blog Published");
  const failedNotify = () => toast.warn("Could not publish blog");

  const [markdown, setMarkdown] = useState(mdStr);
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");
  const [blogId, setBlogId] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/blog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          tag,
          blogId,
          content: markdown,
          date: Date.now().toString(),
        }),
      });

      if (response.ok) {
        if (response.status === 200) {
          successNotify();
          setMarkdown("");
          setTitle("");
          setTag("");
          setBlogId("");
          setTimeout(() => {
            router.push("/admin");
          }, 1500);
        } else {
          failedNotify();
        }
      } else {
        failedNotify();
      }
    } catch (error) {
      failedNotify();
    }
  };

  return (
    <>
      <ToastContainer />
      <form onSubmit={handleSubmit} method="POST">
        <div className="md:px-40">
          <div className="flex">
            <div className="mb-5 flex md:flex-row flex-col p-5 md:p-0 gap-5">
              <div className="relative max-w-xs">
                <p className="font-medium">Blog Title</p>
                <input
                  type="text"
                  placeholder="Enter Blog Title"
                  required
                  name="title"
                  className="w-full pl-12 pr-3 py-2 text-gray-800 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="relative max-w-xs">
                <p className="font-medium">Blog Tag</p>
                <input
                  type="text"
                  placeholder="Enter Blog Tag"
                  required
                  name="tag"
                  className="w-full pl-12 pr-3 py-2 text-gray-800 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  value={tag}
                  onChange={(e) => setTag(e.target.value)}
                />
              </div>
              <div className="relative max-w-xs">
                <p className="font-medium">Blog ID</p>
                <input
                  type="text"
                  placeholder="Enter Blog Tag"
                  required
                  name="tag"
                  className="w-full pl-12 pr-3 py-2 text-gray-800 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  value={blogId}
                  onChange={(e) => setBlogId(e.target.value)}
                />
              </div>
            </div>
          </div>
          <MarkdownEditor
            value={markdown}
            height="500px"
            onChange={(value, viewUpdate) => setMarkdown(value)}
            enablePreview={true}
            className="mb-10"
          />
          <div className="flex justify-end">
            <button
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg mb-5"
              type="submit"
            >
              Publish
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default WriteBlog;
