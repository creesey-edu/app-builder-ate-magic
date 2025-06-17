
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Star, Video, LayoutDashboard, LogOut } from "lucide-react";
import { NavigationActions } from "./NavigationActions";

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
  isAuthenticated: boolean;
  user: any;
  logout: () => void;
}

export const MobileNavigation = ({ isOpen, onClose, isAuthenticated, user, logout }: MobileNavigationProps) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden py-4 px-4 bg-background border-t">
      <nav className="flex flex-col space-y-4">
        <Link to="/games" className="px-4 py-2 text-sm font-medium" onClick={onClose}>
          Games
        </Link>
        <Link to="/communities" className="px-4 py-2 text-sm font-medium" onClick={onClose}>
          Communities
        </Link>
        <Link to="/featured-communities" className="px-4 py-2 text-sm font-medium flex items-center gap-1" onClick={onClose}>
          <Star className="h-3.5 w-3.5 text-amber-500" />
          Featured Communities
        </Link>
        <Link to="/tournaments" className="px-4 py-2 text-sm font-medium" onClick={onClose}>
          Tournaments
        </Link>
        <Link to="/news" className="px-4 py-2 text-sm font-medium" onClick={onClose}>
          News
        </Link>
        <Link to="/streamers" className="px-4 py-2 text-sm font-medium" onClick={onClose}>
          <span className="flex items-center gap-1">
            <Video className="h-4 w-4" />
            Streamers
          </span>
        </Link>
        <div className="flex items-center justify-between px-4 py-2">
          <NavigationActions />
        </div>
        
        {isAuthenticated && user ? (
          <div className="pt-2 flex flex-col space-y-2">
            <div className="px-4 py-2 border-t">
              <p className="font-medium">{user.username}</p>
              <p className="text-sm text-muted-foreground">{user.email}</p>
            </div>
            <Button variant="outline" className="w-full" asChild onClick={onClose}>
              <Link to="/dashboard" className="flex items-center justify-center">
                <LayoutDashboard className="mr-2 h-4 w-4" />
                Dashboard
              </Link>
            </Button>
            <Button variant="outline" className="w-full" onClick={() => { logout(); onClose(); }}>
              <LogOut className="mr-2 h-4 w-4" />
              Log out
            </Button>
          </div>
        ) : (
          <div className="pt-2 flex flex-col space-y-2">
            <Button variant="outline" className="w-full" asChild onClick={onClose}>
              <Link to="/signin">Sign In</Link>
            </Button>
            <Button className="w-full" asChild onClick={onClose}>
              <Link to="/signup">Sign Up</Link>
            </Button>
          </div>
        )}
      </nav>
    </div>
  );
};
