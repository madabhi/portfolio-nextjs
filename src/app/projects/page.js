"use client";
import { GithubIcon } from "@/components/Icons/Icons";
import { useEffect, useState } from "react";
import Image from "next/image";
import React from "react";
import { Montserrat } from "next/font/google";
import { motion } from "framer-motion";
import Link from "next/link";
const mont = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});
const heading = "Code to Experience !";
const MotionGithub = motion(GithubIcon);
const MotionImage = motion(Image);

const wordAnimation = {
  initial: { y: 50, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 1.5 },
};
const headingAnimation = {
  initial: { opacity: 0 },

  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.08,
    },
  },
};
const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/projects");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        setProjects(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  const featuredProjects = projects.filter((project) => project.isFeatured);
  const otherProjects = projects.filter((project) => !project.isFeatured);

  if (loading) {
    return (
      <div className="text-center">
        <p>Loading...</p>
      </div>
    );
  }
  const renderFeaturedProjects = () => {
    return featuredProjects.map((project) => (
      <div className=" col-span-2">
        <div className="border-2 border-black h-full rounded-[30px] relative  bg-light flex  ">
          <div className=" h-full rounded-[30px] bg-black -z-10 top-3 absolute w-full left-3"></div>
          <div className="flex  flex-col md:flex-row   w-full h-full  p-5 ">
            <div className=" md:justify-center flex md:w-1/2 ">
              <motion.div className="w-full ">
                <MotionImage
                  src={project.projectImage}
                  object-fit="cover"
                  className="rounded-lg border-2 border-black !relative w-full h-auto"
                  fill={true}
                  whileHover={{
                    scale: 1.01,
                    transition: { duration: 0.2 },
                  }}
                />
              </motion.div>
            </div>
            <div className="h-full md:w-1/2 flex flex-col gap-2 md:pl-4 justify-center mt-4 md:mt-0">
              <span className="font-semibold bg-pink-500 text-light rounded-md w-48 text-center">
                Featured Project
              </span>
              <span>
                <p className="text-xl font-semibold text-pink-500">
                  {project.category}
                </p>
              </span>
              <h1 className="text-4xl font-bold">{project.title}</h1>
              <p className="text-j">{project.description}</p>
              <div className="flex justify-start items-center ">
                <Link href={project.gitHubLink}>
                  <button className="bg-dark text-light px-4 py-2 rounded-lg w-full items-center font-semibold flex">
                    <motion.span
                      whileHover={{ scale: 1.1 }}
                      className="cursor-pointer"
                      whileTap={{ scale: 0.9 }}
                    >
                      <GithubIcon
                        height={40}
                        width={40}
                        className="w-12 mr-4"
                        fill="white"
                      />
                    </motion.span>
                    Visit Project
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  const renderOtherProjects = () => {
    return otherProjects.map((project) => (
      <div className="col-span-2 md:col-span-1 ">
        <div className="border-2 border-black h-full rounded-[30px] relative  bg-light flex ">
          <div className=" h-full rounded-[30px] bg-black -z-10 top-3 absolute w-full left-3"></div>
          <div className="flex   flex-col w-full h-full  p-5">
            <div className="relative  bg-light">
              <MotionImage
                src={
                  project.projectImage
                    ? project.projectImage
                    : process.env.DEFAULT_PROJECT_IMAGE
                }
                object-fit="cover"
                className="rounded-lg border-2 border-black !relative w-full h-[50%]"
                fill={true}
                whileHover={{
                  scale: 1.01,
                  transition: { duration: 0.2 },
                }}
              />
            </div>
            <div className="pl-1 flex flex-col gap-1">
              <span>
                <p className="text-xl font-semibold text-pink-500">
                  {project.category}
                </p>
              </span>
              <h1 className="text-3xl font-bold">{project.title}</h1>
              <div className="flex items-center justify-start ">
                <Link href={project.gitHubLink}>
                  <button className="bg-dark text-light px-4 py-2 rounded-lg w-full items-center font-semibold flex">
                    <motion.span
                      whileHover={{ scale: 1.1 }}
                      className="cursor-pointer"
                      whileTap={{ scale: 0.9 }}
                    >
                      <GithubIcon
                        height={30}
                        width={30}
                        className="w-12 mr-4"
                        fill="white"
                      />
                    </motion.span>
                    Visit Project
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <>
      <div
        className={` ${mont.variable} font-mont flex-grow-1 parent flex md:px-32 justify-center w-full min-h-full  flex-col mb-20 p-4 pr-6 md:p-0`}
      >
        <div className="flex justify-center">
          <motion.h1
            variants={headingAnimation}
            initial="initial"
            animate="animate"
            className="inline-block w-full text-center text-dark capitalize"
          >
            {heading.split(" ").map((word, index) => (
              <motion.span
                key={word + " " + index}
                className="md:text-[100px] text-[2.5rem] font-[700] text-dark text-center inline-block "
                variants={wordAnimation}
                initial="initial"
                animate="animate"
              >
                {word}&nbsp;
              </motion.span>
            ))}
          </motion.h1>
        </div>

        <div className="  grid grid-cols-1 h-full md:grid-cols-2 grid-flow-row gap-y-28 gap-x-28">
          {renderFeaturedProjects()}
          {renderOtherProjects()}
        </div>
      </div>
    </>
  );
};

export default Projects;
