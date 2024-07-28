import React, { useEffect } from "react";
import Userdashboard from "../../components/dashboard/Userdashboard";
import { useMyContext } from "../../context/Context";

const Dashboard = () => {
  const { setopenMenu } = useMyContext();

  useEffect(() => {
    setopenMenu("Dashboard");
  }, []);

  return (
    <div className="">
      <Userdashboard />
    </div>
  );
};

export default Dashboard;
