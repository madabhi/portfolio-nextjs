import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const BlogSkeleton = () => {
  return (
    <>
      <Skeleton height={300} />
      <Skeleton height={300} />
      <Skeleton height={300} />
      <Skeleton height={300} />
      <Skeleton height={300} />
      <Skeleton height={300} />
    </>
  );
};

export default BlogSkeleton;
