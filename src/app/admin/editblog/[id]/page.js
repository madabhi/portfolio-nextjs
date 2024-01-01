"use client";
import React, { useEffect, useState } from "react";
import MarkdownEditor from "@uiw/react-markdown-editor";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const mdStr = `# This is a H1 \n## This is a H2 \n###### This is a H6`;
const { useRouter } = require("next/navigation");

// ------------------------WRITEBLOG PAGE------------------------

const WriteBlog = ({ params }) => {
  const router = useRouter();
  const successNotify = () => toast.success("Blog Updated");
  const failedNotify = () => toast.warn("Could not update blog");
  const deleteNotify = () => toast.error("Blog Deleted");
  const fetchFailed = () => toast.error("No Blog with this Name");

  const [markdown, setMarkdown] = useState(mdStr);
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");
  const [uniqueId, setUniqueId] = useState(params.id);

  const id = params.id;

  const deletePost = async () => {
    try {
      const response = await fetch("/api/blog", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _id: uniqueId,
        }),
      });

      if (response.ok) {
        if (response.status === 200) {
          // Notify only if the delete operation is successful
          deleteNotify();
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
      console.error("Error deleting blog:", error.message);
      failedNotify();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/blog", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _id: uniqueId,
          title,
          tag,
          content: markdown,
        }),
      });
      console.log(response);
      if (response.ok) {
        if (response.status === 200) {
          successNotify();
          setMarkdown("");
          setTitle("");
          setTag("");
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
      console.error("Error publishing blog:", error.message);
      failedNotify();
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/post?id=${id}`);
      const blog = await response.json();
      if (blog.error) {
        fetchFailed();
        setTimeout(() => {
          router.push("/admin");
        }, 1500);
      }
      setTitle(blog.title);
      setUniqueId(blog._id);
      setTag(blog.tag);
      setMarkdown(blog.content);
    };
    fetchData();
  }, []);

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
              className="px-4 py-2 bg-dark text-white rounded-lg mb-5"
              type="submit"
            >
              Publish
            </button>
          </div>
        </div>
      </form>
      <button
        className="px-4 py-2 bg-red-600 text-white rounded-lg mb-5"
        onClick={deletePost}
      >
        Delete
      </button>
    </>
  );
};

export default WriteBlog;
