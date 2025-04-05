
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell
} from "recharts";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

// Mock data for analytics
const visitorData = [
  { name: "Jan", users: 4000, newUsers: 2400 },
  { name: "Feb", users: 3000, newUsers: 1398 },
  { name: "Mar", users: 2000, newUsers: 9800 },
  { name: "Apr", users: 2780, newUsers: 3908 },
  { name: "May", users: 1890, newUsers: 4800 },
  { name: "Jun", users: 2390, newUsers: 3800 },
  { name: "Jul", users: 3490, newUsers: 4300 }
];

const engagementData = [
  { name: "Streams", value: 400 },
  { name: "Forums", value: 300 },
  { name: "Events", value: 200 },
  { name: "Tournaments", value: 150 },
  { name: "News", value: 100 }
];

const contentCreationData = [
  { name: "Jan", streams: 65, posts: 25, videos: 35 },
  { name: "Feb", streams: 59, posts: 30, videos: 40 },
  { name: "Mar", streams: 80, posts: 40, videos: 45 },
  { name: "Apr", streams: 81, posts: 45, videos: 50 },
  { name: "May", streams: 56, posts: 35, videos: 30 },
  { name: "Jun", streams: 55, posts: 30, videos: 35 },
  { name: "Jul", streams: 40, posts: 20, videos: 25 }
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#9b87f5'];

const SystemAnalytics = () => {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Users
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15,782</div>
            <p className="text-xs text-muted-foreground">
              +20.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Active Streamers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">573</div>
            <p className="text-xs text-muted-foreground">
              +12% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Content Items
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,342</div>
            <p className="text-xs text-muted-foreground">
              +18.5% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Active Sessions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,263</div>
            <p className="text-xs text-muted-foreground">
              +5.7% from last month
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="visitors" className="space-y-4">
        <TabsList>
          <TabsTrigger value="visitors">Visitors</TabsTrigger>
          <TabsTrigger value="engagement">Engagement</TabsTrigger>
          <TabsTrigger value="content">Content Creation</TabsTrigger>
        </TabsList>
        
        <TabsContent value="visitors" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Visitor Analytics</CardTitle>
              <CardDescription>
                Monthly visitor statistics showing total and new users
              </CardDescription>
            </CardHeader>
            <CardContent className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={visitorData}
                  margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Area type="monotone" dataKey="users" stackId="1" stroke="#8884d8" fill="#8884d8" />
                  <Area type="monotone" dataKey="newUsers" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="engagement" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Engagement Distribution</CardTitle>
              <CardDescription>
                Distribution of user engagement across platform features
              </CardDescription>
            </CardHeader>
            <CardContent className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={engagementData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {engagementData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="content" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Content Creation Metrics</CardTitle>
              <CardDescription>
                Monthly content creation by type
              </CardDescription>
            </CardHeader>
            <CardContent className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={contentCreationData}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="streams" stackId="a" fill="#8884d8" />
                  <Bar dataKey="posts" stackId="a" fill="#82ca9d" />
                  <Bar dataKey="videos" stackId="a" fill="#ffc658" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SystemAnalytics;
