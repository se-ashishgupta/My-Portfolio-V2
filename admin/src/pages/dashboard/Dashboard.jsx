import React, { useEffect } from "react";
import "./Userdashboard.css";
import BarGraph from "./BarChart";
import Line1Graph from "./LineChart1";
import Line2Graph from "./LineChart2";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { FaChartBar, FaRupeeSign, FaUserPlus } from "react-icons/fa";
import { AiOutlineClockCircle } from "react-icons/ai";
import StatCard from "./StatCard";
import { useDispatch, useSelector } from "react-redux";
import { getDashboardStatsThunkMiddleware } from "../../redux/features/dashboard";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { dashboardLoader } = useSelector((state) => state.loader);
  const { dashboardStats } = useSelector((state) => state.dashboard);

  useEffect(() => {
    dispatch(getDashboardStatsThunkMiddleware());
  }, []);

  const statCard = [
    {
      id: "123",
      title: "Views",
      icon: <MdOutlineLibraryBooks />,
      value: dashboardStats?.views || 0,
      growth: "+55% than last week",
    },
    {
      id: "1234",
      title: "Visitors Count",
      icon: <MdOutlineLibraryBooks />,
      value: dashboardStats?.visitorsCount || 0,
      growth: "+55% than last week",
    },
    {
      id: "12345",
      title: "Inquiries",
      icon: <MdOutlineLibraryBooks />,
      value: 281,
      growth: "+55% than last week",
    },
    {
      id: "123456",
      title: "Inquiries",
      icon: <MdOutlineLibraryBooks />,
      value: 281,
      growth: "+55% than last week",
    },
  ];

  return (
    <div className="">
      {/* Stat Card  */}
      <div className="grid text-text_color1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-10 transition-all duration-300">
        {statCard.map((item, index) => (
          <StatCard item={item} key={`Stats-${index}-${item.id}`} />
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
              <h5 className="text-text_color2">Numbers are in lakhs</h5>
            </div>
            <hr className="line-style my-[1rem]"></hr>
            <div className=" flex items-center gap-1">
              <figure className=" text-text_color2">
                <AiOutlineClockCircle />
              </figure>
              <p className=" text-text_color2"> updated one day ago</p>
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
              <h5 className="text-text_color2">
                <span className=" font-semibold text-green-600">(-15%)</span>{" "}
                increase in current month.
              </h5>
            </div>
            <hr className="line-style my-[1rem]"></hr>
            <div className=" flex items-center gap-1">
              <figure className=" text-text_color2">
                <AiOutlineClockCircle />
              </figure>
              <p className=" text-text_color2">updated 4 min ago</p>
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
              <h5 className="text-text_color2">
                <span className=" font-semibold text-green-600">(-10%)</span>{" "}
                decrease in defaulters.
              </h5>
            </div>
            <hr className="line-style my-[1rem]"></hr>
            <div className=" flex items-center gap-1">
              <figure className=" text-text_color2">
                <AiOutlineClockCircle />
              </figure>
              <p className=" text-text_color2">updated 10 min ago</p>
            </div>
          </div>
        </div>
      </div>

      {/* Table  */}
      {/* <Table /> */}
    </div>
  );
};

export default Dashboard;
