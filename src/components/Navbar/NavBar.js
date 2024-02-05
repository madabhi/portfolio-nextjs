"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  InstaIcon,
  GithubIcon,
  LinkedinIcon,
} from "../../components/Icons/Icons";

const NavBar = () => {
  const [state, setState] = useState(false);

  // Replace javascript:void(0) paths with your paths
  const navigation = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Achievements", path: "/achievements" },
    { title: "Projects", path: "/projects" },
    { title: "Blog", path: "/blog" },
  ];

  useEffect(() => {
    document.onclick = (e) => {
      const target = e.target;
      if (!target.closest(".menu-btn")) setState(false);
    };
  }, []);

  return (
    <nav
      className={`bg-white  md:text-sm ${
        state
          ? "shadow-lg rounded-xl border mx-2 mt-2 md:shadow-none md:border-none md:mx-2 md:mt-0"
          : ""
      }`}
    >
      <div className="gap-x-14 items-center  mx-auto px-4 md:flex md:px-0">
        <div className="flex items-center justify-between py-5 md:block">
          <Link href="/">
            <h1 className="font-bold text-2xl">Abhinav</h1>
          </Link>
          <div className="md:hidden">
            <button
              className="menu-btn text-gray-500 hover:text-gray-800"
              onClick={() => setState(!state)}
            >
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 items-center mt-8 md:mt-0 md:flex justify-between ${
            state ? "block" : "hidden" //
          } `}
        >
          <ul className="justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
            {navigation.map((item, idx) => {
              return (
                <li
                  key={idx}
                  className="text-gray-700 hover:text-gray-900 font-medium"
                >
                  <Link
                    href={item.path}
                    className="block hover:text-blue-600 transition duration-150 ease-in-out"
                    onClick={() => {
                      setState(false);
                    }}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="flex justify-center items-center gap-x-4 mt-6 space-y-6 md:flex md:space-y-0 md:mt-0">
            <motion.a
              href="https://instagram.com/alphaabhi.in"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.8 }}
              className=" w-8  "
            >
              {" "}
              <InstaIcon className="md:mt-0 mt-6" />
            </motion.a>
            <motion.a
              href="https://github.com/madabhi"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.8 }}
              className="  w-8 text-white font-medium rounded-full md:inline-flex"
            >
              <GithubIcon className=" " />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/madabhi"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.8 }}
              className="   text-white font-medium rounded-full md:inline-flex"
            >
              <LinkedinIcon className="h-8 " />
            </motion.a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
