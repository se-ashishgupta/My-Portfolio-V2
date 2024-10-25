import React, { useState } from "react";

const ProfileTabSidebar = ({ profileTab, setProfileTab }) => {
  const tabs = [
    {
      title: "General Info",
    },
    {
      title: "Address",
    },
    {
      title: "About",
    },
  ];

  return (
    <div className=" text-text_color1">
      <div className="flex gap-4">
        {tabs.map((tab, index) => (
          <div
            onClick={() => setProfileTab(tab.title)}
            key={index}
            className={`font-semibold ${
              profileTab === tab.title &&
              "border-b-[3.5px] border-primary_color"
            }  cursor-pointer pb-2`}
          >
            {tab.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileTabSidebar;
