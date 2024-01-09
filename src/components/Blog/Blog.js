"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Markdown from "react-markdown";

const Card = ({ key, item }) => {
  const { title, tag, content, blogId, date } = item;

  const dateObject = new Date(date);

  const options = { day: "2-digit", month: "short", year: "numeric" };

  const formattedDate = dateObject.toLocaleDateString("en-IN", options);

  return (
    <>
      <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow flex flex-col justify-between">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
          {title}
        </h5>
        <span>
          <p className="text-sm">{formattedDate}</p>
        </span>

        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          <Markdown className="">
            {content.length > 10 ? `${content.substring(0, 80)}...` : content}
          </Markdown>
        </p>
        <Link
          href={`/blog/${blogId}`}
          class="inline-flex items-center w-32 px-3 py-2 text-sm font-medium text-center text-white bg-dark rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          Read more
          <svg
            class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </>
  );
};

const BlogHome = () => {
  const [blogData, setblogData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/blog");
      const blog = await response.json();
      setblogData(blog);
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="px-4 md:px-0 mb-4 ">
        <div className="  grid grid-cols-1 h-full md:grid-cols-3 grid-flow-row gap-y-5 gap-x-12">
          {blogData.length > 0
            ? blogData.map((item, idx) => <Card key={idx} item={item} />)
            : "Loading..."}
        </div>
      </div>
    </>
  );
};

export default BlogHome;
