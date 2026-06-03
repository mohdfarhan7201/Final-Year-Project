import React from "react";
import HiringTrends from "./HiringTrends";
import CandidatesAnalytics from "./CandidatesAnalytics";
import Candidates from "../Candidates/CandidatesPage";
import WelcomeHR from "./WelcomeHR";

const Dashboard = () => {
  return (
    <div className="p-4 bg-[#f5f6fa] min-h-screen">

      <WelcomeHR />

      <div className="flex flex-col lg:flex-row gap-6 py-6">
        <HiringTrends />
        <CandidatesAnalytics />
      </div>
      <Candidates />
    </div>
  );
};

export default Dashboard;