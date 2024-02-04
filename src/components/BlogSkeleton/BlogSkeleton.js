import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const BlogSkeleton = () => {
  return (
    <>
      <Skeleton  height={250} />
      <Skeleton  height={250} />
      <Skeleton  height={250} />
      <Skeleton  height={250} />
      <Skeleton  height={250} />
      
    </>
  );
};

export default BlogSkeleton;
