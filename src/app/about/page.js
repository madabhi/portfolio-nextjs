import React from "react";
import About from "@/components/About/About";

export const metadata = {
  title: "About",
  description:
    "Hello there! I'm Abhinav Singh, a Computer Science and Engineering student at Sagar Institute of Science and Technology, Bhopal. Proudly donning the hat of a Google Cloud Career Practitioner Facilitator, I lead the 'Ikshana' team, orchestrating engaging technical events at my college. My journey revolves around a passion for web development and cloud computing. With a blend of theoretical knowledge and hands-on experience, I'm on a quest to make a mark in the tech landscape. Dive into my story, explore my projects, and join me in this exciting adventure where every line of code tells a tale of innovation and learning. Welcome to my digital haven!",
};

const page = () => {
  return (
    <div>
      <About />
    </div>
  );
};

export default page;
