
export interface TournamentPrize {
  place: string;
  amount: string;
  currency?: string;
}

export interface TournamentPackage {
  id: string;
  name: string;
  price: number;
  description: string;
  forType: "player" | "team" | "coach" | "organization";
  features: string[];
  isPopular?: boolean;
}

export interface Tournament {
  id: string;
  title: string;
  slug: string;
  game: string;
  gameImage?: string;
  description: string;
  format: string; // "Single Elimination", "Double Elimination", "Round Robin", etc.
  startDate: string;
  endDate: string;
  registrationDeadline: string;
  maxParticipants: number;
  currentParticipants: number;
  prizePool: string;
  prizes: TournamentPrize[];
  location: "online" | "hybrid" | "in-person";
  venueAddress?: string;
  streamUrl?: string;
  packages: TournamentPackage[];
  rules: string;
  status: "upcoming" | "ongoing" | "completed" | "cancelled";
  tags: string[];
  organizerId: string;
  organizerName: string;
  featuredImage?: string;
}
