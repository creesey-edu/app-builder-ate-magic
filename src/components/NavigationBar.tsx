
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  NavigationMenu, 
  NavigationMenuContent, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList, 
  NavigationMenuTrigger, 
  navigationMenuTriggerStyle 
} from "@/components/ui/navigation-menu";
import { GamepadIcon, Menu, Video, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export const NavigationBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <GamepadIcon className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl hidden sm:inline-block">The Angry Gamer Show</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Games</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {["Action", "Adventure", "RPG", "Strategy", "Simulation", "Sports"].map((category) => (
                      <li key={category}>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/games"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{category}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Explore {category.toLowerCase()} games and communities
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Communities</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {["Featured", "New", "Popular", "Tournaments", "Events", "Discussions"].map((item) => (
                      <li key={item}>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/communities"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{item}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {item === "Featured" ? "Check out our featured communities" : 
                               item === "New" ? "Discover newly created communities" :
                               item === "Popular" ? "Join our most active communities" :
                               item === "Tournaments" ? "Competitive gaming events" :
                               item === "Events" ? "Upcoming community events" : 
                               "Join community discussions"}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/tournaments" className={navigationMenuTriggerStyle()}>
                  Tournaments
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/news" className={navigationMenuTriggerStyle()}>
                  News
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/streamers" className={navigationMenuTriggerStyle()}>
                  <span className="flex items-center gap-1">
                    <Video className="h-4 w-4" />
                    Streamers
                  </span>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden flex-1 justify-end">
          <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Theme toggle and auth buttons */}
        <div className="hidden md:flex items-center gap-4 ml-auto">
          <ThemeToggle />
          <Button variant="ghost" asChild>
            <Link to="/signin">Sign In</Link>
          </Button>
          <Button asChild>
            <Link to="/signup">Sign Up</Link>
          </Button>
        </div>
      </div>

      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden py-4 px-4 bg-background border-t">
          <nav className="flex flex-col space-y-4">
            <Link to="/games" className="px-4 py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
              Games
            </Link>
            <Link to="/communities" className="px-4 py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
              Communities
            </Link>
            <Link to="/tournaments" className="px-4 py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
              Tournaments
            </Link>
            <Link to="/news" className="px-4 py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
              News
            </Link>
            <Link to="/streamers" className="px-4 py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
              <span className="flex items-center gap-1">
                <Video className="h-4 w-4" />
                Streamers
              </span>
            </Link>
            <div className="flex items-center px-4 py-2">
              <ThemeToggle />
            </div>
            <div className="pt-2 flex flex-col space-y-2">
              <Button variant="outline" className="w-full" asChild onClick={() => setMobileMenuOpen(false)}>
                <Link to="/signin">Sign In</Link>
              </Button>
              <Button className="w-full" asChild onClick={() => setMobileMenuOpen(false)}>
                <Link to="/signup">Sign Up</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
