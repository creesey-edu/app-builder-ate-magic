
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GamepadIcon, Menu, X } from "lucide-react";
import { useSession } from "@/hooks/useSession";
import { DesktopNavigation } from "./navigation/DesktopNavigation";
import { MobileNavigation } from "./navigation/MobileNavigation";
import { UserMenu } from "./navigation/UserMenu";
import { NavigationActions } from "./navigation/NavigationActions";

export const NavigationBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, isAuthenticated, logout } = useSession();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <GamepadIcon className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl hidden sm:inline-block">The Angry Gamer Show</span>
          </Link>
        </div>

        <DesktopNavigation />

        {/* Mobile menu button */}
        <div className="flex md:hidden flex-1 justify-end">
          <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Desktop actions and user menu */}
        <div className="hidden md:flex items-center gap-4 ml-auto">
          <NavigationActions />
          <UserMenu 
            isAuthenticated={isAuthenticated}
            user={user}
            logout={logout}
          />
        </div>
      </div>

      <MobileNavigation 
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        isAuthenticated={isAuthenticated}
        user={user}
        logout={logout}
      />
    </header>
  );
}
