import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiFillHome,
  AiOutlineContacts,
  AiFillContacts,
  AiOutlineFileUnknown,
  AiFillFileUnknown,
  AiOutlineInfoCircle,
  AiFillInfoCircle,
  AiOutlineClose,
  AiFillGithub,
} from "react-icons/ai";
import {
  PiProjectorScreenChartLight,
  PiProjectorScreenChartFill,
} from "react-icons/pi";
import {
  BsPersonWorkspace,
  BsSignpostSplit,
  BsSignpostSplitFill,
} from "react-icons/bs";
import { BiMenuAltLeft } from "react-icons/bi";
import Logo from "../../assets/images/Logo1.png";
import { useDispatch, useSelector } from "react-redux";
import { setActiveNav } from "../../redux/features/miscellaneous";
import {
  CiFacebook,
  CiInstagram,
  CiLinkedin,
  CiTwitter,
  CiYoutube,
} from "react-icons/ci";

const navItem = [
  {
    title: "Experiance",
    path: "/experiance",
    icon1: <BsPersonWorkspace />,
    icon2: <PiProjectorScreenChartFill />,
  },
  {
    title: "Projects",
    path: "/projects",
    icon1: <PiProjectorScreenChartLight />,
    icon2: <PiProjectorScreenChartFill />,
  },
  {
    title: "Skills",
    path: "/skills",
    icon1: <AiOutlineFileUnknown />,
    icon2: <AiFillFileUnknown />,
  },
  {
    title: "Home",
    path: "/",
    icon1: <AiOutlineHome />,
    icon2: <AiFillHome />,
  },
  {
    title: "About",
    path: "/about",
    icon1: <AiOutlineInfoCircle />,
    icon2: <AiFillInfoCircle />,
  },
  {
    title: "Blogs",
    path: "/blogs",
    icon1: <BsSignpostSplit />,
    icon2: <BsSignpostSplitFill />,
  },
  {
    title: "Contact",
    path: "/contact",
    icon1: <AiOutlineContacts />,
    icon2: <AiFillContacts />,
  },
];

const socialMediaAccounts = [
  {
    icon: <CiLinkedin />,
    url: "https://www.linkedin.com/in/se-ashishgupta",
  },
  {
    icon: <AiFillGithub />,
    url: "https://www.github.com/se-ashishgupta",
  },
  {
    icon: <CiFacebook />,
    url: "https://www.facebook.com/seashishgupta",
  },
  {
    icon: <CiTwitter />,
    url: "/",
  },
  {
    icon: <CiInstagram />,
    url: "https://www.instagram.com/se_ashishgupta",
  },
  {
    icon: <CiYoutube />,
    url: "/",
  },
];

