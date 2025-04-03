
import { z } from "zod";

// Define the form schema with Zod
export const streamerProfileSchema = z.object({
  displayName: z.string().min(3, { message: "Display name must be at least 3 characters" }).max(30),
  bio: z.string().min(10, { message: "Bio must be at least 10 characters" }).max(300),
  twitchUsername: z.string().optional(),
  youtubeChannelId: z.string().optional(),
  kickUsername: z.string().optional(),
  discordUsername: z.string().min(2, { message: "Discord username is required" }),
  // In a real app you'd handle image upload differently
  profileImage: z.any().optional(),
});

export type StreamerProfileFormValues = z.infer<typeof streamerProfileSchema>;
