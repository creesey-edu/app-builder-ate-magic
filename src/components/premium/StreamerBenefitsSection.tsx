
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type StreamerBenefitsSectionProps = {
  onLearnMore: () => void;
};

export const StreamerBenefitsSection = ({ onLearnMore }: StreamerBenefitsSectionProps) => {
  return (
    <div className="mt-12 bg-muted/50 p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Become an Official Streamer</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-medium mb-3">Benefits</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <Badge variant="community" className="mr-2">Community</Badge>
              Get featured on our Streamers page
            </li>
            <li className="flex items-center gap-2">
              <Badge variant="community" className="mr-2">Discord</Badge>
              Automatic "Streamer" role in Discord
            </li>
            <li className="flex items-center gap-2">
              <Badge variant="community" className="mr-2">Live</Badge>
              "Live Now" notifications when you stream
            </li>
            <li className="flex items-center gap-2">
              <Badge variant="community" className="mr-2">Support</Badge>
              Priority support from our team
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-xl font-medium mb-3">How it works</h3>
          <ol className="space-y-2 list-decimal list-inside">
            <li>Subscribe to our Elite Streamer tier</li>
            <li>Complete your streamer profile</li>
            <li>Link your Twitch, YouTube or Kick account</li>
            <li>Connect your Discord account</li>
            <li>Start streaming and get promoted!</li>
          </ol>
          <div className="mt-4">
            <Button 
              className="bg-indigo-600 hover:bg-indigo-700 mt-2"
              onClick={onLearnMore}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
