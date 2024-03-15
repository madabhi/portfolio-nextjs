"use client";
import { GithubIcon } from "@/components/Icons/Icons";
import { useEffect, useState } from "react";
import Image from "next/image";
import React from "react";
import { Montserrat } from "next/font/google";
import { motion } from "framer-motion";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const mont = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});
const heading = "Some Achievements !";
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
const Acheivements = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [achievements, setAchievements] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/achievements");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        if (data.length) {
          setProjects(data);
          setAchievements(data);
        }
        setLoading(false);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  const renderFeaturedProjects = () => {
    if (achievements.length === 0) {
      return (
        <>
          <p className="">No Achievements Added</p>
        </>
      );
    }
    return achievements.map((project, key) => (
      <div className="col-span-2 md:col-span-1 " key={key}>
        <div className="border-2 border-black h-full rounded-[30px] relative  bg-light flex ">
          <div className=" h-full rounded-[30px] bg-black -z-10 top-3 absolute w-full left-3"></div>
          <div className="flex   flex-col   w-full h-full  p-5">
            <div className="relative  bg-light">
              <MotionImage
                src={project.image}
                object-fit="cover"
                className="rounded-lg border-2 border-black !relative w-full h-full"
                style={{ aspectRatio: "16/9" }}
                fill={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt={project.title}
                whileHover={{
                  scale: 1.01,
                  transition: { duration: 0.2 },
                }}
              />
            </div>
            <div className="pl-1 flex flex-col gap-1 ">
              <h1 className="text-xl md:text-2xl font-bold">{project.title}</h1>
              <p className="">{project.description}</p>
              {project.isAchievement ? (
                <div className="flex justify-start items-center"></div>
              ) : (
                <div className="flex justify-start items-center"></div>
              )}
            </div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <>
      <div
        className={` ${mont.variable} font-mont flex-grow-1 parent flex  justify-center w-full min-h-full  flex-col mb-20 p-4 pr-6 md:p-0`}
      >
        <div className="flex justify-center mb-12">
          <motion.h1
            variants={headingAnimation}
            initial="initial"
            animate="animate"
            className="inline-block w-full text-center text-dark capitalize"
          >
            {heading.split(" ").map((word, index) => (
              <motion.span
                key={word + " " + index}
                className="md:text-7xl text-[2.5rem] font-[700] text-dark text-center inline-block "
                variants={wordAnimation}
                initial="initial"
                animate="animate"
              >
                {word}&nbsp;
              </motion.span>
            ))}
          </motion.h1>
        </div>

        <div className="  grid grid-cols-1 h-full md:grid-cols-2 grid-flow-row gap-y-20 gap-x-28">
          {!loading ? (
            <>{renderFeaturedProjects()}</>
          ) : (
            <>
              <div className="col-span-2">
                <Skeleton height={250} />
                <Skeleton height={250} />
                <Skeleton height={250} />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Acheivements;
