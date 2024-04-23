import React from "react";
import HomeAbout from "../../components/home/About";
import PageHeader from "../../components/layout/PageHeader";

const About = () => {
  return (
    <div>
      <PageHeader title={"About"} subTitle={"Know More About Me!"} />
      <HomeAbout />
    </div>
  );
};

export default About;
