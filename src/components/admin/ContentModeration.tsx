
import { useState } from "react";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Search, MoreVertical, Check, X, Eye, AlertTriangle } from "lucide-react";

// Mock data for content to moderate
const mockContent = [
  { 
    id: 1, 
    title: "Gaming Stream Highlights", 
    type: "Video",
    creator: "Jane Cooper",
    status: "Pending",
    reportCount: 0,
    submittedDate: "2024-04-01"
  },
  { 
    id: 2, 
    title: "Esports Tournament Discussion", 
    type: "Forum Thread",
    creator: "Alex Johnson",
    status: "Approved",
    reportCount: 0,
    submittedDate: "2024-04-02"
  },
  { 
    id: 3, 
    title: "Game Review: New RPG Release", 
    type: "Article",
    creator: "Michael Brown",
    status: "Pending",
    reportCount: 0,
    submittedDate: "2024-04-03"
  },
  { 
    id: 4, 
    title: "Community Gameplay Session", 
    type: "Event",
    creator: "Sarah Wilson",
    status: "Rejected",
    reportCount: 2,
    submittedDate: "2024-04-04"
  },
  { 
    id: 5, 
    title: "Speedrun Challenge Results", 
    type: "Post",
    creator: "David Miller",
    status: "Flagged",
    reportCount: 5,
    submittedDate: "2024-04-05"
  }
];

const ContentModeration = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [content, setContent] = useState(mockContent);

  const filteredContent = content.filter(item => 
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.creator.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleStatusChange = (contentId: number, newStatus: string) => {
    setContent(content.map(item => 
      item.id === contentId ? { ...item, status: newStatus } : item
    ));
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Content Moderation</h2>
        <div className="flex gap-2">
          <Button variant="outline">Flagged Content</Button>
          <Button variant="outline">Reported Content</Button>
        </div>
      </div>
      
      <div className="flex w-full items-center space-x-2 max-w-sm">
        <div className="relative w-full">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search content..."
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
              <TableHead>Title</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Creator</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Reports</TableHead>
              <TableHead>Submitted Date</TableHead>
              <TableHead className="w-[80px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredContent.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} className="text-center">
                  No content found
                </TableCell>
              </TableRow>
            ) : (
              filteredContent.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.title}</TableCell>
                  <TableCell>{item.type}</TableCell>
                  <TableCell>{item.creator}</TableCell>
                  <TableCell>
                    <Badge 
                      variant={
                        item.status === "Approved" ? "outline" : 
                        item.status === "Pending" ? "secondary" : 
                        item.status === "Flagged" ? "destructive" : 
                        "default"
                      }
                    >
                      {item.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {item.reportCount > 0 ? (
                      <Badge variant="destructive" className="flex items-center gap-1">
                        <AlertTriangle className="h-3 w-3" />
                        {item.reportCount}
                      </Badge>
                    ) : (
                      "0"
                    )}
                  </TableCell>
                  <TableCell>{item.submittedDate}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => alert(`View content ${item.id}`)}>
                          <Eye className="mr-2 h-4 w-4" />
                          <span>View Content</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleStatusChange(item.id, "Approved")}>
                          <Check className="mr-2 h-4 w-4" />
                          <span>Approve</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleStatusChange(item.id, "Rejected")}>
                          <X className="mr-2 h-4 w-4" />
                          <span>Reject</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleStatusChange(item.id, "Flagged")}>
                          <AlertTriangle className="mr-2 h-4 w-4" />
                          <span>Flag for Review</span>
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

export default ContentModeration;