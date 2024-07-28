import React from "react";
import { useRoutes } from "react-router-dom";
import User from "../components/layout/User";
import NotFound from "../pages/NotFound";

const Home = React.lazy(() => import("../pages/user/home/Home"));
const Blogs = React.lazy(() => import("../pages/user/Blogs"));
const Contact = React.lazy(() => import("../pages/user/Contact"));
const Projects = React.lazy(() => import("../pages/user/Projects"));
const Skills = React.lazy(() => import("../pages/user/Skills"));
const Services = React.lazy(() => import("../pages/user/Services"));
const About = React.lazy(() => import("../pages/user/about/About"));

const AppRoutes = () => {
  let element = useRoutes([
    {
      path: "/",
      element: <User />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "skills",
          element: <Skills />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "services",
          element: <Services />,
        },
        {
          path: "projects",
          element: <Projects />,
        },
        {
          path: "blogs",
          element: <Blogs />,
        },
      ],
    },

    { path: "*", element: <NotFound /> },
  ]);
  return element;
};

export default AppRoutes;
