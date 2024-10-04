import React from "react";
import "./Userdashboard.css";
import BarGraph from "./BarChart";
import Line1Graph from "./LineChart1";
import Line2Graph from "./LineChart2";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { FaChartBar, FaRupeeSign, FaUserPlus } from "react-icons/fa";
import { AiOutlineClockCircle } from "react-icons/ai";
// import Table from "../../components/dashboard/Table";

const statCard = [
  {
    title: "Inquiries",
    icon: <MdOutlineLibraryBooks />,
    value: 281,
    growth: "+55% than last week",
  },
  {
    title: "Inquiries",
    icon: <MdOutlineLibraryBooks />,
    value: 281,
    growth: "+55% than last week",
  },
  {
    title: "Inquiries",
    icon: <MdOutlineLibraryBooks />,
    value: 281,
    growth: "+55% than last week",
  },
  {
    title: "Inquiries",
    icon: <MdOutlineLibraryBooks />,
    value: 281,
    growth: "+55% than last week",
  },
];

const UserDashboard = () => {
  return (
    <div className="">
      {/* Stat Card  */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 my-10 transition-all duration-300">
        {statCard.map((item, map) => (
          <div className="relative border border-primary_color shadow-md shadow-primary_color  rounded-xl mt-4">
            {/* Small box with Icon  */}
            <div className="absolute left-4 -top-5 bg-black text-white p-6 rounded-xl">
              <figure className=" text-2xl">
                <MdOutlineLibraryBooks />
              </figure>
            </div>

            {/* Text Data Content  */}
            <div className="p-2 shadow-sm">
              <div className="row">
                <div>
                  <div className=" text-right">
                    <p className="text-lg text-white"> Inquiries</p>
                    <h5 className="font-bold text-3xl text-white">281</h5>
                  </div>
                  <hr className="line-style my-[1.5rem]"></hr>
                  <div className=" flex items-center gap-1">
                    <p className=" text-green-600 text-lg font-semibold">
                      +55%
                    </p>
                    <p className="text-lg text-gray-400"> than last week</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts  */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-24 transition-all duration-300">
        <div className="p-1 relative border border-primary_color shadow-md shadow-primary_color rounded-2xl mt-16">
          {/* Chart  */}
          <div className="p-4 shadow-sm">
            <BarGraph />
          </div>

          {/* Text  */}
          <div className="px-4 py-5">
            <div className="">
              <p className="font-bold text-gray-800">Daily Repays</p>
              <h5 className="text-gray-400">Numbers are in lakhs</h5>
            </div>
            <hr className="line-style my-[1rem]"></hr>
            <div className=" flex items-center gap-1">
              <figure className=" text-gray-400">
                <AiOutlineClockCircle />
              </figure>
              <p className=" text-gray-400"> updated one day ago</p>
            </div>
          </div>
        </div>

        <div className="p-1 relative border border-primary_color shadow-md shadow-primary_color rounded-2xl mt-16">
          {/* Chart  */}
          <div className="p-4 shadow-sm">
            <Line1Graph />
          </div>

          {/* Text  */}
          <div className="px-4 py-5">
            <div className="">
              <p className="font-bold text-gray-800">Monthly Sales</p>
              <h5 className="text-gray-400">
                <span className=" font-semibold text-green-600">(-15%)</span>{" "}
                increase in current month.
              </h5>
            </div>
            <hr className="line-style my-[1rem]"></hr>
            <div className=" flex items-center gap-1">
              <figure className=" text-gray-400">
                <AiOutlineClockCircle />
              </figure>
              <p className=" text-gray-400">updated 4 min ago</p>
            </div>
          </div>
        </div>

        <div className="p-1 relative border border-primary_color shadow-md shadow-primary_color rounded-2xl mt-16">
          {/* Chart  */}
          <div className="p-4 shadow-sm">
            <Line2Graph />
          </div>

          {/* Text  */}
          <div className="px-4 py-5">
            <div className="">
              <p className="font-bold text-gray-800">Completed Loans</p>
              <h5 className="text-gray-400">
                <span className=" font-semibold text-green-600">(-10%)</span>{" "}
                decrease in defaulters.
              </h5>
            </div>
            <hr className="line-style my-[1rem]"></hr>
            <div className=" flex items-center gap-1">
              <figure className=" text-gray-400">
                <AiOutlineClockCircle />
              </figure>
              <p className=" text-gray-400">updated 10 min ago</p>
            </div>
          </div>
        </div>
      </div>

      {/* Table  */}
      {/* <Table /> */}
    </div>
  );
};

export default UserDashboard;
