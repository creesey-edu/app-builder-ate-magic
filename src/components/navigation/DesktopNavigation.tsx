
import { Link } from "react-router-dom";
import { 
  NavigationMenu, 
  NavigationMenuContent, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList, 
  NavigationMenuTrigger, 
  navigationMenuTriggerStyle 
} from "@/components/ui/navigation-menu";
import { Video, Star } from "lucide-react";

export const DesktopNavigation = () => {
  return (
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
                <li>
                  <NavigationMenuLink asChild>
                    <Link
                      to="/featured-communities"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none flex items-center gap-1">
                        <Star className="h-3.5 w-3.5 text-amber-500" />
                        Featured
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Check out our featured communities
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                {["New", "Popular", "Tournaments", "Events", "Discussions"].map((item) => (
                  <li key={item}>
                    <NavigationMenuLink asChild>
                      <Link
                        to="/communities"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">{item}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          {item === "New" ? "Discover newly created communities" :
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
  );
};
