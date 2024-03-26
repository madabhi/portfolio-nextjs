import BlogHome from "@/components/Blog/Blog";
import React from "react";

export const metadata = {
  title: "Blog",
  description:
    "Discover a treasure trove of insights on my blog page! As Abhinav Singh, a devoted Computer Science and Engineering student, I share my experiences, knowledge, and discoveries in the realms of web development and cloud computing. Dive into a collection of informative and engaging articles that unravel the intricacies of coding, cloud technologies, and the ever-evolving landscape of the digital world. Whether you're a fellow enthusiast, a curious learner, or a tech aficionado, my blog is your gateway to a world where technology meets storytelling. Join me on this journey of exploration and stay updated with the latest in the tech universe. Happy reading!",
  openGraph: {
    description:
      "Discover a treasure trove of insights on my blog page! As Abhinav Singh, a devoted Computer Science and Engineering student, I share my experiences, knowledge, and discoveries in the realms of web development and cloud computing. Dive into a collection of informative and engaging articles that unravel the intricacies of coding, cloud technologies, and the ever-evolving landscape of the digital world. Whether you're a fellow enthusiast, a curious learner, or a tech aficionado, my blog is your gateway to a world where technology meets storytelling. Join me on this journey of exploration and stay updated with the latest in the tech universe. Happy reading!",
  }
};

const page = () => {
  return (
    <div>
      <BlogHome />
    </div>
  );
};

export default page;
