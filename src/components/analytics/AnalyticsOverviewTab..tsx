
import { ViewerStatsChart } from "./ViewerStatsChart";
import { FollowerGrowthChart } from "./FollowerGrowthChart";
import { PlatformDistributionChart } from "./PlatformDistributionChart";
import { TopStreamsTable } from "./TopStreamsTable";

export const AnalyticsOverviewTab = () => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ViewerStatsChart />
        <FollowerGrowthChart />
        <PlatformDistributionChart />
        
        {/* Top Performing Streams spans full width */}
        <div className="col-span-1 md:col-span-2">
          <TopStreamsTable />
        </div>
      </div>
    </div>
  );
};