import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const BlogByIdSkeleton = () => {
  return (
    <>
      <Skeleton height={150} className="" />
      <hr className="md:my-7" />
      <Skeleton height={400} className="" />
    </>
  );
};

export default BlogByIdSkeleton;
