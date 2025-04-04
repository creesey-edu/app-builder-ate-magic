
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

// Verification status for streamer profiles
export enum VerificationStatus {
  PENDING = "pending",
  VERIFIED = "verified",
  REJECTED = "rejected"
}

// Extended schema that includes verification data (for API/backend)
export const streamerProfileWithVerificationSchema = streamerProfileSchema.extend({
  id: z.string(),
  createdAt: z.date(),
  verificationStatus: z.nativeEnum(VerificationStatus).default(VerificationStatus.PENDING),
  verifiedAt: z.date().optional(),
  rejectionReason: z.string().optional(),
});

export type StreamerProfileWithVerification = z.infer<typeof streamerProfileWithVerificationSchema>;

// Mock data for streamers awaiting verification
export const mockPendingStreamers: StreamerProfileWithVerification[] = [
  {
    id: "streamer-1",
    displayName: "GameMaster64",
    bio: "Professional FPS player with 5+ years experience in competitive gaming.",
    twitchUsername: "gamemaster64",
    discordUsername: "gamemaster64#1234",
    createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
    verificationStatus: VerificationStatus.PENDING,
  },
  {
    id: "streamer-2",
    displayName: "RPGQueen",
    bio: "RPG enthusiast and community builder. I stream story-rich games and help new players.",
    youtubeChannelId: "rpgqueen123",
    discordUsername: "rpgqueen#4567",
    createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), // 1 day ago
    verificationStatus: VerificationStatus.PENDING,
  },
  {
    id: "streamer-3",
    displayName: "SpeedRunLegend",
    bio: "Speedrunner trying to break world records in classic games. Community challenges every Friday!",
    twitchUsername: "speedrunlegend",
    kickUsername: "speedrunlegend",
    discordUsername: "speedrun#9999",
    createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000), // 5 days ago
    verificationStatus: VerificationStatus.PENDING,
  },
];
