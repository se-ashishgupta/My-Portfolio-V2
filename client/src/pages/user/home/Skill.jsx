import React, { useState } from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const skills = [
  {
    category: "Web",
    skill: [
      {
        name: "HTML",
        rating: 8,
      },
      {
        name: "CSS",
        rating: 8,
      },
      {
        name: "JavaScript",
        rating: 6,
      },
      {
        name: "ReactJS",
        rating: 8,
      },
      {
        name: "Redux",
        rating: 7,
      },
      {
        name: "Tailwind",
        rating: 7,
      },
      {
        name: "SCSS",
        rating: 9,
      },
      {
        name: "NodeJS",
        rating: 8,
      },
      {
        name: "ExpressJS",
        rating: 8,
      },
      {
        name: "API",
        rating: 7,
      },
    ],
  },
  {
    category: "Programming",
    skill: [
      {
        name: "C",
        rating: 5,
      },
      {
        name: "C++",
        rating: 8,
      },
      {
        name: "JavaScript",
        rating: 6,
      },
    ],
  },
  {
    category: "Database",
    skill: [
      {
        name: "MongoDB",
        rating: 7,
      },
      {
        name: "SQL",
        rating: 6,
      },
    ],
  },
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [activeCategorySkill, setActiveCategorySkill] = useState(
    skills[0].skill ? skills[0].skill : null
  );

  const activeCategoryHandler = (index, skill) => {
    setActiveCategory(index);
    setActiveCategorySkill(skill);
  };

  return (
    <div className=" px-6 md:px-10 py-20 transition-all duration-300 ">
      <div data-aos="fade-down" className="mx-[15px]">
        <h3 className="font-[cursive] text-primary_color text-xl">
          Professional Skills
        </h3>

        <div className="flex items-center justify-between ">
          <div>
            <h1 className="font-medium text-3xl lg:text-5xl my-6 text-white">
              My Talent
            </h1>
          </div>

          <Link
            to={"/skills"}
            className="flex items-center gap-2 border-b-[1px] font-bold sn:text-xl "
          >
            View All <BsBoxArrowUpRight />
          </Link>
        </div>
      </div>

      <div className="mt-12 px-4">
        <div className=" flex items-center gap-4 flex-wrap">
          {skills.map((item, index) => (
            <div
              onClick={() => activeCategoryHandler(index, item.skill)}
              key={index}
              className={`text-lg border-2 ${
                activeCategory === index ? "bg-primary_color" : ""
              } border-primary_color px-3 py-1 rounded-xl  font-bold cursor-pointer duration-300 transition-all`}
            >
              {item.category}
            </div>
          ))}
        </div>

        <div className=" grid md:grid-cols-2 gap-20 my-10">
          {activeCategorySkill &&
            activeCategorySkill.map((item, index) => (
              <div key={index} className=" space-y-1.5 relative">
                <p className=" text-xl font-bold">{item.name}</p>
                <p
                  className=" text-sm absolute top-1 text-primary_color font-bold"
                  style={{
                    left: `${item.rating * 10}%`,
                  }}
                >
                  {item.rating * 10}%
                </p>
                <div className=" h-2 bg-gray-400 rounded-lg relative  ">
                  <div
                    data-aos="fade-right"
                    data-aos-delay="300"
                    style={{ width: `${item.rating * 10}%` }}
                    className={`h-full bg-primary_color text-white rounded-l-lg `}
                  ></div>
                  <span
                    data-aos="fade-right"
                    data-aos-delay="300"
                    className=" w-4 h-4 bg-primary_color  absolute -top-[50%] rounded-full "
                    style={{
                      left: `${item.rating * 10}%`,
                    }}
                  ></span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
