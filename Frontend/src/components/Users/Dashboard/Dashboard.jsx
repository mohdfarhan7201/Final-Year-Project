import React from "react";
import WelcomeBanner from "./WelcomeBanner";
import Roadmap from "./Roadmap";

const Dashboard = () => {
  return (
    <div className="p-4 bg-[#f5f6fa] min-h-screen">
      <WelcomeBanner />
      <Roadmap />
    </div>
  );
};

export default Dashboard;