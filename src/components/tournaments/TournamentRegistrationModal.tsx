
import { useState } from "react";
import { Tournament, TournamentPackage } from "@/types/tournament";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TournamentRegistrationForm } from "@/components/tournaments/TournamentRegistrationForm";
import { getPackagesByType } from "@/data/tournamentPackages";
import { Users, User, UserCog, Building } from "lucide-react";

interface TournamentRegistrationModalProps {
  tournament: Tournament;
  isOpen: boolean;
  onClose: () => void;
}

export function TournamentRegistrationModal({
  tournament,
  isOpen,
  onClose
}: TournamentRegistrationModalProps) {
  const [registrationType, setRegistrationType] = useState<"player" | "team" | "coach" | "organization">("player");
  
  // Get packages for the selected registration type
  const packages: TournamentPackage[] = getPackagesByType(registrationType);
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-4xl">
        <DialogHeader>
          <DialogTitle>Register for {tournament.title}</DialogTitle>
          <DialogDescription>
            Select your registration type and complete the form below.
          </DialogDescription>
        </DialogHeader>
        
        <Tabs value={registrationType} onValueChange={(value) => setRegistrationType(value as any)}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="player">
              <User className="mr-2 h-4 w-4" />
              Player
            </TabsTrigger>
            <TabsTrigger value="team">
              <Users className="mr-2 h-4 w-4" />
              Team
            </TabsTrigger>
            <TabsTrigger value="coach">
              <UserCog className="mr-2 h-4 w-4" />
              Coach
            </TabsTrigger>
            <TabsTrigger value="organization">
              <Building className="mr-2 h-4 w-4" />
              Organization
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="player">
            <TournamentRegistrationForm 
              tournamentId={tournament.id} 
              tournamentName={tournament.title}
              packages={packages}
              registrationType="player"
            />
          </TabsContent>
          
          <TabsContent value="team">
            <TournamentRegistrationForm 
              tournamentId={tournament.id} 
              tournamentName={tournament.title}
              packages={packages} 
              registrationType="team"
            />
          </TabsContent>
          
          <TabsContent value="coach">
            <TournamentRegistrationForm 
              tournamentId={tournament.id} 
              tournamentName={tournament.title}
              packages={packages} 
              registrationType="coach"
            />
          </TabsContent>
          
          <TabsContent value="organization">
            <TournamentRegistrationForm 
              tournamentId={tournament.id} 
              tournamentName={tournament.title}
              packages={packages} 
              registrationType="organization"
            />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
