"use client";
import Image from "next/image";
import React, { useState } from "react";
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

const page = () => {
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
              className="md:text-[100px] text-[80px] font-[700] text-dark text-center inline-block "
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
      <div className="px-4 md:flex md:px-20">
        <div className="wrap w-full border-2 border-black rounded-xl relative bg-light">
          <div className="md:h-[103%]  w-[101%] rounded-[30px] bg-black -z-10 absolute hidden md:block"></div>
          <div className="md:flex md:p-8 md:py-24 relative w-full flex flex-col md:flex-row ">
            <div className="bio p-3 md:w-1/2 flex justify-start flex-col gap-4 z-10 order-1 md:order-2">
              <h1 className="text-2xl font-bold text-[#515151]">Biography</h1>
              <p className="text-justify text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem natus nostrum, voluptatum quaerat temporibus quae id
                dolores sequi hic in, beatae officia, inventore nam! Praesentium
                consequatur asperiores ducimus id doloribus eius iste aspernatur
                tenetur voluptatum necessitatibus libero itaque in voluptatibus
                ipsum consequuntur, perspiciatis minus deserunt natus autem
                commodi sunt illo doloremque. Labore, ullam corporis tempora
                ducimus illo laudantium a quae id distinctio iusto natus,
                debitis odio voluptatem quas saepe aliquam placeat excepturi
                deserunt nemo beatae! Ratione perspiciatis delectus, rem iste
                consequatur ipsa velit labore ad doloribus quam odio, quos
                architecto eum! Vel eius natus beatae hic non commodi pariatur
                iusto!
              </p>
            </div>
            <div className="p-2 md:w-1/2 flex justify-center relative z-10">
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

      <div className="flex md:justify-center mt-12 flex-col md:px-[200px] ">
        <motion.h1
          variants={headingAnimation}
          initial="initial"
          animate="animate"
          className="inline-block w-full text-center text-dark capitalize"
        >
          {skills.split(" ").map((word, index) => (
            <motion.span
              key={word + " " + index}
              className="md:text-[100px] text-[80px] font-[700] text-dark text-center md:inline-block "
              variants={wordAnimation}
              initial="initial"
              animate="animate"
            >
              {word}&nbsp;
            </motion.span>
          ))}
        </motion.h1>

        {/* ------------------------------------Skillsss--------------------------------- */}
        <div className="bg-gradient-to-br from-opacity-10 via-transparent to-opacity-10 backdrop-blur-10">
          <div className="flex flex-col  justify-evenly">
            <div className="flex flex-col justify-start">
              <h1 className="text-2xl font-semibold px-6">Frontend Skills</h1>
              <div
                className={`grid md:grid-cols-${noFront} grid-cols-2 md:gap-8`}
              >
                {Object.entries(FrontSet).map(([skill, imagePath]) => (
                  <div
                    className="flex flex-col justify-center items-center"
                    key={imagePath}
                  >
                    <Image src={imagePath} height={70} width={70}></Image>
                    {/* <p className="font-medium">{skill}</p> */}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col justify-start px-6 mt-10">
              <h1 className="text-2xl font-semibold ">Backend Skills</h1>
              <div className="grid md:grid-cols-4 grid-cols-2 md:gap-8">
                {Object.entries(BackendSet).map(([skill, imagePath]) => (
                  <div
                    className="flex flex-col justify-center items-center"
                    key={imagePath}
                  >
                    <Image src={imagePath} height={140} width={140}></Image>
                    {/* <p className="font-medium">{skill}</p> */}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col justify-start px-6 mt-10">
              <h1 className="text-2xl font-semibold ">Database</h1>
              <div className="grid md:grid-cols-4 grid-cols-2 md:gap-8">
                {Object.entries(dbSet).map(([skill, imagePath]) => (
                  <div
                    className="flex flex-col justify-center items-center"
                    key={imagePath}
                  >
                    <Image src={imagePath} height={140} width={140}></Image>
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

export default page;
