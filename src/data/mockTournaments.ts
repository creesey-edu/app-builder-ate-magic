
import { Tournament } from "@/types/tournament";
import { playerPackages, teamPackages, coachPackages, organizationPackages } from "./tournamentPackages";

export const mockTournaments: Tournament[] = [
  {
    id: "t1",
    title: "Apex Legends Championship Series",
    slug: "apex-legends-championship",
    game: "Apex Legends",
    gameImage: "/placeholder.svg",
    description: "Compete in the ultimate Apex Legends tournament with the best players from around the world. Battle for glory and a share of the massive prize pool.",
    format: "Double Elimination",
    startDate: "2025-06-15T10:00:00Z",
    endDate: "2025-06-17T18:00:00Z",
    registrationDeadline: "2025-06-01T23:59:59Z",
    maxParticipants: 128,
    currentParticipants: 87,
    prizePool: "$50,000",
    prizes: [
      { place: "1st", amount: "$25,000" },
      { place: "2nd", amount: "$15,000" },
      { place: "3rd", amount: "$7,500" },
      { place: "4th", amount: "$2,500" }
    ],
    location: "online",
    streamUrl: "https://twitch.tv/angrygamer",
    packages: [...playerPackages, ...teamPackages, ...coachPackages, ...organizationPackages],
    rules: "Standard Apex Legends competitive ruleset. Full details provided after registration.",
    status: "upcoming",
    tags: ["fps", "battle-royale", "competitive", "esports"],
    organizerId: "org1",
    organizerName: "GlobalGaming",
    featuredImage: "/placeholder.svg"
  },
  {
    id: "t2",
    title: "Valorant Masters Invitational",
    slug: "valorant-masters",
    game: "Valorant",
    gameImage: "/placeholder.svg",
    description: "The premier Valorant tournament featuring the top teams competing for glory and prizes. Witness incredible plays and strategic masterpieces.",
    format: "Single Elimination",
    startDate: "2025-05-20T14:00:00Z",
    endDate: "2025-05-22T20:00:00Z",
    registrationDeadline: "2025-05-10T23:59:59Z",
    maxParticipants: 32,
    currentParticipants: 28,
    prizePool: "$35,000",
    prizes: [
      { place: "1st", amount: "$20,000" },
      { place: "2nd", amount: "$10,000" },
      { place: "3rd-4th", amount: "$2,500" }
    ],
    location: "hybrid",
    venueAddress: "Gaming Arena, 123 Esports Blvd, Los Angeles, CA",
    streamUrl: "https://twitch.tv/angrygamer",
    packages: [...playerPackages, ...teamPackages, ...coachPackages],
    rules: "Official Valorant competitive ruleset. Full details provided after registration.",
    status: "upcoming",
    tags: ["fps", "tactical", "competitive", "esports"],
    organizerId: "org2",
    organizerName: "TacticalGaming Esports",
    featuredImage: "/placeholder.svg"
  },
  {
    id: "t3",
    title: "League of Legends World Cup",
    slug: "lol-world-cup",
    game: "League of Legends",
    gameImage: "/placeholder.svg",
    description: "The most prestigious League of Legends tournament of the year. Teams from all regions compete for the world championship title.",
    format: "Group Stage + Single Elimination",
    startDate: "2025-07-10T12:00:00Z",
    endDate: "2025-07-25T20:00:00Z",
    registrationDeadline: "2025-06-15T23:59:59Z",
    maxParticipants: 24,
    currentParticipants: 16,
    prizePool: "$100,000",
    prizes: [
      { place: "1st", amount: "$50,000" },
      { place: "2nd", amount: "$25,000" },
      { place: "3rd", amount: "$15,000" },
      { place: "4th", amount: "$10,000" }
    ],
    location: "in-person",
    venueAddress: "Esports Arena, 456 Championship Ave, New York, NY",
    streamUrl: "https://twitch.tv/angrygamer",
    packages: [...teamPackages, ...coachPackages, ...organizationPackages],
    rules: "Official LCS ruleset applies. Full details provided after registration.",
    status: "upcoming",
    tags: ["moba", "team-based", "competitive", "esports"],
    organizerId: "org3",
    organizerName: "MOBA Masters",
    featuredImage: "/placeholder.svg"
  },
  {
    id: "t4",
    title: "Call of Duty: Warzone Showdown",
    slug: "cod-warzone-showdown",
    game: "Call of Duty: Warzone",
    gameImage: "/placeholder.svg",
    description: "Drop in and battle for supremacy in this high-stakes Warzone tournament. Solo and team formats available.",
    format: "Points-based System",
    startDate: "2025-04-18T16:00:00Z",
    endDate: "2025-04-20T22:00:00Z",
    registrationDeadline: "2025-04-15T23:59:59Z",
    maxParticipants: 150,
    currentParticipants: 95,
    prizePool: "$25,000",
    prizes: [
      { place: "1st", amount: "$12,000" },
      { place: "2nd", amount: "$6,000" },
      { place: "3rd", amount: "$4,000" },
      { place: "4th-5th", amount: "$1,500" }
    ],
    location: "online",
    streamUrl: "https://twitch.tv/angrygamer",
    packages: [...playerPackages, ...teamPackages],
    rules: "Custom Warzone tournament ruleset. Full details provided after registration.",
    status: "upcoming",
    tags: ["fps", "battle-royale", "competitive"],
    organizerId: "org4",
    organizerName: "Battlezone Events",
    featuredImage: "/placeholder.svg"
  },
  {
    id: "t5",
    title: "Fortnite Summer Cup",
    slug: "fortnite-summer-cup",
    game: "Fortnite",
    gameImage: "/placeholder.svg",
    description: "The biggest Fortnite event of the summer! Solos, duos, and squad formats with multiple qualification rounds.",
    format: "Qualifiers + Finals",
    startDate: "2025-06-05T15:00:00Z",
    endDate: "2025-06-12T21:00:00Z",
    registrationDeadline: "2025-05-25T23:59:59Z",
    maxParticipants: 200,
    currentParticipants: 145,
    prizePool: "$75,000",
    prizes: [
      { place: "1st", amount: "$30,000" },
      { place: "2nd", amount: "$20,000" },
      { place: "3rd", amount: "$10,000" },
      { place: "4th-5th", amount: "$5,000" },
      { place: "6th-10th", amount: "$1,000" }
    ],
    location: "online",
    streamUrl: "https://twitch.tv/angrygamer",
    packages: [...playerPackages, ...teamPackages, ...coachPackages, ...organizationPackages],
    rules: "Epic Games tournament ruleset. Full details provided after registration.",
    status: "upcoming",
    tags: ["battle-royale", "building", "competitive", "esports"],
    organizerId: "org5",
    organizerName: "Epic Tournament Organizers",
    featuredImage: "/placeholder.svg"
  }
];

export const getFeaturedTournaments = (): Tournament[] => {
  return mockTournaments.slice(0, 3);
};

export const getUpcomingTournaments = (): Tournament[] => {
  return mockTournaments.filter(tournament => tournament.status === "upcoming");
};

export const getTournamentBySlug = (slug: string): Tournament | undefined => {
  return mockTournaments.find(tournament => tournament.slug === slug);
};
