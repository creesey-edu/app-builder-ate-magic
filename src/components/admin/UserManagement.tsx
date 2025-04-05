
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
import { Search, MoreVertical, UserCheck, UserX, Lock, Mail } from "lucide-react";

// Mock data for users
const mockUsers = [
  { 
    id: 1, 
    name: "Jane Cooper", 
    email: "jane@example.com", 
    role: "Admin",
    status: "Active",
    joinedDate: "2023-05-01"
  },
  { 
    id: 2, 
    name: "Alex Johnson", 
    email: "alex@example.com", 
    role: "Moderator",
    status: "Active",
    joinedDate: "2023-06-15"
  },
  { 
    id: 3, 
    name: "Michael Brown", 
    email: "michael@example.com", 
    role: "User",
    status: "Suspended",
    joinedDate: "2023-07-20"
  },
  { 
    id: 4, 
    name: "Sarah Wilson", 
    email: "sarah@example.com", 
    role: "User",
    status: "Active",
    joinedDate: "2023-08-05"
  },
  { 
    id: 5, 
    name: "David Miller", 
    email: "david@example.com", 
    role: "Streamer",
    status: "Active",
    joinedDate: "2023-09-10"
  }
];

const UserManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState(mockUsers);

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleStatusChange = (userId: number, newStatus: string) => {
    setUsers(users.map(user => 
      user.id === userId ? { ...user, status: newStatus } : user
    ));
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">User Management</h2>
        <Button>Add New User</Button>
      </div>
      
      <div className="flex w-full items-center space-x-2 max-w-sm">
        <div className="relative w-full">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search users..."
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
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Joined Date</TableHead>
              <TableHead className="w-[80px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredUsers.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center">
                  No users found
                </TableCell>
              </TableRow>
            ) : (
              filteredUsers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium">{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    <Badge 
                      variant={user.role === "Admin" ? "destructive" : 
                              user.role === "Moderator" ? "default" : 
                              user.role === "Streamer" ? "secondary" : "outline"}
                    >
                      {user.role}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge 
                      variant={user.status === "Active" ? "outline" : "destructive"}
                    >
                      {user.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{user.joinedDate}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => alert(`Edit user ${user.id}`)}>
                          <UserCheck className="mr-2 h-4 w-4" />
                          <span>Edit User</span>
                        </DropdownMenuItem>
                        {user.status === "Active" ? (
                          <DropdownMenuItem onClick={() => handleStatusChange(user.id, "Suspended")}>
                            <UserX className="mr-2 h-4 w-4" />
                            <span>Suspend User</span>
                          </DropdownMenuItem>
                        ) : (
                          <DropdownMenuItem onClick={() => handleStatusChange(user.id, "Active")}>
                            <UserCheck className="mr-2 h-4 w-4" />
                            <span>Activate User</span>
                          </DropdownMenuItem>
                        )}
                        <DropdownMenuItem onClick={() => alert(`Reset password for user ${user.id}`)}>
                          <Lock className="mr-2 h-4 w-4" />
                          <span>Reset Password</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => alert(`Send email to user ${user.id}`)}>
                          <Mail className="mr-2 h-4 w-4" />
                          <span>Send Email</span>
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

export default UserManagement;
