
import { useState } from "react";
import { PageLayout } from "@/components/PageLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, Legend } from "recharts";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Activity, Users, Star, TrendingUp, Eye, ThumbsUp, Clock } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

// Mock data for viewer statistics
const viewerData = [
  { name: "Mon", views: 3200, uniqueViewers: 1250, avgWatchTime: 15 },
  { name: "Tue", views: 4500, uniqueViewers: 1800, avgWatchTime: 18 },
  { name: "Wed", views: 3800, uniqueViewers: 1500, avgWatchTime: 14 },
  { name: "Thu", views: 5100, uniqueViewers: 2100, avgWatchTime: 19 },
  { name: "Fri", views: 6200, uniqueViewers: 2600, avgWatchTime: 22 },
  { name: "Sat", views: 7500, uniqueViewers: 3200, avgWatchTime: 25 },
  { name: "Sun", views: 5900, uniqueViewers: 2400, avgWatchTime: 20 },
];

// Mock data for follower growth
const followerData = [
  { name: "Jan", followers: 1200 },
  { name: "Feb", followers: 1600 },
  { name: "Mar", followers: 2100 },
  { name: "Apr", followers: 2400 },
  { name: "May", followers: 3100 },
  { name: "Jun", followers: 3800 },
  { name: "Jul", followers: 4300 },
];

// Mock data for platform distribution
const platformData = [
  { name: "Twitch", value: 65, color: "#9146FF" },
  { name: "YouTube", value: 25, color: "#FF0000" },
  { name: "Kick", value: 10, color: "#53FC18" },
];

