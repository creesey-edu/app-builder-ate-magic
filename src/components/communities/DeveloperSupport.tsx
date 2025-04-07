
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CodeIcon, Globe, Database, Smartphone, Image, Paintbrush } from "lucide-react";

export const DeveloperSupport = () => {
  return (
    <section className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold">Developer Support & Resources</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Our development team can help build custom tools, websites, and graphics for your community
        </p>
      </div>
      
      <Tabs defaultValue="websites" className="w-full">
        <TabsList className="grid grid-cols-3 md:grid-cols-6 mb-6">
          <TabsTrigger value="websites" className="flex gap-2 items-center">
            <Globe className="h-4 w-4" />
            <span className="hidden md:inline">Websites</span>
          </TabsTrigger>
          <TabsTrigger value="tools" className="flex gap-2 items-center">
            <CodeIcon className="h-4 w-4" />
            <span className="hidden md:inline">Tools</span>
          </TabsTrigger>
          <TabsTrigger value="databases" className="flex gap-2 items-center">
            <Database className="h-4 w-4" />
            <span className="hidden md:inline">Databases</span>
          </TabsTrigger>
          <TabsTrigger value="apps" className="flex gap-2 items-center">
            <Smartphone className="h-4 w-4" />
            <span className="hidden md:inline">Apps</span>
          </TabsTrigger>
          <TabsTrigger value="graphics" className="flex gap-2 items-center">
            <Image className="h-4 w-4" />
            <span className="hidden md:inline">Graphics</span>
          </TabsTrigger>
          <TabsTrigger value="branding" className="flex gap-2 items-center">
            <Paintbrush className="h-4 w-4" />
            <span className="hidden md:inline">Branding</span>
          </TabsTrigger>
        </TabsList>
        
        <ServiceContent 
          value="websites"
          title="Community Websites"
          description="Custom websites for your gaming community"
          features={[
            "Custom design matching your community aesthetic",
            "Member profiles and registration",
            "News and event calendar",
            "Forum integration",
            "Discord widget",
            "Mobile responsive design"
          ]}
        />
        
        <ServiceContent 
          value="tools"
          title="Custom Tools"
          description="Specialized tools for your community needs"
          features={[
            "Tournament brackets and leaderboards",
            "Stat tracking integrations",
            "Role management systems",
            "Custom chatbots",
            "Event scheduling tools",
            "Automated workflows"
          ]}
        />
        
        <ServiceContent 
          value="databases"
          title="Database Solutions"
          description="Manage your community data effectively"
          features={[
            "Member databases with custom fields",
            "Game inventory systems",
            "Achievement tracking",
            "Event registration data",
            "Analytics and reporting",
            "Secure data storage"
          ]}
        />
        
        <ServiceContent 
          value="apps"
          title="Mobile Applications"
          description="Take your community on the go"
          features={[
            "Native iOS and Android apps",
            "Push notifications for events",
            "Mobile access to community features",
            "Offline support",
            "Mobile-optimized chat",
            "Integration with game APIs"
          ]}
        />
        
        <ServiceContent 
          value="graphics"
          title="Graphics & Assets"
          description="Visual elements for your community"
          features={[
            "Stream overlays and alerts",
            "Custom emotes and badges",
            "Banner designs",
            "Social media templates",
            "Video intros and outros",
            "Profile frames and backgrounds"
          ]}
        />
        
        <ServiceContent 
          value="branding"
          title="Branding Package"
          description="Establish a consistent visual identity"
          features={[
            "Logo design and variations",
            "Color scheme development",
            "Typography selection",
            "Brand guidelines document",
            "Social media profile setup",
            "Brand voice consulting"
          ]}
        />
      </Tabs>
    </section>
  );
};

type ServiceContentProps = {
  value: string;
  title: string;
  description: string;
  features: string[];
};

const ServiceContent = ({ value, title, description, features }: ServiceContentProps) => {
  return (
    <TabsContent value={value} className="space-y-4">
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {features.map((feature, index) => (
          <Card key={index} className="bg-muted/40">
            <CardContent className="p-4 text-center">
              {feature}
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="text-center mt-8">
        <Button 
          size="lg" 
          className="bg-indigo-600 hover:bg-indigo-700"
        >
          Request Development Services
        </Button>
      </div>
    </TabsContent>
  );
};