import React from "react";
import { AiOutlineFieldTime } from "react-icons/ai";
import {
  MdAirlineSeatReclineNormal,
  MdDoubleArrow,
  MdOutlineArrowRightAlt,
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { BsBoxArrowUpRight, BsGithub } from "react-icons/bs";
import { motion } from "framer-motion";
import service1 from "../../../assets/images/home/services/2.jpeg";

const Projects = () => {
  const eventDetails = [
    {
      title: "Susbscription Based Video Platform",
      category: "Frontend",
      tech_stack: [
        "Nodejs",
        "ReactJs",
        "ExpressJs",
        "Redux",
        "nodejs",
        "ReactJs",
        "ExpressJs",
        "Redux",
        "Nodejs",
        "ReactJs",
        "ExpressJs",
        "Redux",
        "nodejs",
        "ReactJs",
        "ExpressJs",
        "Redux",
        "ReactJs",
        "ExpressJs",
        "Redux",
      ],
      description:
        "The real-time code editoris a web-based platform that allows multiple users to collaboratively write and edit code in real- time.",
      start_date: "20-10-2023",
      end_date: "20-10-2023",
      thumbnail: service1,
      github_link: "",
      live_link: "",
    },
    {
      title: "Susbscription Based Video Platform",
      category: "Frontend",
      tech_stack: [
        "Nodejs",
        "ReactJs",
        "ExpressJs",
        "Redux",
        "nodejs",
        "ReactJs",
        "ExpressJs",
        "Redux",
        "Nodejs",
        "ReactJs",
        "ExpressJs",
        "Redux",
        "nodejs",
        "ReactJs",
        "ExpressJs",
        "Redux",
        "ReactJs",
        "ExpressJs",
        "Redux",
      ],
      description:
        "The real-time code editoris a web-based platform that allows multiple users to collaboratively write and edit code in real- time.",
      start_date: "20-10-2023",
      end_date: "20-10-2023",
      thumbnail: service1,
      github_link: "",
      live_link: "",
    },
    {
      title: "Susbscription Based Video Platform",
      category: "Frontend",
      tech_stack: [
        "Nodejs",
        "ReactJs",
        "ExpressJs",
        "Redux",
        "nodejs",
        "ReactJs",
        "ExpressJs",
        "Redux",
        "Nodejs",
        "ReactJs",
        "ExpressJs",
        "Redux",
        "nodejs",
        "ReactJs",
        "ExpressJs",
        "Redux",
        "ReactJs",
        "ExpressJs",
        "Redux",
      ],
      description:
        "The real-time code editoris a web-based platform that allows multiple users to collaboratively write and edit code in real- time.",
      start_date: "20-10-2023",
      end_date: "20-10-2023",
      thumbnail: service1,
      github_link: "",
      live_link: "",
    },
    {
      title: "Susbscription Based Video Platform",
      category: "Frontend",
      tech_stack: [
        "Nodejs",
        "ReactJs",
        "ExpressJs",
        "Redux",
        "nodejs",
        "ReactJs",
        "ExpressJs",
        "Redux",
        "Nodejs",
        "ReactJs",
        "ExpressJs",
        "Redux",
        "nodejs",
        "ReactJs",
        "ExpressJs",
        "Redux",
        "ReactJs",
        "ExpressJs",
        "Redux",
      ],
      description:
        "The real-time code editoris a web-based platform that allows multiple users to collaboratively write and edit code in real- time.",
      start_date: "20-10-2023",
      end_date: "20-10-2023",
      thumbnail: service1,
      github_link: "",
      live_link: "",
    },
    {
      title: "Susbscription Based Video Platform",
      category: "Frontend",
      tech_stack: [
        "Nodejs",
        "ReactJs",
        "ExpressJs",
        "Redux",
        "nodejs",
        "ReactJs",
        "ExpressJs",
        "Redux",
        "Nodejs",
        "ReactJs",
        "ExpressJs",
        "Redux",
        "nodejs",
        "ReactJs",
        "ExpressJs",
        "Redux",
        "ReactJs",
        "ExpressJs",
        "Redux",
      ],
      description:
        "The real-time code editoris a web-based platform that allows multiple users to collaboratively write and edit code in real- time.",
      start_date: "20-10-2023",
      end_date: "20-10-2023",
      thumbnail: service1,
      github_link: "",
      live_link: "",
    },
  ];

  function CustomNextArrow(props) {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="text-3xl bg-black text-primary_color rounded-full p-2 absolute left-[50%] translate-x-[30%] z-10 hover:bg-transparent transition-all duration-300 border-[1px] border-primary_color"
      >
        <MdOutlineKeyboardArrowRight />
      </button>
    );
  }
  function CustomPrevArrow(props) {
    const { onClick } = props;

    return (
      <button
        onClick={onClick}
        className="  text-3xl bg-black text-primary_color rounded-full p-2 absolute  top-[100%] left-[50%]  translate-x-[-130%] z-10 hover:bg-transparent transition-all duration-300 border-[1px] border-primary_color"
      >
        <MdOutlineKeyboardArrowLeft />
      </button>
    );
  }
  const settings = {
    infinite: true,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false, // Hide dots
    arrows: false, // Hide arrows,
    autoplaySpeed: 3000,
    // nextArrow: <CustomNextArrow />,
    // prevArrow: <CustomPrevArrow />,

    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 550,
        settings: "unslick",
      },
    ],
  };
  return (
    <div className="px-6 md:px-10 py-20 transition-all duration-300">
      <div data-aos="fade-down" className="mx-[15px]">
        <h3 className="font-[cursive] text-primary_color text-xl">Projects</h3>

        <div className="flex items-center justify-between ">
          <div>
            <h1 className="font-medium text-3xl lg:text-5xl my-4 sm:my-6 text-white">
              My Cases
            </h1>
          </div>

          <Link
            to={"/projects"}
            className="flex items-center gap-2 border-b-[1px] font-bold sn:text-xl "
          >
            View All <BsBoxArrowUpRight />
          </Link>
        </div>
      </div>

      <div className="mt-12">
        <Slider {...settings}>
          {eventDetails.map((item, index) => (
            <Card item={item} key={index} index={index} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

const Card = ({ item, index }) => (
  <div
    data-aos="flip-right"
    data-aos-delay={200 * (index + 1)}
    className="border-4 border-primary_color overflow-hidden transition-all duration-300 sm:mx-4 my-4 sm:my-0 cursor-pointer"
  >
    <div className="w-full h-[18rem] overflow-hidden relative ">
      <div to={""} target="blank" className="overflow-hidden h-full ">
        <img
          src={item.thumbnail}
          alt={item.name}
          className="w-[100%] h-[100%] hover:scale-105 transition-all duration-300 ease-linear"
        />
      </div>

      <a
        href="/"
        target="blank"
        className=" absolute top-4 right-4 text-3xl text-primary_color bg-secondary_color p-2 rounded-full border-2 border-primary_color hover:bg-transparent transition-all duration-300"
      >
        <BsGithub />
      </a>
    </div>

    <div className=" relative pt-[1rem] pb-[1rem] px-[1rem] ">
      <div
        className="font-bold mb-[1rem] space-y-4
       "
      >
        <p className=" text-primary_color text-md font-semibold">
          {item.category}
        </p>

        <Link className="text-xl uppercase" to={""}>
          {item.title}
        </Link>

        <div className="flex gap-1 line-clamp-1 overflow-x-auto">
          {item.tech_stack.length > 0 &&
            item.tech_stack.map((item, index) => (
              <span className="text-sm font-normal bg-gray-800 p-1 rounded-lg">
                {item}
              </span>
            ))}
        </div>
      </div>

      <div className="flex mb-[1.2rem]">
        <p className=" line-clamp-3">{item.description}</p>
      </div>

      <a
        href={item.live_link}
        target="blank"
        className="w-min text-lg flex items-center gap-2 text-white font-medium 
           p-1 rounded-lg border-primary_color hover:text-primary_color hover:border-white transition-all duration-300"
      >
        Demo <BsBoxArrowUpRight />
      </a>
    </div>
  </div>
);

export default Projects;
