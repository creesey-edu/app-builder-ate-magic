
import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Calendar, 
  CalendarPlus, 
  Search, 
  Users, 
  Ticket, 
  Filter
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TournamentCard } from "@/components/tournaments/TournamentCard";
import { FeaturedTournaments } from "@/components/tournaments/FeaturedTournaments";
import { getUpcomingTournaments } from "@/data/mockTournaments";

const Tournaments = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("upcoming");
  const [gameFilter, setGameFilter] = useState("all");

  const tournaments = getUpcomingTournaments();
  
  const filteredTournaments = tournaments.filter(tournament => {
    // Apply search filter
    const matchesSearch = searchQuery === "" || 
      tournament.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tournament.game.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tournament.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Apply game filter
    const matchesGame = gameFilter === "all" || tournament.game === gameFilter;
    
    return matchesSearch && matchesGame;
  });

  const uniqueGames = [...new Set(tournaments.map(t => t.game))];

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Tournaments</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Compete in exciting gaming tournaments and win prizes
        </p>
        
        <div className="space-y-8">
          <FeaturedTournaments />
          
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-80">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search tournaments..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex gap-2 w-full md:w-auto justify-end">
              <Button asChild variant="outline" className="hidden md:flex">
                <Link to="/tournament-calendar">
                  <Calendar className="mr-2 h-4 w-4" />
                  Calendar View
                </Link>
              </Button>
              <Button asChild>
                <Link to="/host-tournament" className="flex-1 md:flex-initial">
                  <CalendarPlus className="mr-2 h-4 w-4" />
                  Host Tournament
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 items-start">
            <div className="w-full md:w-64 space-y-4 p-4 border rounded-lg">
              <div className="font-medium flex items-center">
                <Filter className="mr-2 h-4 w-4" />
                Filters
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Game</label>
                <Select value={gameFilter} onValueChange={setGameFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select game" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Games</SelectItem>
                    {uniqueGames.map(game => (
                      <SelectItem key={game} value={game}>{game}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Format</label>
                <Select defaultValue="all">
                  <SelectTrigger>
                    <SelectValue placeholder="Select format" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Formats</SelectItem>
                    <SelectItem value="single">Single Elimination</SelectItem>
                    <SelectItem value="double">Double Elimination</SelectItem>
                    <SelectItem value="round">Round Robin</SelectItem>
                    <SelectItem value="swiss">Swiss System</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Entry Fee</label>
                <Select defaultValue="all">
                  <SelectTrigger>
                    <SelectValue placeholder="Select price range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Prices</SelectItem>
                    <SelectItem value="free">Free</SelectItem>
                    <SelectItem value="paid">Paid</SelectItem>
                    <SelectItem value="under-20">Under $20</SelectItem>
                    <SelectItem value="20-50">$20 - $50</SelectItem>
                    <SelectItem value="50-plus">$50+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="flex-1">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="w-full md:w-fit">
                  <TabsTrigger value="upcoming" className="flex-1 md:flex-initial">
                    <Calendar className="mr-2 h-4 w-4" />
                    Upcoming
                  </TabsTrigger>
                  <TabsTrigger value="ongoing" className="flex-1 md:flex-initial">
                    <Ticket className="mr-2 h-4 w-4" />
                    Ongoing
                  </TabsTrigger>
                  <TabsTrigger value="past" className="flex-1 md:flex-initial">
                    <Users className="mr-2 h-4 w-4" />
                    Past Events
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="upcoming" className="space-y-4 py-4">
                  {filteredTournaments.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {filteredTournaments.map(tournament => (
                        <TournamentCard key={tournament.id} tournament={tournament} />
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-muted-foreground">No tournaments found matching your criteria.</p>
                    </div>
                  )}
                </TabsContent>
                
                <TabsContent value="ongoing" className="py-4">
                  <div className="text-center py-8">
                    <p className="text-muted-foreground">No ongoing tournaments at the moment.</p>
                    <Button variant="outline" className="mt-4">
                      <Link to="/tournament-alerts">
                        Get notified of new tournaments
                      </Link>
                    </Button>
                  </div>
                </TabsContent>
                
                <TabsContent value="past" className="py-4">
                  <div className="text-center py-8">
                    <p className="text-muted-foreground">Past tournament archives coming soon.</p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tournaments;
