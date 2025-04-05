
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface StreamerFiltersProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  filter: "all" | "live" | "featured";
  setFilter: (value: "all" | "live" | "featured") => void;
}

export const StreamerFilters = ({
  searchTerm,
  setSearchTerm,
  filter,
  setFilter,
}: StreamerFiltersProps) => {
  return (
    <section className="my-6">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search streamers or games"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex gap-2">
          <Button
            variant={filter === "all" ? "default" : "outline"}
            onClick={() => setFilter("all")}
          >
            All
          </Button>
          <Button
            variant={filter === "live" ? "default" : "outline"}
            onClick={() => setFilter("live")}
            className={filter === "live" ? "bg-destructive hover:bg-destructive/90" : ""}
          >
            Live Now
          </Button>
          <Button
            variant={filter === "featured" ? "default" : "outline"}
            onClick={() => setFilter("featured")}
          >
            Featured
          </Button>
        </div>
      </div>
    </section>
  );
};
