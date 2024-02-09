import Acheivements from "@/components/Achievements/Achievements";
import React from "react";

export const metadata = {
  title: "Achievements ",
  description:
    "Embark on a journey through my digital milestones and triumphs on the Projects and Achievements page. As Abhinav Singh, a passionate Computer Science and Engineering student, I showcase a collection of my notable projects and accomplishments. Explore a diverse array of endeavors, ranging from innovative web development projects to successful engagements as a Google Cloud Career Practitioner (GCCP) Facilitator. Each entry reflects my dedication to pushing boundaries and achieving excellence in the tech realm. Join me in celebrating the journey so far and get inspired by the projects that define my commitment to learning, growth, and impactful contributions to the world of technology.",
};

const page = () => {
  return (
    <div>
      <Acheivements />
    </div>
  );
};

export default page;
