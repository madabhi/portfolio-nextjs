import Link from "next/link";
import React from "react";

const Card = ({ item }) => {
  const { title, description, link } = item;
  return (
    <>
      <div class="bg-white w-64 h-64 rounded-lg">
        <div class="flex p-2 gap-1">
          <div class="">
            <span class="bg-blue-500 inline-block center w-3 h-3 rounded-full"></span>
          </div>
          <div class="circle">
            <span class="bg-purple-500 inline-block center w-3 h-3 rounded-full"></span>
          </div>
          <div class="circle">
            <span class="bg-pink-500 box inline-block center w-3 h-3 rounded-full"></span>
          </div>
        </div>
        <div class="card__content flex flex-col justify-between p-3">
          <div className="">
            <h2 class="text-xl font-semibold">{title}</h2>
            <p class="text-gray-500 mt-2 text-sm ">{description}</p>
          </div>
          <div className="flex mt-4 justify-center">
            <Link href={link} className="mt-4">
              <button className=" bg-gray-200 p-1 rounded-lg">
                Click Here
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

const cardData = [
  {
    title: "Manage Projects",
    description: "Manage projects and add new projects to the portfolio.",
    link: "/admin/projects",
  },

  {
    title: "Manage Blogs",
    description: "Manage blogs and add new blogs to the portfolio.",
    link: "/admin/blogs",
  },
  {
    title: "Write Blogs",
    description: "Write blogs and publish them to the portfolio.",
    link: "/admin/blogs/writeblog",
  },
  {
    title: "Add Projects",
    description: "Add projects and publish them to the portfolio.",
    link: "/admin/projects/add",
  },
];

const Admin = () => {
  return (
    <>
      <div className="p-1 md:px-44">
        <div className=" bg-gray-100 md:p-6 mb-4 grid grid-cols-4 gap-4 p-4 ">
          {cardData.map((item, idx) => {
            return (
              <div className="col-span-4 md:col-span-1" key={idx}>
                <Card item={item} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Admin;
