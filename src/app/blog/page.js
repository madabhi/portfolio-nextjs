import BlogHome from "@/components/Blog/Blog";
import React from "react";

export const metadata = {
  title: "Blog",
  description: "Blog",
};

const page = () => {
  return (
    <div>
      <BlogHome />
    </div>
  );
};

export default page;
