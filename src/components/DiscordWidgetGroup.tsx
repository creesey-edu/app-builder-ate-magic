import { DiscordWidget } from "./DiscordWidget";

// Load server IDs from the environment variable and split them into an array
const DISCORD_GUILD_IDS = import.meta.env.VITE_DISCORD_GUILD_IDS?.split(",") || [];

export const DiscordWidgetGroup = () => {
  return (
   //  <div
   //    className="grid"
   //    style={{
   //      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
   //      gap: "15px",
   //    }}
   //  >
   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[10px]">
      {DISCORD_GUILD_IDS.map((id) => (
        <DiscordWidget key={id} serverId={id.trim()} />
      ))}
    </div>
  );
};
