"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminNav from "@/components/AdminNav/AdminNav";

// -----------------------ADMIN PAGE-----------------------

const Projects = () => {
  const loadingNotify = () =>
    toast.success("Loading", {
      icon: "🚀",
    });

  const router = useRouter();

  const logout = async () => {
    const response = await fetch(`/api/user/logout`, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    if (data.success) {
      router.push("/");
    }
  };

  const [blogData, setBlogData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/projects", {
          method: "GET",
        });

        if (response.success) {
          console.log("success");
        }

        const data = await response.json();
        setBlogData(data);
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
      <section className="py-4">
        <div className="max-w-screen-xl mx-auto px-4 md:px-0">
          <div className="max-w-md">
            <h1 className="text-gray-800 text-xl font-extrabold sm:text-3xl">
              Manage Projects & Achievements
            </h1>
            <p className="text-gray-600 mt-2 font-medium">
              Extend and automate your workflow by using integrations for your
              favorite tools. <br />
              <button
                className="bg-dark text-light p-2 rounded-lg"
                onClick={() => {
                  loadingNotify();
                  router.push("/admin/projects/add");
                }}
              >
                Add Projects & Achievements
              </button>
            </p>
          </div>
          <ul className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogData.map((item, idx) => {
              const dateObject = new Date(item.date);
              const formattedDate = dateObject.toLocaleDateString("en-IN", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              });

              return (
                <li className="border rounded-lg" key={idx}>
                  <div className="flex items-start justify-between p-4">
                    <div className="space-y-2">
                      <h4 className="text-gray-800 font-semibold">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-sm">{item.tag}</p>
                      <p className="text-gray-600 text-sm">{formattedDate}</p>
                    </div>
                    <Link href={`/admin/projects/edit/${item.projectId}`}>
                      <button
                        onClick={loadingNotify}
                        className="text-gray-700 text-sm border rounded-lg px-3 py-2 duration-150 hover:bg-gray-100"
                      >
                        Edit
                      </button>
                    </Link>
                  </div>
                  <div className="py-5 px-4 border-t text-right">
                    <Link
                      href={`/projects-achievements`}
                      className="text-indigo-600 hover:text-indigo-500 text-sm font-medium"
                    >
                      View
                    </Link>
                  </div>
                </li>
              );
            })}
          </ul>

          <button className="mt-4" onClick={logout}>
            LogOut
          </button>
        </div>
      </section>
    </>
  );
};

export default Projects;
