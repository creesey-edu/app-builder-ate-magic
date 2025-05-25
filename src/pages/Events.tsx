
import { useState } from "react";
import { EventsCalendar } from "@/components/events/EventsCalendar";
import { CalendarClock, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Events = () => {
  const navigate = useNavigate();
  
  const handleCreateEvent = () => {
    navigate("/admin"); // Navigate to admin page where events can be created
  };
  
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Gaming Events</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Discover and register for exciting gaming events and tournaments
        </p>
        
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
            <div>
              <h2 className="text-2xl font-bold flex items-center">
                <CalendarClock className="mr-2 h-5 w-5" />
                Upcoming Events
              </h2>
              <p className="text-muted-foreground">
                Register as a player, team, or coach for upcoming gaming events
              </p>
            </div>
            
            <Button onClick={handleCreateEvent}>
              <UserPlus className="mr-2 h-4 w-4" />
              Create Event
            </Button>
          </div>
          
          <EventsCalendar />
        </div>
      </div>
    </div>
  );
};

export default Events;
