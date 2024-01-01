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
      <Link href={`/blog/${blogId}`}>
        <motion.div
          className="col-span-2 md:col-span-1 cursor-pointer"
          whileTap={{ scale: 0.99 }}
          whileHover={{ scale: 1.01 }}
        >
          <div className="border-2 border-black h-full rounded-[30px] relative  bg-light flex ">
            <div className="flex   flex-col w-full h-full  p-5">
              <div className="relative  bg-light"></div>
              <div className="pl-1 flex flex-col gap-1">
                <h1 className="text-lg  font-bold">{title}</h1>
                <span
                  className="font-semibold bg-gray-400 text-light rounded-md w-auto text-center text-sm"
                  style={{ width: `${tag.length * 10 + 10}px` }}
                >
                  {tag}
                </span>
                <span>
                  <p className="text-sm">{formattedDate}</p>
                </span>
                <div className="flex flex-col justify-evenly ">
                  <p className="text-sm">
                    <Markdown className="">
                      {content.length > 10
                        ? `${content.substring(0, 50)}...`
                        : content}
                    </Markdown>
                  </p>

                  <p className="text-lg underline cursor-pointer">Visit</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Link>
    </>
  );
};

const BlogHome = () => {
  const [blogData, setblogData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/blog");
      const blog = await response.json();
      console.log(blog);
      setblogData(blog);
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="px-4 md:px-44 mb-4 ">
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
