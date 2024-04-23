import React from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import Slider from "react-slick";

import service1 from "../../assets/images/home/services/1.png";
import service2 from "../../assets/images/home/services/2.jpeg";
import service3 from "../../assets/images/home/services/3.jpeg";
import service4 from "../../assets/images/home/services/4.webp";
import pattern1 from "../../assets/images/home/services/pattern1.png";

const servicesData = [
  {
    title: "Website Development",
    description:
      "Design direction for business. Get your business on the next level. We help to create great experiences...",
    image: service1,
  },
  {
    title: "App Development",
    description:
      "I build brands through cultural insights & strategic vison. Custom crafted business solutions...",
    image: service2,
  },
  {
    title: "UI/UX Solutions",
    description:
      "I build brands through cultural insights & strategic vison. Custom crafted business solutions...",
    image: service3,
  },
  {
    title: "Wordpress Development",
    description:
      "I build brands through cultural insights & strategic vison. Custom crafted business solutions...",
    image: service4,
  },
];

const Services = () => {
  const settings = {
    dots: false, // Hide dots
    arrows: false, // Hide arrows
    autoplay: true,
    autoplaySpeed: 3000,
    // centerMode: true,
    // centerPadding: "50px",
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,

    responsive: [
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
    <div className="min-h-[100vh] px-6 md:px-10 py-12 transition-all duration-300 ">
      <div className="mx-[15px]">
        <h3 className="font-[cursive] text-primary_color text-xl">What I Do</h3>

        <div className="flex items-center justify-between ">
          <div>
            <h1 className="font-medium text-3xl lg:text-5xl my-6 text-white">
              My Services
            </h1>
          </div>

          <Link
            to={"/services"}
            className="flex items-center gap-2 border-b-[1px] font-bold sn:text-xl "
          >
            View All <BsBoxArrowUpRight />
          </Link>
        </div>
      </div>

      <div className="mt-12">
        <Slider {...settings}>
          {servicesData.map((item, index) => (
            <Card key={index} item={item} index={index} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

const Card = ({ item, index }) => {
  return (
    <>
      <div
        data-aos="flip-right"
        data-aos-delay={200 * (index + 1)}
        className="bg-white rounded-xl overflow-hidden group transition-all duration-300 relative h-[25rem] sm:mx-4 my-4 sm:my-0 cursor-pointer"
      >
        <div className="h-full w-full border">
          <img src={item.image} alt={item.title} className="w-full h-full" />
        </div>

        <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 absolute top-0 left-0 text-black bg-white w-full h-full bg-opacity-90 p-6">
          <h1 className=" text-4xl font-bold pt-[3rem] text-primary_color">
            {item.title}
          </h1>
          <p className="pt-6 text-text_color1 font-semibold">
            {item.description}
          </p>

          <div className=" w-[8rem] absolute -bottom-6 -right-6">
            <img src={pattern1} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Services;
