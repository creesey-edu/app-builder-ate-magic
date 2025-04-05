
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
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Search, MoreVertical, Bell, Send, PlusCircle, Edit, Trash, Copy } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Mock notification templates
const notificationTemplates = [
  {
    id: 1,
    name: "Welcome New User",
    type: "system",
    title: "Welcome to Angry Gamer",
    message: "Thank you for joining our platform! We're excited to have you here."
  },
  {
    id: 2,
    name: "Live Stream Starting",
    type: "live",
    title: "{streamerName} is now live!",
    message: "{streamerName} has started streaming {game}. Don't miss out!"
  },
  {
    id: 3,
    name: "New Content Available",
    type: "content",
    title: "New Content: {title}",
    message: "Check out the new {contentType}: {title} by {creator}"
  },
  {
    id: 4,
    name: "Tournament Reminder",
    type: "system",
    title: "Tournament Starting Soon",
    message: "The {tournamentName} tournament is starting in {timeRemaining}. Get ready!"
  },
  {
    id: 5,
    name: "Account Verification",
    type: "system",
    title: "Your Account is Verified",
    message: "Congratulations! Your account has been successfully verified."
  }
];

// Mock sent notifications
const sentNotifications = [
  {
    id: 1,
    title: "Welcome to Angry Gamer",
    message: "Thank you for joining our platform! We're excited to have you here.",
    type: "system",
    recipients: "All Users",
    sentDate: "2024-04-01",
    status: "Delivered"
  },
  {
    id: 2,
    title: "JaneDoe is now live!",
    message: "JaneDoe has started streaming Fortnite. Don't miss out!",
    type: "live",
    recipients: "Subscribers",
    sentDate: "2024-04-02",
    status: "Delivered"
  },
  {
    id: 3,
    title: "New Content: Top 10 Gaming Tips",
    message: "Check out the new article: Top 10 Gaming Tips by GameMaster",
    type: "content",
    recipients: "Premium Users",
    sentDate: "2024-04-03",
    status: "Delivered"
  },
  {
    id: 4,
    title: "Tournament Starting Soon",
    message: "The Spring Championship tournament is starting in 1 hour. Get ready!",
    type: "system",
    recipients: "Registered Players",
    sentDate: "2024-04-04",
    status: "Pending"
  },
  {
    id: 5,
    title: "Account Update Required",
    message: "Please update your account information to continue using our services.",
    type: "system",
    recipients: "Selected Users",
    sentDate: "2024-04-05",
    status: "Failed"
  }
];

const NotificationManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [templates, setTemplates] = useState(notificationTemplates);
  const [notifications, setNotifications] = useState(sentNotifications);
  const [selectedTemplate, setSelectedTemplate] = useState<null | any>(null);
  
  const filteredTemplates = templates.filter(template => 
    template.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const filteredNotifications = notifications.filter(notification => 
    notification.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    notification.recipients.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const handleDeleteTemplate = (id: number) => {
    setTemplates(templates.filter(template => template.id !== id));
  };
  
  const handleEditTemplate = (template: any) => {
    setSelectedTemplate(template);
    // In a real app, this would open a dialog or redirect to an edit page
    alert(`Edit template: ${template.name}`);
  };
  
  const handleDuplicateTemplate = (template: any) => {
    const newTemplate = {
      ...template,
      id: Date.now(),
      name: `${template.name} (Copy)`
    };
    setTemplates([...templates, newTemplate]);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Notification Management</h2>
      
      <Tabs defaultValue="send" className="space-y-4">
        <TabsList>
          <TabsTrigger value="send">Send Notification</TabsTrigger>
          <TabsTrigger value="templates">Notification Templates</TabsTrigger>
          <TabsTrigger value="history">Notification History</TabsTrigger>
        </TabsList>
        
        <TabsContent value="send">
          <Card>
            <CardHeader>
              <CardTitle>Send New Notification</CardTitle>
              <CardDescription>
                Create and send a notification to users
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Template (Optional)
                </label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a template or create from scratch" />
                  </SelectTrigger>
                  <SelectContent>
                    {templates.map(template => (
                      <SelectItem key={template.id} value={template.id.toString()}>
                        {template.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Notification Type
                </label>
                <Select defaultValue="system">
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select notification type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="system">System</SelectItem>
                    <SelectItem value="live">Live Stream</SelectItem>
                    <SelectItem value="content">Content</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Recipients
                </label>
                <Select defaultValue="all">
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select recipients" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Users</SelectItem>
                    <SelectItem value="premium">Premium Users</SelectItem>
                    <SelectItem value="streamers">Streamers</SelectItem>
                    <SelectItem value="new">New Users (Last 30 Days)</SelectItem>
                    <SelectItem value="inactive">Inactive Users</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Title
                </label>
                <Input placeholder="Enter notification title" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Message
                </label>
                <Textarea
                  placeholder="Enter notification message"
                  className="min-h-[100px]"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Schedule (Optional)
                </label>
                <div className="flex gap-2">
                  <Input
                    type="datetime-local"
                    className="w-full"
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Preview</Button>
              <Button>
                <Send className="mr-2 h-4 w-4" />
                Send Notification
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="templates">
          <div className="flex justify-between items-center mb-4">
            <div className="flex w-full items-center space-x-2 max-w-sm">
              <div className="relative w-full">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search templates..."
                  className="w-full pl-8"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <Button>
              <PlusCircle className="mr-2 h-4 w-4" />
              Create Template
            </Button>
          </div>
          
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead>Message</TableHead>
                  <TableHead className="w-[100px]">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredTemplates.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center">
                      No templates found
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredTemplates.map((template) => (
                    <TableRow key={template.id}>
                      <TableCell className="font-medium">{template.name}</TableCell>
                      <TableCell>
                        <Badge 
                          variant={
                            template.type === "system" ? "outline" : 
                            template.type === "live" ? "destructive" : 
                            "secondary"
                          }
                        >
                          {template.type}
                        </Badge>
                      </TableCell>
                      <TableCell className="max-w-[200px] truncate">{template.title}</TableCell>
                      <TableCell className="max-w-[300px] truncate">{template.message}</TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => handleEditTemplate(template)}>
                              <Edit className="mr-2 h-4 w-4" />
                              <span>Edit</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleDuplicateTemplate(template)}>
                              <Copy className="mr-2 h-4 w-4" />
                              <span>Duplicate</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleDeleteTemplate(template.id)}>
                              <Trash className="mr-2 h-4 w-4" />
                              <span>Delete</span>
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
        </TabsContent>
        
        <TabsContent value="history">
          <div className="flex w-full items-center space-x-2 max-w-sm mb-4">
            <div className="relative w-full">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search notification history..."
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
                  <TableHead>Recipients</TableHead>
                  <TableHead>Sent Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="w-[80px]">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredNotifications.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center">
                      No notifications found
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredNotifications.map((notification) => (
                    <TableRow key={notification.id}>
                      <TableCell className="font-medium max-w-[200px] truncate">{notification.title}</TableCell>
                      <TableCell>
                        <Badge 
                          variant={
                            notification.type === "system" ? "outline" : 
                            notification.type === "live" ? "destructive" : 
                            "secondary"
                          }
                        >
                          {notification.type}
                        </Badge>
                      </TableCell>
                      <TableCell>{notification.recipients}</TableCell>
                      <TableCell>{notification.sentDate}</TableCell>
                      <TableCell>
                        <Badge 
                          variant={
                            notification.status === "Delivered" ? "outline" : 
                            notification.status === "Pending" ? "secondary" : 
                            "destructive"
                          }
                        >
                          {notification.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => alert(`View details for notification ${notification.id}`)}>
                              <Eye className="mr-2 h-4 w-4" />
                              <span>View Details</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => alert(`Resend notification ${notification.id}`)}>
                              <Send className="mr-2 h-4 w-4" />
                              <span>Resend</span>
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
        </TabsContent>
      </Tabs>
    </div>
  );
};

// Missing Eye component for TypeScript
const Eye = ({ className }: { className?: string }) => {
  return <div className={className}>👁️</div>;
};

export default NotificationManagement;
