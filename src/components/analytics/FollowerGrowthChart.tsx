
import { Users } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { AnalyticsCard } from "./AnalyticsCard";
import { followerData } from "@/data/analyticsMockData";

export const FollowerGrowthChart = () => {
  return (
    <AnalyticsCard
      title="Follower Growth"
      description="Monthly follower growth trends"
      icon={Users}
    >
      <ChartContainer config={{ followers: {} }} className="h-[300px]">
        <LineChart data={followerData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Line 
            type="monotone" 
            dataKey="followers" 
            stroke="#8884d8" 
            activeDot={{ r: 8 }} 
            name="Followers"
          />
        </LineChart>
      </ChartContainer>
    </AnalyticsCard>
  );
};
