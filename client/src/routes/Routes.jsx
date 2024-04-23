import React from "react";
import { useRoutes } from "react-router-dom";
import User from "../pages/User";
import Admin from "../pages/Admin";
import Dashboard from "../pages/admin/Dashboard";
import Auth from "../pages/Auth";

const Home = React.lazy(() => import("../pages/user/Home"));
const Blogs = React.lazy(() => import("../pages/user/Blogs"));
const Contact = React.lazy(() => import("../pages/user/Contact"));
const Projects = React.lazy(() => import("../pages/user/Projects"));
const Skills = React.lazy(() => import("../pages/user/Skills"));
const Services = React.lazy(() => import("../pages/user/Services"));
const About = React.lazy(() => import("../pages/user/About"));
const NotFound = React.lazy(() => import("../pages/NotFound"));

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
    {
      path: "/auth",
      element: <Auth />,
    },
    {
      path: "/dashboard",
      element: <Admin />,
      children: [
        {
          index: true,
          element: <Dashboard />,
        },
      ],
    },
    { path: "*", element: <NotFound /> },
  ]);
  return element;
};

export default AppRoutes;
