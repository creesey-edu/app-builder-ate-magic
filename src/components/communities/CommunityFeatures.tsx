
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  BarChart, 
  MessageSquare, 
  PersonStanding, 
  Settings, 
  Palette
} from "lucide-react";

export const CommunityFeatures = () => {
  return (
    <section className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold">Premium Community Features</h2>
        <p className="text-muted-foreground">Everything you need to build and grow a thriving gaming community</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <FeatureCard 
          icon={<Shield className="h-8 w-8 text-indigo-500" />}
          title="Advanced Moderation"
          description="Powerful tools to keep your community safe and friendly"
          tags={["Auto-moderation", "Content filters", "Member verification"]}
        />
        
        <FeatureCard 
          icon={<BarChart className="h-8 w-8 text-indigo-500" />}
          title="Engagement Analytics"
          description="Track growth, engagement, and community health metrics"
          tags={["Activity reports", "Member insights", "Growth tracking"]}
        />
        
        <FeatureCard 
          icon={<MessageSquare className="h-8 w-8 text-indigo-500" />}
          title="Community Engagement"
          description="Tools to foster discussion and increase participation"
          tags={["Events system", "Polls & surveys", "Welcome automation"]}
        />
        
        <FeatureCard 
          icon={<PersonStanding className="h-8 w-8 text-indigo-500" />}
          title="Custom Roles"
          description="Create distinctive identities within your community"
          tags={["Role hierarchies", "Custom permissions", "Role rewards"]}
        />
        
        <FeatureCard 
          icon={<Settings className="h-8 w-8 text-indigo-500" />}
          title="Integration Hub"
          description="Connect with your favorite gaming services and tools"
          tags={["Discord sync", "Twitch alerts", "Game stat tracking"]}
        />
        
        <FeatureCard 
          icon={<Palette className="h-8 w-8 text-indigo-500" />}
          title="Branding & Customization"
          description="Give your community a unique look and feel"
          tags={["Custom themes", "Logo design", "Color schemes"]}
        />
      </div>
    </section>
  );
};

const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  tags 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  tags: string[] 
}) => {
  return (
    <Card className="border-2 hover:border-indigo-300 transition-all duration-300">
      <CardHeader className="flex flex-row items-center gap-4">
        {icon}
        <div>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline" className="bg-indigo-50 dark:bg-indigo-950/30">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};