// Mock data for top streams
const topStreamsData = [
  { 
    id: 1, 
    title: "Call of Duty Tournament Finals", 
    date: "2025-04-01", 
    views: 12500, 
    platform: "Twitch",
    duration: "4h 15m",
    engagement: "High"
  },
  { 
    id: 2, 
    title: "Minecraft Building Challenge", 
    date: "2025-03-28", 
    views: 8700, 
    platform: "YouTube",
    duration: "3h 45m",
    engagement: "Medium"
  },
  { 
    id: 3, 
    title: "League of Legends Ranked Climb", 
    date: "2025-03-25", 
    views: 9300, 
    platform: "Twitch",
    duration: "5h 30m",
    engagement: "High"
  },
  { 
    id: 4, 
    title: "Fortnite Community Event", 
    date: "2025-03-22", 
    views: 7800, 
    platform: "Kick",
    duration: "3h 20m",
    engagement: "Medium"
  },
  { 
    id: 5, 
    title: "Horror Game Night", 
    date: "2025-03-19", 
    views: 6500, 
    platform: "YouTube",
    duration: "4h 05m",
    engagement: "High"
  },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A259FF"];

const StreamerAnalytics = () => {
  const [timeRange, setTimeRange] = useState("7d");
  
  // Helper functions for platform badge colors
  const getPlatformBadgeColor = (platform: string) => {
    switch (platform) {
      case "Twitch":
        return "bg-purple-100 text-purple-800 hover:bg-purple-100";
      case "YouTube":
        return "bg-red-100 text-red-800 hover:bg-red-100";
      case "Kick":
        return "bg-green-100 text-green-800 hover:bg-green-100";
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-100";
    }
  };
  
  const getEngagementBadgeColor = (engagement: string) => {
    switch (engagement) {
      case "High":
        return "bg-green-100 text-green-800 hover:bg-green-100";
      case "Medium":
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-100";
      case "Low":
        return "bg-red-100 text-red-800 hover:bg-red-100";
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-100";
    }
  };

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

        {/* Quick stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Views</p>
                  <h3 className="text-2xl font-bold">36,200</h3>
                  <p className="text-xs text-green-600 flex items-center mt-1">
                    <TrendingUp className="h-3 w-3 mr-1" /> +12.5% from last period
                  </p>
                </div>
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">New Followers</p>
                  <h3 className="text-2xl font-bold">1,420</h3>
                  <p className="text-xs text-green-600 flex items-center mt-1">
                    <TrendingUp className="h-3 w-3 mr-1" /> +8.3% from last period
                  </p>
                </div>
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Avg. Watch Time</p>
                  <h3 className="text-2xl font-bold">19 min</h3>
                  <p className="text-xs text-green-600 flex items-center mt-1">
                    <TrendingUp className="h-3 w-3 mr-1" /> +3.7% from last period
                  </p>
                </div>
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Engagement Rate</p>
                  <h3 className="text-2xl font-bold">22.4%</h3>
                  <p className="text-xs text-green-600 flex items-center mt-1">
                    <TrendingUp className="h-3 w-3 mr-1" /> +5.2% from last period
                  </p>
                </div>
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <ThumbsUp className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main analytics tabs */}
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="audience">Audience</TabsTrigger>
            <TabsTrigger value="content">Content</TabsTrigger>
            <TabsTrigger value="revenue">Revenue</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Viewer Statistics */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="h-5 w-5 text-primary" />
                    Viewer Statistics
                  </CardTitle>
                  <CardDescription>
                    Views and unique viewers over time
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={{ views: {}, uniqueViewers: {} }} className="h-[300px]">
                    <BarChart data={viewerData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Bar dataKey="views" fill="#8884d8" name="Total Views" />
                      <Bar dataKey="uniqueViewers" fill="#82ca9d" name="Unique Viewers" />
                    </BarChart>
                  </ChartContainer>
                </CardContent>
              </Card>
              
              {/* Follower Growth */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    Follower Growth
                  </CardTitle>
                  <CardDescription>
                    Monthly follower growth trends
                  </CardDescription>
                </CardHeader>
                <CardContent>
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
                </CardContent>
              </Card>
              
              {/* Platform Distribution */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="h-5 w-5 text-primary" />
                    Platform Distribution
                  </CardTitle>
                  <CardDescription>
                    Viewership distribution across platforms
                  </CardDescription>
                </CardHeader>
                <CardContent>
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
                </CardContent>
              </Card>
              
              {/* Top Performing Streams */}
              <Card className="col-span-1 md:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-primary" />
                    Top Performing Streams
                  </CardTitle>
                  <CardDescription>
                    Your most viewed and engaging content
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Stream Title</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Views</TableHead>
                        <TableHead>Platform</TableHead>
                        <TableHead>Duration</TableHead>
                        <TableHead>Engagement</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {topStreamsData.map((stream) => (
                        <TableRow key={stream.id}>
                          <TableCell className="font-medium">{stream.title}</TableCell>
                          <TableCell>{new Date(stream.date).toLocaleDateString()}</TableCell>
                          <TableCell>{stream.views.toLocaleString()}</TableCell>
                          <TableCell>
                            <Badge variant="secondary" className={getPlatformBadgeColor(stream.platform)}>
                              {stream.platform}
                            </Badge>
                          </TableCell>
                          <TableCell>{stream.duration}</TableCell>
                          <TableCell>
                            <Badge variant="outline" className={getEngagementBadgeColor(stream.engagement)}>
                              {stream.engagement}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="audience">
            <Card>
              <CardHeader>
                <CardTitle>Audience Demographics</CardTitle>
                <CardDescription>
                  This section will show detailed audience information when available
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center h-40 bg-muted/20 rounded-md">
                  <p className="text-muted-foreground text-sm">
                    Audience analytics will be available once your channel has more view data
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="content">
            <Card>
              <CardHeader>
                <CardTitle>Content Performance</CardTitle>
                <CardDescription>
                  This section will show detailed content analytics when available
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center h-40 bg-muted/20 rounded-md">
                  <p className="text-muted-foreground text-sm">
                    Content analytics will be available once you have more streaming history
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="revenue">
            <Card>
              <CardHeader>
                <CardTitle>Revenue Analytics</CardTitle>
                <CardDescription>
                  This section will show detailed revenue information when available
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center h-40 bg-muted/20 rounded-md">
                  <p className="text-muted-foreground text-sm">
                    Revenue analytics are available for Elite streamers or once you start earning through the platform
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </PageLayout>
  );
};

export default StreamerAnalytics;
