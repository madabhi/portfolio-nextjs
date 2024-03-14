import BlogById from "@/components/BlogById/BlogById";
import React from "react";

export async function generateMetadata({ params }) {
  const id = params.id;
  console.log(id);
  const product = await fetch(`${process.env.SITE_URL}/api/post?id=${id}`).then(
    (res) => res.json()
  );

  const truncatedContent =
    product.content.length > 170
      ? product.content.substring(0, 170) + "..."
      : product.content;

  return {
    title: product.title,
    description: truncatedContent, // Use truncated content
  };
}

const Page = ({ params }) => {
  return (
    <div className="w-full ">
      <BlogById id={params.id} />
    </div>
  );
};

export default Page;
