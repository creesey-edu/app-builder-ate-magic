
import { Eye, Users, Clock, ThumbsUp } from "lucide-react";
import { QuickStatCard } from "./QuickStatCard";

export const QuickStatsRow = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <QuickStatCard
        title="Total Views"
        value="36,200"
        trend={{ value: "+12.5% from last period" }}
        icon={Eye}
      />
      
      <QuickStatCard
        title="New Followers"
        value="1,420"
        trend={{ value: "+8.3% from last period" }}
        icon={Users}
      />
      
      <QuickStatCard
        title="Avg. Watch Time"
        value="19 min"
        trend={{ value: "+3.7% from last period" }}
        icon={Clock}
      />
      
      <QuickStatCard
        title="Engagement Rate"
        value="22.4%"
        trend={{ value: "+5.2% from last period" }}
        icon={ThumbsUp}
      />
    </div>
  );
};
