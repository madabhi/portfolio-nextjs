"use client";
import React, { useEffect, useState } from "react";
import MarkdownEditor from "@uiw/react-markdown-editor";

const mdStr = `# This is a H1 \n## This is a H2 \n###### This is a H6`;

const WriteBlog = ({ params }) => {
  const [markdown, setMarkdown] = useState(mdStr);
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");
  const [blogId, setBlogId] = useState("");
  const [uniqueId, setUniqueId] = useState("");
  const id = params.id;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/blog", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _id: uniqueId,
          title,
          tag,
          blogId,
          content: markdown,
          date: Date.now().toString(),
        }),
      });

      if (response.ok) {
        alert("Blog Published");
        setMarkdown("");
        setTitle("");
        setTag("");
        setBlogId("");
      } else {
        alert("Error Occurred");
      }
    } catch (error) {
      console.error("Error publishing blog:", error.message);
      alert("Error Occurred");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/post?id=${id}`);
      const blog = await response.json();
      setTitle(blog.title);
      setUniqueId(blog._id);
      setTag(blog.tag);
      setBlogId(blog.blogId);
      setMarkdown(blog.content);
    };
    fetchData();
  }, []);

  return (
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
  );
};

export default WriteBlog;
