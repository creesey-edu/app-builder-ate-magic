
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getTournamentBySlug } from "@/data/mockTournaments";
import { PageLayout } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { 
  Calendar, 
  CalendarClock, 
  MapPin, 
  Trophy, 
  Users, 
  Ticket,
  Info,
  BookOpen,
  Share2
} from "lucide-react";
import { TournamentRegistrationModal } from "@/components/tournaments/TournamentRegistrationModal";

const TournamentDetails = () => {
  const { slug } = useParams<{ slug: string }>();
  const [registrationOpen, setRegistrationOpen] = useState(false);
  
  const { data: tournament, isLoading, error } = useQuery({
    queryKey: ["tournament", slug],
    queryFn: () => getTournamentBySlug(slug || ""),
  });
  
  if (isLoading) {
    return (
      <PageLayout title="Tournament Details" description="Loading tournament information...">
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      </PageLayout>
    );
  }
  
  if (error || !tournament) {
    return (
      <PageLayout title="Tournament Not Found" description="We couldn't find the tournament you're looking for">
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold mb-4">Tournament Not Found</h2>
          <p className="mb-8">The tournament you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <Link to="/tournaments">Browse All Tournaments</Link>
          </Button>
        </div>
      </PageLayout>
    );
  }
  
  const isRegistrationOpen = new Date(tournament.registrationDeadline) > new Date();
  const isTournamentUpcoming = tournament.status === "upcoming";
  
  return (
    <PageLayout 
      title={tournament.title} 
      description={tournament.description}
    >
      <div className="space-y-8">
        <div className="relative rounded-xl overflow-hidden">
          <div className="h-64 md:h-80 w-full">
            <img 
              src={tournament.featuredImage || "/placeholder.svg"} 
              alt={tournament.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
          
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <img 
                  src={tournament.gameImage || "/placeholder.svg"} 
                  alt={tournament.game}
                  className="w-10 h-10 rounded-full border-2 border-background"
                />
                <span className="text-lg font-medium">{tournament.game}</span>
                <Badge className="ml-auto">{tournament.status}</Badge>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold">{tournament.title}</h1>
              
              <div className="flex flex-wrap gap-6 text-sm md:text-base mt-2">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span>
                    {new Date(tournament.startDate).toLocaleDateString(undefined, {
                      month: "long",
                      day: "numeric",
                      year: "numeric"
                    })}
                  </span>
                </div>
                
                <div className="flex items-center gap-1">
                  <Trophy className="h-4 w-4 text-muted-foreground" />
                  <span>{tournament.prizePool}</span>
                </div>
                
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span>
                    {tournament.currentParticipants}/{tournament.maxParticipants} Participants
                  </span>
                </div>
                
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>
                    {tournament.location === "online" 
                      ? "Online" 
                      : tournament.location === "hybrid" 
                        ? "Hybrid" 
                        : "In-person"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1 order-2 md:order-1">
            <Tabs defaultValue="overview">
              <TabsList className="w-full grid grid-cols-4">
                <TabsTrigger value="overview" className="flex gap-1 items-center">
                  <Info className="h-4 w-4" />
                  <span className="hidden sm:inline">Overview</span>
                </TabsTrigger>
                <TabsTrigger value="schedule" className="flex gap-1 items-center">
                  <CalendarClock className="h-4 w-4" />
                  <span className="hidden sm:inline">Schedule</span>
                </TabsTrigger>
                <TabsTrigger value="prizes" className="flex gap-1 items-center">
                  <Trophy className="h-4 w-4" />
                  <span className="hidden sm:inline">Prizes</span>
                </TabsTrigger>
                <TabsTrigger value="rules" className="flex gap-1 items-center">
                  <BookOpen className="h-4 w-4" />
                  <span className="hidden sm:inline">Rules</span>
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="pt-6 space-y-6">
                <div className="prose dark:prose-invert max-w-none">
                  <h3>About This Tournament</h3>
                  <p>{tournament.description}</p>
                  
                  <h3>Tournament Format</h3>
                  <p>This tournament will follow a {tournament.format} format. Teams will compete in a series of matches to determine the champion.</p>
                  
                  {tournament.location === "in-person" && tournament.venueAddress && (
                    <>
                      <h3>Venue Information</h3>
                      <p>{tournament.venueAddress}</p>
                    </>
                  )}
                  
                  {tournament.streamUrl && (
                    <>
                      <h3>Live Stream</h3>
                      <p>
                        This tournament will be streamed live on{" "}
                        <a href={tournament.streamUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                          our official channel
                        </a>
                      </p>
                    </>
                  )}
                </div>
              </TabsContent>
              
              <TabsContent value="schedule" className="pt-6 space-y-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Tournament Schedule</h3>
                  
                  <div className="grid gap-4">
                    <div className="flex flex-col border rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div className="font-medium">Registration Period</div>
                        <Badge variant="outline">Current Phase</Badge>
                      </div>
                      <div className="text-sm text-muted-foreground mt-1">
                        Closes on {new Date(tournament.registrationDeadline).toLocaleDateString(undefined, {
                          month: "long",
                          day: "numeric",
                          year: "numeric"
                        })}
                      </div>
                    </div>
                    
                    <div className="flex flex-col border rounded-lg p-4">
                      <div className="font-medium">Tournament Start</div>
                      <div className="text-sm text-muted-foreground mt-1">
                        {new Date(tournament.startDate).toLocaleDateString(undefined, {
                          month: "long",
                          day: "numeric",
                          year: "numeric"
                        })} at {new Date(tournament.startDate).toLocaleTimeString(undefined, {
                          hour: "numeric",
                          minute: "2-digit"
                        })}
                      </div>
                    </div>
                    
                    <div className="flex flex-col border rounded-lg p-4">
                      <div className="font-medium">Tournament End</div>
                      <div className="text-sm text-muted-foreground mt-1">
                        {new Date(tournament.endDate).toLocaleDateString(undefined, {
                          month: "long",
                          day: "numeric",
                          year: "numeric"
                        })} at {new Date(tournament.endDate).toLocaleTimeString(undefined, {
                          hour: "numeric",
                          minute: "2-digit"
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="prizes" className="pt-6 space-y-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Prize Distribution</h3>
                  <p className="text-muted-foreground">Total Prize Pool: {tournament.prizePool}</p>
                  
                  <div className="grid gap-3">
                    {tournament.prizes.map((prize, index) => (
                      <div key={index} className="flex items-center p-4 border rounded-lg">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary font-bold mr-4">
                          {prize.place}
                        </div>
                        <div className="flex-1">
                          <div className="font-medium">{prize.place} Place</div>
                          <div className="text-sm text-muted-foreground">Prize: {prize.amount}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="rules" className="pt-6 space-y-6">
                <div className="prose dark:prose-invert max-w-none">
                  <h3>Tournament Rules</h3>
                  <p>{tournament.rules}</p>
                  
                  <h3>General Rules</h3>
                  <ul>
                    <li>All participants must follow the game's terms of service</li>
                    <li>Unsportsmanlike behavior will result in disqualification</li>
                    <li>Tournament administrators have the final say in all disputes</li>
                    <li>Cheating of any kind will result in permanent ban from future events</li>
                    <li>Players must be able to stream their gameplay if requested</li>
                  </ul>
                  
                  <h3>Match Rules</h3>
                  <ul>
                    <li>Players must be ready to play at their scheduled match time</li>
                    <li>15 minutes late results in forfeit</li>
                    <li>All matches must be completed in one sitting</li>
                    <li>Technical issues must be reported immediately to tournament admins</li>
                  </ul>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          <div className="w-full md:w-80 order-1 md:order-2 space-y-6">
            <div className="border rounded-lg p-6 space-y-6">
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Registration</h3>
                <p className="text-sm text-muted-foreground">
                  {isRegistrationOpen
                    ? `Registration closes ${new Date(tournament.registrationDeadline).toLocaleDateString()}`
                    : "Registration is closed"}
                </p>
                <Separator className="my-4" />
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span>Available Spots</span>
                    <span className="font-medium">
                      {tournament.maxParticipants - tournament.currentParticipants}/{tournament.maxParticipants}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Entry Fee</span>
                    <span className="font-medium">
                      ${Math.min(...tournament.packages.map(p => p.price)).toFixed(2)}+
                    </span>
                  </div>
                </div>
              </div>
              
              <Button
                className="w-full"
                disabled={!isRegistrationOpen || !isTournamentUpcoming}
                onClick={() => setRegistrationOpen(true)}
              >
                <Ticket className="mr-2 h-4 w-4" />
                {isRegistrationOpen && isTournamentUpcoming
                  ? "Register Now"
                  : "Registration Closed"}
              </Button>
              
              <Button variant="outline" className="w-full">
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
            </div>
            
            <div className="border rounded-lg p-6 space-y-4">
              <h3 className="font-semibold text-lg">Organizer</h3>
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center font-semibold text-primary">
                  {tournament.organizerName.charAt(0)}
                </div>
                <div>
                  <div className="font-medium">{tournament.organizerName}</div>
                  <div className="text-sm text-muted-foreground">Tournament Organizer</div>
                </div>
              </div>
              <Button variant="outline" className="w-full">
                View Organizer Profile
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {registrationOpen && (
        <TournamentRegistrationModal
          tournament={tournament}
          isOpen={registrationOpen}
          onClose={() => setRegistrationOpen(false)}
        />
      )}
    </PageLayout>
  );
};

export default TournamentDetails;
