
import { Activity } from "lucide-react";
import { PieChart, Pie, Cell, Legend } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { AnalyticsCard } from "./AnalyticsCard";
import { platformData } from "@/data/analyticsMockData";

export const PlatformDistributionChart = () => {
  return (
    <AnalyticsCard
      title="Platform Distribution"
      description="Viewership distribution across platforms"
      icon={Activity}
    >
      <ChartContainer config={{ platforms: {} }} className="h-[300px]">
        <PieChart>
          <Pie
            data={platformData}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            nameKey="name"
            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
          >
            {platformData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Legend />
          <ChartTooltip content={<ChartTooltipContent />} />
        </PieChart>
      </ChartContainer>
    </AnalyticsCard>
  );
};
