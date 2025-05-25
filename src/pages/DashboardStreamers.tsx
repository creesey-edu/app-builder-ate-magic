
import { StreamersTab } from "@/components/streamers/StreamersTab";

const DashboardStreamers = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Streamers Management</h1>
        <p className="text-muted-foreground">
          Manage and view streamer profiles in your dashboard
        </p>
      </div>
      <StreamersTab />
    </div>
  );
};

export default DashboardStreamers;
