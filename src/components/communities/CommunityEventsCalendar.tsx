
import { useState } from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";

// Mock data for community events
const COMMUNITY_EVENTS = [
  {
    id: "e1",
    title: "FPS Tournament",
    date: new Date(2025, 3, 10),
    community: "FPS Legends",
    description: "Monthly tournament for competitive FPS players"
  },
  {
    id: "e2",
    title: "RPG Character Workshop",
    date: new Date(2025, 3, 15),
    community: "RPG Adventurers",
    description: "Learn to create compelling RPG characters"
  },
  {
    id: "e3",
    title: "Strategy Games Night",
    date: new Date(2025, 3, 20),
    community: "Strategy Masters",
    description: "Weekly gathering to play and discuss strategy games"
  },
  {
    id: "e4",
    title: "Indie Game Showcase",
    date: new Date(2025, 3, 25),
    community: "Indie Game Spotlight",
    description: "Presentation of new and upcoming indie games"
  }
];

export const CommunityEventsCalendar = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedEvents, setSelectedEvents] = useState(COMMUNITY_EVENTS);
  
  // Function to check if a date has events
  const hasEventOnDate = (day: Date) => {
    return COMMUNITY_EVENTS.some(event => 
      event.date.getDate() === day.getDate() && 
      event.date.getMonth() === day.getMonth() && 
      event.date.getFullYear() === day.getFullYear()
    );
  };

  // Function to filter events for selected date
  const handleDateSelect = (selectedDate: Date | undefined) => {
    setDate(selectedDate);
    
    if (selectedDate) {
      const filteredEvents = COMMUNITY_EVENTS.filter(event => 
        event.date.getDate() === selectedDate.getDate() && 
        event.date.getMonth() === selectedDate.getMonth() && 
        event.date.getFullYear() === selectedDate.getFullYear()
      );
      setSelectedEvents(filteredEvents);
    } else {
      setSelectedEvents(COMMUNITY_EVENTS);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start">
        <div>
          <h3 className="text-lg font-medium">Community Events Calendar</h3>
          <p className="text-sm text-muted-foreground">
            View and join upcoming community events
          </p>
        </div>
        
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-full sm:w-auto justify-start text-left">
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={handleDateSelect}
              initialFocus
              modifiers={{
                hasEvent: (day) => hasEventOnDate(day)
              }}
              modifiersStyles={{
                hasEvent: { 
                  textDecoration: 'underline', 
                  fontWeight: 'bold',
                  color: 'var(--primary)' 
                }
              }}
              className="p-3 pointer-events-auto"
            />
          </PopoverContent>
        </Popover>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {selectedEvents.length > 0 ? (
          selectedEvents.map(event => (
            <Card key={event.id} className="overflow-hidden">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{event.title}</CardTitle>
                    <CardDescription>{event.community}</CardDescription>
                  </div>
                  <Badge variant="outline" className="bg-primary/10">
                    {format(event.date, "MMM d")}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{event.description}</p>
                <div className="flex justify-end">
                  <Button size="sm">Join Event</Button>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <div className="col-span-2 text-center p-8 border rounded-lg">
            <p className="text-muted-foreground">No events on this date</p>
          </div>
        )}
      </div>
    </div>
  );
};
