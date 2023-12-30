"use client";
import { data } from "autoprefixer";
import Link from "next/link";
import { useState, useEffect } from "react";

const Admin = () => {
  const [blogData, setBlogData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/blog", {
          method: "GET",
        });

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        setBlogData(data);
        // console.log(data[0].title);
        // console.log(blogData[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="py-16">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-md">
          <h1 className="text-gray-800 text-xl font-extrabold sm:text-2xl">
            Blogs
          </h1>
          <p className="text-gray-600 mt-2 font-medium">
            Extend and automate your workflow by using integrations for your
            favorite tools. <br />
            <Link href="/admin/writeblog" className="underline">
              <button className="bg-dark text-light p-2 rounded-lg">Write Blog</button>
            </Link>
          </p>
        </div>
        <ul className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogData.map((item, idx) => (
            <li className="border rounded-lg">
              <div className="flex items-start justify-between p-4">
                <div className="space-y-2">
                  <h4 className="text-gray-800 font-semibold">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.tag}</p>
                </div>
                <Link href={`/admin/editblog/${item.blogId}`}>
                  <button className="text-gray-700 text-sm border rounded-lg px-3 py-2 duration-150 hover:bg-gray-100">
                    Edit
                  </button>
                </Link>
              </div>
              <div className="py-5 px-4 border-t text-right">
                <Link
                  href={`/blog/${item.blogId}`}
                  className="text-indigo-600 hover:text-indigo-500 text-sm font-medium"
                >
                  View
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Admin;
