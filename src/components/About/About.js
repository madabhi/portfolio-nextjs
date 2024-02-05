"use client";
import Image from "next/image";
import React from "react";
import { Montserrat } from "next/font/google";
import { motion } from "framer-motion";

const mont = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});
const heading = "About Me !";
const skills = "Skills";
const MotionImage = motion(Image);

const FrontSet = {
  HTML: "/images/skills/html.png",
  CSS: "/images/skills/css.png",
  Javascript: "/images/skills/js.png",
  React: "/images/skills/react.png",
  Tailwindcss: "/images/skills/tailwindcss.png",
};

let noFront = Object.keys(FrontSet).length;
const BackendSet = {
  Node: "/images/skills/node.png",
  Express: "/images/skills/express.png",
  Next: "/images/skills/nextjs.jpg",
};
const dbSet = {
  MongoDB: "/images/skills/mongodb.png",
  Firebase: "/images/skills/firebase.png",
  Supabase: "/images/skills/supabase.png",
};

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

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="md:bg-dark md:p-4 absolute md:text-light text-xl rounded-full flex items-center justify-center"
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Page = () => {
  //

  //
  return (
    <div className="mb-20 ">
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

      {/* Biography and Image */}
      <div className="px-4 md:px-0 md:flex ">
        <div className="wrap w-full border-2 border-black rounded-xl relative bg-light">
          <div className="md:h-[103%]  w-[101%] rounded-[30px] bg-black -z-10 absolute hidden md:block"></div>
          <div className="md:flex md:p-8 md:py-4 relative w-full flex flex-col gap-x-10 md:flex-row ">
            <div className="bio  md:w-1/2 flex justify-start flex-col gap-4 z-10 order-1 md:order-2 px-2 md:px-0">
              <h1 className="text-2xl font-bold text-[#515151]">Biography</h1>
              <p className="text-justify text-md ">
                Hi, I'm <strong>Abhinav Singh</strong>, a Computer Science and
                Engineering student at Sagar Institute of Science and
                Technology. Currently delving into the intricacies of coding and
                problem-solving, my journey has been enriched by experiences in
                leadership and technology. I serve as a
                <strong> Google Cloud Career Practitioner Facilitator</strong>,
                guiding peers through the fascinating realm of cloud computing.
                Leading the
                <strong> "Ikshana"</strong> team, we organize engaging technical
                events, fostering innovation and collaboration on campus. My
                passion lies in web development, from crafting seamless user
                experiences to diving into the backend with Node.js. Proudly a
                <strong> Microsoft Learn Student Ambassador Alpha</strong>, I
                stay updated on the latest Microsoft technologies and actively
                contribute to the tech community. Beyond the screen, I enjoy
                exploring emerging technologies, sipping coffee, and tackling
                coding challenges with an insatiable thirst for knowledge. Join
                me on this thrilling journey of continuous learning and shaping
                the ever-evolving landscape of technology.
              </p>
            </div>
            <div className="p-2 md:w-1/2 flex md:h-90 justify-center relative z-10">
              <div className="border-black border-2 border-b-8 border-r-8 rounded-2xl relative bg-light">
                <div className="z-1 p-4">
                  <MotionImage
                    src="/images/abhinav.jpg"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                    layout="responsive"
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}

      <div className="flex md:justify-center mt-12 flex-col  ">
        <motion.h1
          variants={headingAnimation}
          initial="initial"
          animate="animate"
          className="inline-block w-full text-center text-dark capitalize"
        >
          {skills.split(" ").map((word, index) => (
            <motion.span
              key={word + " " + index}
              className="md:text-[70px] text-[40px] font-[700] text-dark text-center inline-block "
              variants={wordAnimation}
              initial="initial"
              animate="animate"
            >
              {word}&nbsp;
            </motion.span>
          ))}
        </motion.h1>

        {/* ------------------------------------Skillsss--------------------------------- */}
        <div className="bg-gradient-to-br from-opacity-10 via-transparent to-opacity-10 backdrop-blur-10 ">
          <div className="flex flex-col  justify-evenly">
            <div className="flex flex-col justify-start">
              <div className="px-4 md:px-0">
                <h1 className="text-2xl font-semibold mb-2">Frontend Skills</h1>
                <div
                  className={`grid md:grid-cols-4 grid-cols-2 md:gap-8 gap-4`}
                >
                  {Object.entries(FrontSet).map(([skill, imagePath]) => (
                    <div
                      className="flex flex-col justify-center items-center skills-shadow rounded py-2 px-4 md:px-0"
                      key={imagePath}
                    >
                      <Image
                        src={imagePath}
                        height={50}
                        width={50}
                        alt="skills images"
                      ></Image>
                      {/* <p className="font-medium">{skill}</p> */}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-start px-4 md:px-0 mt-10">
              <h1 className="text-2xl font-semibold mb-2">Backend Skills</h1>
              <div className="grid md:grid-cols-4 grid-cols-2 md:gap-8 gap-4">
                {Object.entries(BackendSet).map(([skill, imagePath]) => (
                  <div
                    className="flex flex-col justify-center items-center skills-shadow rounded py-3 px-1 md:px-0 "
                    key={imagePath}
                  >
                    <Image
                      src={imagePath}
                      height={90}
                      width={90}
                      alt="skills image"
                    ></Image>
                    {/* <p className="font-medium">{skill}</p> */}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col justify-start px-4 md:px-0 mt-10">
              <h1 className="text-2xl font-semibold mb-2">Database</h1>
              <div className="grid md:grid-cols-4 grid-cols-2 md:gap-8 gap-4 ">
                {Object.entries(dbSet).map(([skill, imagePath]) => (
                  <div
                    className="flex flex-col justify-center items-center skills-shadow rounded py-3 px-1 md:px-0 "
                    key={imagePath}
                  >
                    <Image
                      src={imagePath}
                      height={140}
                      width={140}
                      alt="skills image"
                    ></Image>
                    {/* <p className="font-medium">{skill}</p> */}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
