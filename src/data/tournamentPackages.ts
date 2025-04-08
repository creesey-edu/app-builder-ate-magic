
import { TournamentPackage } from "@/types/tournament";

export const playerPackages: TournamentPackage[] = [
  {
    id: "player-basic",
    name: "Basic Player Entry",
    price: 19.99,
    description: "Standard tournament entry for individual players",
    forType: "player",
    features: [
      "Tournament participation",
      "Digital participation certificate",
      "Access to tournament Discord channel"
    ]
  },
  {
    id: "player-premium",
    name: "Premium Player Entry",
    price: 39.99,
    description: "Enhanced tournament experience for serious players",
    forType: "player",
    isPopular: true,
    features: [
      "Tournament participation",
      "Digital participation certificate",
      "Access to tournament Discord channel",
      "Exclusive in-game badge",
      "Priority matchmaking"
    ]
  },
  {
    id: "player-pro",
    name: "Professional Player Entry",
    price: 79.99,
    description: "Complete tournament package for professional players",
    forType: "player",
    features: [
      "Tournament participation",
      "Digital participation certificate",
      "Access to tournament Discord channel",
      "Exclusive in-game badge",
      "Priority matchmaking",
      "1-hour coaching session with a pro player",
      "Custom player profile highlight"
    ]
  }
];

export const teamPackages: TournamentPackage[] = [
  {
    id: "team-basic",
    name: "Team Basic Entry",
    price: 89.99,
    description: "Standard tournament entry for teams (up to 5 players)",
    forType: "team",
    features: [
      "Tournament participation for up to 5 players",
      "Team profile on tournament page",
      "Access to tournament Discord channel"
    ]
  },
  {
    id: "team-premium",
    name: "Team Premium Entry",
    price: 149.99,
    description: "Enhanced tournament experience for competitive teams",
    forType: "team",
    isPopular: true,
    features: [
      "Tournament participation for up to 5 players",
      "Team profile on tournament page",
      "Access to tournament Discord channel",
      "Team banner display during matches",
      "Priority scheduling",
      "Custom team jersey discount"
    ]
  },
  {
    id: "team-pro",
    name: "Team Professional Entry",
    price: 299.99,
    description: "Complete tournament package for professional teams",
    forType: "team",
    features: [
      "Tournament participation for up to 5 players",
      "Team profile on tournament page",
      "Access to tournament Discord channel",
      "Team banner display during matches",
      "Priority scheduling",
      "Custom team jersey discount",
      "2-hour strategy session with a professional coach",
      "Featured team spotlight in tournament promotions"
    ]
  }
];

export const coachPackages: TournamentPackage[] = [
  {
    id: "coach-basic",
    name: "Coach Observer Pass",
    price: 29.99,
    description: "Basic access for coaches to observe tournament matches",
    forType: "coach",
    features: [
      "Access to observe all tournament matches",
      "Access to tournament Discord channel",
      "Digital coaching certificate"
    ]
  },
  {
    id: "coach-premium",
    name: "Coach Participation Pass",
    price: 59.99,
    description: "Enhanced access for active tournament coaches",
    forType: "coach",
    isPopular: true,
    features: [
      "Access to observe all tournament matches",
      "Access to tournament Discord channel",
      "Digital coaching certificate",
      "Ability to join team communications during matches",
      "Coach profile on tournament page"
    ]
  }
];

export const organizationPackages: TournamentPackage[] = [
  {
    id: "org-sponsor",
    name: "Bronze Sponsor",
    price: 499.99,
    description: "Basic sponsorship package for organizations",
    forType: "organization",
    features: [
      "Organization logo on tournament page",
      "1 social media mention",
      "Access to tournament data and analytics"
    ]
  },
  {
    id: "org-silver",
    name: "Silver Sponsor",
    price: 999.99,
    description: "Enhanced visibility for organization sponsors",
    forType: "organization",
    isPopular: true,
    features: [
      "Organization logo on tournament page",
      "3 social media mentions",
      "Access to tournament data and analytics",
      "Logo display during stream breaks",
      "1 custom announcement during tournament"
    ]
  },
  {
    id: "org-gold",
    name: "Gold Sponsor",
    price: 2499.99,
    description: "Premium sponsorship with maximum visibility",
    forType: "organization",
    features: [
      "Organization logo on tournament page",
      "5 social media mentions",
      "Access to tournament data and analytics",
      "Logo display during stream breaks",
      "3 custom announcements during tournament",
      "Branded segment during main event",
      "Logo on all tournament communications",
      "Exclusive meet & greet with top players"
    ]
  }
];

export const getAllPackages = (): TournamentPackage[] => {
  return [
    ...playerPackages,
    ...teamPackages,
    ...coachPackages,
    ...organizationPackages
  ];
};

export const getPackagesByType = (type: "player" | "team" | "coach" | "organization"): TournamentPackage[] => {
  switch (type) {
    case "player":
      return playerPackages;
    case "team":
      return teamPackages;
    case "coach":
      return coachPackages;
    case "organization":
      return organizationPackages;
    default:
      return [];
  }
};
