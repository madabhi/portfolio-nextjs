import BlogById from "@/components/BlogById/BlogById";
import React from "react";
import { siteMetaData } from "@/utils/siteMetaData";
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
    openGraph: {
      type: "website",
      locale: siteMetaData.locale,
      url: siteMetaData.siteUrl,
      title: siteMetaData.title,
      description: truncatedContent,
      image: siteMetaData.socialBanner,
    },
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
