
import { Link } from "react-router-dom";
import { Tournament } from "@/types/tournament";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Trophy, Users } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

interface TournamentCardProps {
  tournament: Tournament;
}

export function TournamentCard({ tournament }: TournamentCardProps) {
  const timeUntilRegistrationEnds = formatDistanceToNow(
    new Date(tournament.registrationDeadline),
    { addSuffix: true }
  );
  
  const registrationClosing = new Date(tournament.registrationDeadline).getTime() - Date.now() < 7 * 24 * 60 * 60 * 1000;
  
  const spotsRemaining = tournament.maxParticipants - tournament.currentParticipants;
  const spotsFilling = spotsRemaining < tournament.maxParticipants * 0.2;
  
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="aspect-video relative overflow-hidden">
        <img 
          src={tournament.featuredImage || "/placeholder.svg"} 
          alt={tournament.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2 flex flex-col gap-2">
          <Badge variant={tournament.status === "upcoming" ? "default" : "secondary"}>
            {tournament.status === "upcoming" ? "Upcoming" : tournament.status}
          </Badge>
        </div>
      </div>
      
      <CardContent className="p-4">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <img 
              src={tournament.gameImage || "/placeholder.svg"} 
              alt={tournament.game}
              className="w-6 h-6 rounded-full"
            />
            <span className="text-sm font-medium">{tournament.game}</span>
          </div>
          
          <h3 className="font-bold text-lg line-clamp-2">{tournament.title}</h3>
          
          <p className="text-sm text-muted-foreground line-clamp-2">
            {tournament.description}
          </p>
          
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5 text-muted-foreground" />
              <span>
                {new Date(tournament.startDate).toLocaleDateString(undefined, {
                  month: "short",
                  day: "numeric",
                })}
              </span>
            </div>
            
            <div className="flex items-center gap-1">
              <Trophy className="h-3.5 w-3.5 text-muted-foreground" />
              <span>{tournament.prizePool}</span>
            </div>
            
            <div className="flex items-center gap-1">
              <Users className="h-3.5 w-3.5 text-muted-foreground" />
              <span>
                {tournament.currentParticipants}/{tournament.maxParticipants}
                {spotsFilling && (
                  <Badge variant="outline" className="ml-1 py-0 h-4 text-xs">
                    Filling up
                  </Badge>
                )}
              </span>
            </div>
            
            <div>
              <Badge variant={registrationClosing ? "destructive" : "outline"} className="text-xs">
                Reg closes {timeUntilRegistrationEnds}
              </Badge>
            </div>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0 flex justify-between">
        <Button asChild variant="outline" size="sm">
          <Link to={`/tournaments/${tournament.slug}`}>Details</Link>
        </Button>
        <Button asChild size="sm">
          <Link to={`/tournaments/${tournament.slug}/register`}>Register</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
