import React from "react";
import { Link } from "react-router-dom";
import { BsBoxArrowUpRight } from "react-icons/bs";

const Blog = () => {
  const blogData = [
    {
      image: "https://preview.colorlib.com/theme/oraxol/images/image_3.jpg",
      title: "Grow your insights with inspiring news",
      description:
        "A small river named Duden flows by their place and supplies it with the necessary ir place and supplies it with the necessary ir place and supplies it with the necessary ir place and supplies it with the necessary regelialia.",
      content:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
      post_datea: "31/10/2023",
    },
    {
      image: "https://preview.colorlib.com/theme/oraxol/images/image_3.jpg",
      title: "Grow your insights with inspiring news",
      description:
        "A small river named Duden flows by their place and supplies it with the necessary ir place and supplies it with the necessary ir place and supplies it with the necessary ir place and supplies it with the necessary regelialia.",
      content:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
      post_date: "31/10/2023",
    },
    {
      image: "https://preview.colorlib.com/theme/oraxol/images/image_3.jpg",
      title: "Grow your insights with inspiring news",
      description:
        "A small river named Duden flows by their place and supplies it with the necessary ir place and supplies it with the necessary ir place and supplies it with the necessary ir place and supplies it with the necessary regelialia.",
      content:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
      post_date: "31/10/2023",
    },
  ];

  return (
    <div className="px-6 md:px-10 py-12 transition-all duration-300 ">
      <div data-aos="fade-down" className="mx-[15px] pb-4">
        <h3 className="font-[cursive] text-primary_color text-xl">
          MY Articles and Advice
        </h3>

        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-medium text-3xl lg:text-5xl my-6 text-white">
              Latest Blog
            </h1>
          </div>

          <Link
            to={"/blogs"}
            className="flex items-center gap-2 border-b-[1px] font-bold sn:text-xl "
          >
            View All <BsBoxArrowUpRight />
          </Link>
        </div>
      </div>

      <BlogCard blogData={blogData} />
    </div>
  );
};

const BlogCard = ({ blogData }) => (
  <>
    <div className=" grid sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-4 xl:gap-6 2xl:gap-12 2xl:px-16 mt-12">
      {blogData.map((item, index) => (
        <div
          key={index}
          data-aos="flip-left"
          data-aos-delay={200 * (1 + index)}
          className=" flex flex-col  border-4 border-primary_color"
        >
          <div className="h-[50%] overflow-hidden cursor-pointer">
            <img
              src={item.image}
              alt={item.title}
              className=" w-full h-full hover:scale-110 transition-all duration-300 ease-linear"
            />
          </div>

          <div className=" flex-1 py-4 px-4">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-[2rem] lg:h-[3rem] w-[2rem] lg:w-[3rem] border-2 rounded-full border-primary_color"
                />
                <h1 className="text-sm  text-primary_color font-bold">
                  Ashish Gupta
                </h1>
              </div>

              <h1 className="text-sm text-text_color1">Dec, 10, 2023</h1>
            </div>

            <div className="py-4 space-y-2">
              <Link to={`/blog/id`} className="text-lg xl:text-2xl font-bold ">
                <p className="line-clamp-2"> {item.title}</p>
              </Link>

              <p className=" text-text_color1 line-clamp-4 text-justify">
                {item.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </>
);

export default Blog;
