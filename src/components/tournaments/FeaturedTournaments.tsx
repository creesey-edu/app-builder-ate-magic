
import { Link } from "react-router-dom";
import { getFeaturedTournaments } from "@/data/mockTournaments";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Trophy, Users, ArrowRight } from "lucide-react";

export function FeaturedTournaments() {
  const featuredTournaments = getFeaturedTournaments();

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Featured Tournaments</h2>
        <Button asChild variant="link" className="gap-1">
          <Link to="/tournaments">
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>

      <Carousel className="w-full">
        <CarouselContent>
          {featuredTournaments.map((tournament) => (
            <CarouselItem key={tournament.id} className="md:basis-1/2 lg:basis-1/3">
              <Link to={`/tournaments/${tournament.slug}`}>
                <div className="relative overflow-hidden rounded-lg group">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={tournament.featuredImage || "/placeholder.svg"}
                      alt={tournament.title}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex flex-col justify-end p-4 text-white">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <img
                          src={tournament.gameImage || "/placeholder.svg"}
                          alt={tournament.game}
                          className="w-6 h-6 rounded-full"
                        />
                        <span className="text-sm font-medium">{tournament.game}</span>
                        <Badge className="ml-auto">{tournament.status}</Badge>
                      </div>
                      
                      <h3 className="font-bold text-lg">{tournament.title}</h3>
                      
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5" />
                          <span>
                            {new Date(tournament.startDate).toLocaleDateString(undefined, {
                              month: "short",
                              day: "numeric",
                            })}
                          </span>
                        </div>
                        
                        <div className="flex items-center gap-1">
                          <Trophy className="h-3.5 w-3.5" />
                          <span>{tournament.prizePool}</span>
                        </div>
                        
                        <div className="flex items-center gap-1">
                          <Users className="h-3.5 w-3.5" />
                          <span>
                            {tournament.currentParticipants}/{tournament.maxParticipants}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-1" />
        <CarouselNext className="right-1" />
      </Carousel>
    </div>
  );
}
