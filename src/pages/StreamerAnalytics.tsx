
import { useState } from "react";
import { PageLayout } from "@/components/PageLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { QuickStatsRow } from "@/components/analytics/QuickStatsRow";
import { AnalyticsOverviewTab } from "@/components/analytics/AnalyticsOverviewTab.";
import { PlaceholderTab } from "@/components/analytics/PlaceholderTab";

const StreamerAnalytics = () => {
  const [timeRange, setTimeRange] = useState("7d");

  return (
    <PageLayout
      title="Streamer Analytics"
      description="Track your streaming performance and audience growth"
    >
      <div className="space-y-6">
        {/* Time range selector */}
        <div className="flex justify-end">
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select time range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="1m">Last month</SelectItem>
              <SelectItem value="3m">Last 3 months</SelectItem>
              <SelectItem value="6m">Last 6 months</SelectItem>
              <SelectItem value="1y">Last year</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Quick stats section */}
        <QuickStatsRow />

        {/* Main analytics tabs */}
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="audience">Audience</TabsTrigger>
            <TabsTrigger value="content">Content</TabsTrigger>
            <TabsTrigger value="revenue">Revenue</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview">
            <AnalyticsOverviewTab />
          </TabsContent>
          
          <TabsContent value="audience">
            <PlaceholderTab 
              title="Audience Demographics"
              description="This section will show detailed audience information when available"
              message="Audience analytics will be available once your channel has more view data"
            />
          </TabsContent>
          
          <TabsContent value="content">
            <PlaceholderTab 
              title="Content Performance"
              description="This section will show detailed content analytics when available"
              message="Content analytics will be available once you have more streaming history"
            />
          </TabsContent>
          
          <TabsContent value="revenue">
            <PlaceholderTab 
              title="Revenue Analytics"
              description="This section will show detailed revenue information when available"
              message="Revenue analytics are available for Elite streamers or once you start earning through the platform"
            />
          </TabsContent>
        </Tabs>
      </div>
    </PageLayout>
  );
};

export default StreamerAnalytics;