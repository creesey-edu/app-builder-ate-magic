
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { CommunityList } from "@/components/communities/CommunityList";
import { FeaturedCommunities } from "@/components/communities/FeaturedCommunities";
import { PremiumCommunities } from "@/components/communities/PremiumCommunities";
import { UserPlus, Users, Crown, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

const Communities = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const navigate = useNavigate();

  const handleNavigateToPremium = () => {
    navigate("/premium");
  };
  
  const handleCreateCommunity = () => {
    navigate("/community-store");
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Communities</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Connect with other gamers in our thriving communities
        </p>
        
        <div className="space-y-8">
          <FeaturedCommunities />
          
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-80">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search communities..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex gap-2 w-full md:w-auto justify-end">
              <Button onClick={() => navigate("/admin")} variant="outline" className="hidden md:flex">
                <Users className="mr-2 h-4 w-4" />
                Manage
              </Button>
              <Button className="flex-1 md:flex-initial" onClick={handleCreateCommunity}>
                <UserPlus className="mr-2 h-4 w-4" />
                Create Community
              </Button>
            </div>
          </div>
          
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="w-full md:w-fit">
              <TabsTrigger value="all" className="flex-1 md:flex-initial">
                <Users className="mr-2 h-4 w-4" />
                All Communities
              </TabsTrigger>
              <TabsTrigger value="premium" className="flex-1 md:flex-initial">
                <Crown className="mr-2 h-4 w-4" />
                Premium
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="space-y-4 py-4">
              <CommunityList searchQuery={searchQuery} />
            </TabsContent>
            
            <TabsContent value="premium" className="space-y-4 py-4">
              <PremiumCommunities onUpgradeToPremium={handleNavigateToPremium} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Communities;
