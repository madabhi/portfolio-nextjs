"use client";
import { useEffect, useState } from "react";
import React from "react";
import { createRoot } from "react-dom/client";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

const Preview = ({ params }) => {
  const [markdown, setMarkdown] = useState("Loading...");
  const [title, settitle] = useState("")
  const [tag, settag] = useState("");
  const id = params.id;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/post?id=${id}`);
        const blog = await response.json();
        console.log(blog);
        setMarkdown(blog.content);
        settitle(blog.title);
        settag(blog.tag);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="flex md:justify-center px-4 md:p-0">
        <div className="md:w-[700px] flex flex-col items-center font-medium">
          <div>
            <h1 className="text-[28px] md:text-[48px] font-bold ">{title}</h1>
            <hr className="mb-5"/>
            <Markdown remarkPlugins={[remarkGfm]} className="prose mb-8">
              {markdown}
            </Markdown>
            {title?<h1>Thank you for reading 😁</h1>:""}
          </div>
        </div>
      </div>
    </>
  );
};

export default Preview;