const Sidebar = () => {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  const dispatch = useDispatch();
  const { activeNav } = useSelector((state) => state.miscellaneous);
  const { user } = useSelector((state) => state.home);

  // PhoneView NavItem Handler
  const navItemHandler = (path) => {
    setSideBarOpen(false);
    dispatch(setActiveNav(path));
  };

  // Getting width and height
  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  // Nav Close on Desktop view Automatically Functionality
  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };

    window.addEventListener("resize", updateDimension);

    if (screenSize.width >= 768) {
      setSideBarOpen(false);
    }

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);

  // Back Scroll Stop Functionality
  useEffect(() => {
    if (sideBarOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [sideBarOpen]);

  return (
    <>
      {/* Desktop view Sidebar  */}
      <div className="h-full fixed top-0 left-0 -translate-x-96 md:translate-x-0 transition-all duration-300 z-30 ">
        {/* Logo  */}
        {/* <div className=" w-[3rem] h-[3rem] ml-6 mt-5 font-bold bg-opacity-70 rounded-full shadow-lg shadow-primary_color border-2 border-primary_color overflow-hidden ">
          <Link to={"/"} className=" ">
            <img src={Logo} alt="logo" className="h-full w-full" />
          </Link>
        </div> */}

        {/* Menu Item List  */}
        <div className="py-10 absolute left-1 top-[50%] translate-y-[-50%] flex flex-col gap-6 group w-[5.8rem]">
          {/* Overlay on Hover  */}
          <div className=" bg-black bg-opacity-70 group-hover:w-[16rem] transition-all duration-300 absolute left-0 top-[50%] h-[120%] translate-y-[-50%] opacity-0 group-hover:opacity-100 blur-3xl -z-10"></div>

          {/* Nav Item  */}

          {navItem.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className=" text-gray_color pl-[2rem] animate-slideRight group/item opacity-0"
              onClick={() => dispatch(setActiveNav(item.path))}
              style={{
                animationDelay: `${index * 300}ms`,
              }}
            >
              <div
                className={`flex transition-all duration-300 group-hover/item:translate-x-3`}
              >
                <span
                  className={`text-2xl group-hover/item:text-white ${
                    activeNav == item.path ? "font-bold text-primary_color" : ""
                  }`}
                >
                  {activeNav == item.path ? item.icon2 : item.icon1}
                </span>
                <span
                  style={{
                    letterSpacing: "1px",
                  }}
                  className={`text-xl opacity-0 group-hover:opacity-100 group-hover:pl-[2rem] group-hover:block transition-all duration-300 `}
                >
                  <p
                    className={`group-hover/item:text-white  ${
                      activeNav == item.path
                        ? "font-bold text-primary_color"
                        : ""
                    }`}
                  >
                    {item.title}
                  </p>
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Email Button  */}
        <div className=" absolute bottom-6 left-3">
          <Link
            to={`mailto:seashishgupta@gmail.com`}
            className=" text-white  font-semibold tracking-wide bg-primary_color px-3 py-1 border-2 border-primary_color rounded-lg hover:bg-transparent transition-all duration-300"
          >
            Email
          </Link>
        </div>
      </div>

      {/* Overlay */}
      <div
        className={`bg-black z-10 bg-opacity-50 w-full h-full fixed top-0 left-0 text-white ${
          sideBarOpen ? "translate-x-0" : "translate-x-[-100%]"
        } md:translate-x-[-100%]`}
        onClick={() => setSideBarOpen(false)}
      ></div>

      {/* MenuBar Icon  */}
      <div
        className="text-white fixed top-4 left-4 bg-primary_color p-2 rounded-full text-2xl border-2 border-primary_color hover:bg-transparent cursor-pointer transition-all duration-300 md:translate-x-[-150%] z-20"
        onClick={() => setSideBarOpen(!sideBarOpen)}
      >
        <BiMenuAltLeft />
      </div>

      {/*Phone View Sidebar*/}
      <div
        className={`bg-secondary_color fixed w-full top-0 h-full px-4 py-6 ${
          sideBarOpen ? "left-0" : "-left-[100%]"
        } transition-all duration-300 z-20`}
      >
        {/* Close Button Icon  */}
        <div
          className={`flex justify-start items-center  `}
          onClick={() => setSideBarOpen(false)}
        >
          <figure
            className={`w-min bg-white text-black p-2 rounded-full cursor-pointer transition-all duration-300`}
          >
            <AiOutlineClose />
          </figure>
        </div>

        {/* Nav content  */}
        <div className=" py-[1rem] flex flex-col item-center justify-between h-full">
          <div className=" space-y-6">
            {/* Logo  */}
            <div className="w-full flex items-center justify-center">
              <img
                src={Logo}
                alt="ashishgupta"
                className="h-[6rem] w-[6rem] border-4 border-primary_color rounded-full"
              />
            </div>

            {/* Nav Item  */}
            <div className="flex items-center justify-center">
              <div className="flex flex-col gap-2 items-center justify-center">
                {navItem.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    onClick={() => navItemHandler(item.path)}
                    className={`text-xl tracking-wide pb-1 hover:text-primary_color hover:font-bold transition-all ease-linear duration-300 hover:scale-110 relative after:content-[''] after:bg-white after:h-[2.5px] after:w-full after:absolute after:bottom-0 after:left-0 after:scale-0 hover:after:scale-100 after:origin-center after:transition-transform after:duration-300 ${
                      activeNav == item.path
                        ? "font-semibold after:scale-100 text-primary_color"
                        : "text-white "
                    }`}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center mb-4">
            {/* <button className=" text-white text-2xl font-semibold tracking-wide bg-primary_color px-4 py-1 border-2 border-primary_color rounded-lg hover:bg-transparent transition-all duration-300">
              Email
            </button> */}
            {/* Social Media  */}
            <div className="">
              <div className="flex flex-wrap items-center justify-center gap-2">
                {socialMediaAccounts.map((item, index) => (
                  <a
                    key={index}
                    className=" bg-secondary_color text-2xl p-1 rounded-full text-primary_color flex items-center justify-center border-[1px] transition-all  duration-300 border-primary_color hover:bg-transparent  hover:-translate-y-1 "
                    href={item.url}
                    target="blank"
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
