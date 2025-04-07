
import { useState } from "react";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { 
  Search, 
  MoreVertical, 
  Edit, 
  Trash2, 
  UserCheck, 
  Eye, 
  Crown,
  Plus
} from "lucide-react";

// Mock data for communities
const MOCK_COMMUNITIES = [
  {
    id: "c1",
    name: "FPS Legends",
    description: "Community for FPS game enthusiasts",
    memberCount: 1250,
    status: "Active",
    isPremium: false,
    createdDate: "2023-10-15",
    tags: ["FPS", "Competitive", "Tournaments"]
  },
  {
    id: "c2",
    name: "RPG Adventurers",
    description: "For fans of role-playing games and epic adventures",
    memberCount: 980,
    status: "Active",
    isPremium: false,
    createdDate: "2023-11-02",
    tags: ["RPG", "Story", "Co-op"]
  },
  {
    id: "c3",
    name: "Strategy Masters",
    description: "Discussions about strategy games and tactics",
    memberCount: 765,
    status: "Active",
    isPremium: false,
    createdDate: "2023-11-20",
    tags: ["Strategy", "Turn-based", "RTS"]
  },
  {
    id: "c4",
    name: "Pro Gamers League",
    description: "Community for professional gamers and esports enthusiasts",
    memberCount: 1500,
    status: "Active",
    isPremium: true,
    createdDate: "2023-09-05",
    tags: ["Pro Gaming", "Esports", "Tournaments"]
  },
  {
    id: "c5",
    name: "Indie Game Spotlight",
    description: "Discover and discuss amazing indie games",
    memberCount: 560,
    status: "Active",
    isPremium: false,
    createdDate: "2023-12-10",
    tags: ["Indie", "Game Dev", "Arts"]
  },
  {
    id: "c6",
    name: "Exclusive Beta Access",
    description: "Get access to beta games and exclusive testing opportunities",
    memberCount: 720,
    status: "Active",
    isPremium: true,
    createdDate: "2023-08-25",
    tags: ["Beta Testing", "Early Access", "Feedback"]
  }
];

const CommunityManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [communities, setCommunities] = useState(MOCK_COMMUNITIES);

  const filteredCommunities = communities.filter(community => 
    community.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    community.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleTogglePremium = (communityId: string) => {
    setCommunities(communities.map(community => 
      community.id === communityId ? { ...community, isPremium: !community.isPremium } : community
    ));
  };

  const handleStatusChange = (communityId: string, newStatus: string) => {
    setCommunities(communities.map(community => 
      community.id === communityId ? { ...community, status: newStatus } : community
    ));
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Community Management</h2>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Create Community
        </Button>
      </div>
      
      <div className="flex w-full items-center space-x-2 max-w-sm">
        <div className="relative w-full">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search communities..."
            className="w-full pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Members</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Premium</TableHead>
              <TableHead>Created Date</TableHead>
              <TableHead className="w-[80px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredCommunities.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} className="text-center">
                  No communities found
                </TableCell>
              </TableRow>
            ) : (
              filteredCommunities.map((community) => (
                <TableRow key={community.id}>
                  <TableCell className="font-medium">{community.name}</TableCell>
                  <TableCell className="max-w-xs truncate">{community.description}</TableCell>
                  <TableCell>{community.memberCount.toLocaleString()}</TableCell>
                  <TableCell>
                    <Badge 
                      variant={community.status === "Active" ? "outline" : "destructive"}
                    >
                      {community.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {community.isPremium ? (
                      <Badge className="bg-indigo-600">
                        <Crown className="h-3 w-3 mr-1" /> Premium
                      </Badge>
                    ) : (
                      <Badge variant="outline">Standard</Badge>
                    )}
                  </TableCell>
                  <TableCell>{community.createdDate}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Eye className="mr-2 h-4 w-4" />
                          <span>View Community</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Edit className="mr-2 h-4 w-4" />
                          <span>Edit Details</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleTogglePremium(community.id)}>
                          <Crown className="mr-2 h-4 w-4" />
                          <span>{community.isPremium ? "Remove Premium" : "Make Premium"}</span>
                        </DropdownMenuItem>
                        {community.status === "Active" ? (
                          <DropdownMenuItem onClick={() => handleStatusChange(community.id, "Inactive")}>
                            <UserCheck className="mr-2 h-4 w-4" />
                            <span>Deactivate</span>
                          </DropdownMenuItem>
                        ) : (
                          <DropdownMenuItem onClick={() => handleStatusChange(community.id, "Active")}>
                            <UserCheck className="mr-2 h-4 w-4" />
                            <span>Activate</span>
                          </DropdownMenuItem>
                        )}
                        <DropdownMenuItem className="text-destructive">
                          <Trash2 className="mr-2 h-4 w-4" />
                          <span>Delete Community</span>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default CommunityManagement;
