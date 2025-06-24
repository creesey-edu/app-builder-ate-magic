import { DiscordWidget } from './DiscordWidget';

export const DiscordWidgetGroup = () => {
  // Get ONLY client/public server IDs from environment
  const rawGuildIds = import.meta.env.VITE_DISCORD_GUILD_IDS;
  const clientServerIds = rawGuildIds?.split(",").filter(Boolean) || [];
  
  // Admin server should NOT be included in public display
  const adminServerId = import.meta.env.VITE_ADMIN_SERVER_GUILD_ID;

  // Enhanced debug logging
  console.log("=== DiscordWidgetGroup Debug ===");
  console.log("Raw VITE_DISCORD_GUILD_IDS:", rawGuildIds);
  console.log("Type of raw value:", typeof rawGuildIds);
  console.log("Is undefined?", rawGuildIds === undefined);
  console.log("Parsed clientServerIds:", clientServerIds);
  console.log("Length:", clientServerIds.length);
  console.log("Admin server ID:", adminServerId);
  console.log("All import.meta.env:", import.meta.env);

  // Only display client servers - NO fallback to admin server
  if (clientServerIds.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600 dark:text-gray-300">
          No public Discord servers configured.
        </p>
        <div className="mt-4 text-sm text-gray-500">
          <p>Raw value: {String(rawGuildIds)}</p>
          <p>Parsed length: {clientServerIds.length}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {clientServerIds.map((serverId) => (
        <DiscordWidget key={serverId} serverId={serverId} />
      ))}
    </div>
  );
};