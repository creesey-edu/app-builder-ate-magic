
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { EventRegistrationForm } from "./EventRegistrationForm";
import { Users, User, UserCog } from "lucide-react";

interface EventRegistrationModalProps {
  event: {
    id: string;
    title: string;
    registrationTypes: string[];
  };
  isOpen: boolean;
  onClose: () => void;
}

export function EventRegistrationModal({
  event,
  isOpen,
  onClose
}: EventRegistrationModalProps) {
  const [registrationType, setRegistrationType] = useState<"player" | "team" | "coach">("player");
  
  // Only display tabs for registration types available for this event
  const availableTypes = event.registrationTypes;
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-4xl">
        <DialogHeader>
          <DialogTitle>Register for {event.title}</DialogTitle>
          <DialogDescription>
            Select your registration type and complete the form below.
          </DialogDescription>
        </DialogHeader>
        
        <Tabs 
          value={registrationType} 
          onValueChange={(value) => setRegistrationType(value as any)}
          defaultValue={availableTypes[0]}
        >
          <TabsList className="grid w-full" style={{ gridTemplateColumns: `repeat(${availableTypes.length}, 1fr)` }}>
            {availableTypes.includes("player") && (
              <TabsTrigger value="player">
                <User className="mr-2 h-4 w-4" />
                Player
              </TabsTrigger>
            )}
            {availableTypes.includes("team") && (
              <TabsTrigger value="team">
                <Users className="mr-2 h-4 w-4" />
                Team
              </TabsTrigger>
            )}
            {availableTypes.includes("coach") && (
              <TabsTrigger value="coach">
                <UserCog className="mr-2 h-4 w-4" />
                Coach
              </TabsTrigger>
            )}
          </TabsList>
          
          {availableTypes.includes("player") && (
            <TabsContent value="player">
              <EventRegistrationForm 
                eventId={event.id} 
                eventName={event.title}
                registrationType="player"
              />
            </TabsContent>
          )}
          
          {availableTypes.includes("team") && (
            <TabsContent value="team">
              <EventRegistrationForm 
                eventId={event.id} 
                eventName={event.title}
                registrationType="team"
              />
            </TabsContent>
          )}
          
          {availableTypes.includes("coach") && (
            <TabsContent value="coach">
              <EventRegistrationForm 
                eventId={event.id} 
                eventName={event.title}
                registrationType="coach"
              />
            </TabsContent>
          )}
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
