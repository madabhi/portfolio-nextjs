import BlogById from "@/components/BlogById/BlogById";
import React from "react";

export async function generateMetadata({ params }) {
  const id = params.id;
  console.log(id);
  const product = await fetch(
    `https://abhinavsingh-steel.vercel.app/api/post?id=${id}`
  ).then((res) => res.json());
  return {
    title: product.title,
    description: product.content,
  };
} 

const Page = ({ params }) => {
  return (
    <div>
      <BlogById id={params.id} />
    </div>
  );
};

export default Page;
