import OverviewCards from "./OverviewCards";
import HiringTrends from "../Dashboard/HiringTrends";
import SourceDistribution from "./SourceDistribution";

export default function Analytics() {
  return (
    <div className="p-4 bg-[#f5f6fa] min-h-screen">
      <OverviewCards />
       <div className="flex gap-4 mt-4 bg-[#f5f6fa]">
      <HiringTrends />
      <SourceDistribution />
    </div>
    </div>
  );
}