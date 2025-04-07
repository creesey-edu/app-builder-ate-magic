
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

export const DiscordIntegration = () => {
  return (
    <section className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold">Discord Integration with Management Bot</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Our powerful Discord bot helps you automate moderation, engage members, and create a seamless experience
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <div className="bg-indigo-600 rounded-lg p-8 text-white">
            <h3 className="text-xl font-bold mb-4">The Angry Gamer Bot Features</h3>
            <ul className="space-y-3">
              {[
                "Welcome new members with custom messages",
                "Auto-assign roles based on achievements",
                "Schedule and announce community events",
                "Moderation tools with customizable filters",
                "Server analytics and activity tracking",
                "Game stat integration with popular titles",
                "Custom commands and responses",
                "Member XP and leveling system",
                "Music player for voice channels",
                "Regular updates and new features"
              ].map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Check className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Button className="mt-6 bg-white text-indigo-600 hover:bg-gray-100">
              Add to Discord
            </Button>
          </div>
        </div>
        
        <Card className="p-6 space-y-4">
          <h3 className="text-xl font-bold">Custom Bot Development</h3>
          <p>Need something more specific for your community? Our development team can create custom Discord bot features tailored to your needs.</p>
          
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center">
                <Check className="h-6 w-6 text-indigo-600" />
              </div>
              <div>
                <h4 className="font-medium">Custom Commands</h4>
                <p className="text-sm text-muted-foreground">Unique commands specific to your community's needs</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center">
                <Check className="h-6 w-6 text-indigo-600" />
              </div>
              <div>
                <h4 className="font-medium">Game Integrations</h4>
                <p className="text-sm text-muted-foreground">Connect with specific games for stats, updates, and more</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center">
                <Check className="h-6 w-6 text-indigo-600" />
              </div>
              <div>
                <h4 className="font-medium">Automations</h4>
                <p className="text-sm text-muted-foreground">Streamline community management with custom workflows</p>
              </div>
            </div>
          </div>
          
          <Button variant="outline" className="mt-4">Get Custom Development</Button>
        </Card>
      </div>
    </section>
  );
};
