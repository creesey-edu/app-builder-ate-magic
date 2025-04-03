import { useState } from "react";
import { PageLayout } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Gamepad2, Loader2, Video, VideoIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

const SUBSCRIPTION_PLANS = {
  basic: {
    id: "basic-plan",
    name: "Basic",
    price: 5,
    features: ["Access to premium forums", "Ad-free experience", "Early access to articles"]
  },
  pro: {
    id: "pro-plan",
    name: "Pro",
    price: 10,
    features: ["All Basic features", "Tournament priority registration", "Exclusive game discounts", "Monthly virtual events"]
  },
  streamer: {
    id: "elite-streamer-plan",
    name: "Elite Streamer",
    price: 20,
    features: [
      "All Pro features", 
      "1-on-1 coaching sessions", 
      "Early access to beta tests", 
      "Custom profile badge", 
      "Official Streamer Status", 
      "Discord Streamer Role", 
      "Featured on Streamers page",
      "Live status notifications"
    ]
  }
};

const Premium = () => {
  const [isLoading, setIsLoading] = useState<string | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubscribe = async (planId: string, planName: string) => {
    setIsLoading(planId);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Subscription started!",
        description: `You've successfully subscribed to the ${planName} plan.`,
        variant: "default",
      });
      
      if (planId === "elite-streamer-plan") {
        navigate("/streamer-profile");
      } else {
        setIsLoading(null);
      }
    } catch (error) {
      toast({
        title: "Subscription failed",
        description: "There was an error processing your subscription. Please try again.",
        variant: "destructive",
      });
      setIsLoading(null);
    }
  };

  const handleLearnMore = () => {
    navigate("/streamers");
  };

  return (
    <PageLayout 
      title="Premium Membership" 
      description="Unlock exclusive benefits with our premium membership"
    >
      <div className="prose prose-lg dark:prose-invert mb-8">
        <p>Get access to exclusive content, special events, and premium features with our membership plans.</p>
        <p className="text-primary font-medium">Become an official streamer for The Angry Gamer Show community!</p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        <div className="border rounded-lg p-6 flex flex-col">
          <h3 className="text-xl font-bold mb-2">{SUBSCRIPTION_PLANS.basic.name}</h3>
          <p className="text-3xl font-bold mb-4">${SUBSCRIPTION_PLANS.basic.price}<span className="text-sm font-normal">/month</span></p>
          <ul className="space-y-2 mb-6 flex-grow">
            {SUBSCRIPTION_PLANS.basic.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                {feature}
              </li>
            ))}
          </ul>
          <Button 
            className="w-full" 
            disabled={isLoading !== null}
            onClick={() => handleSubscribe(SUBSCRIPTION_PLANS.basic.id, SUBSCRIPTION_PLANS.basic.name)}
          >
            {isLoading === SUBSCRIPTION_PLANS.basic.id ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing...
              </>
            ) : (
              "Subscribe"
            )}
          </Button>
        </div>
        
        <div className="border rounded-lg p-6 bg-primary/5 flex flex-col relative">
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white px-3 py-1 rounded text-sm">Popular</div>
          <h3 className="text-xl font-bold mb-2">{SUBSCRIPTION_PLANS.pro.name}</h3>
          <p className="text-3xl font-bold mb-4">${SUBSCRIPTION_PLANS.pro.price}<span className="text-sm font-normal">/month</span></p>
          <ul className="space-y-2 mb-6 flex-grow">
            {SUBSCRIPTION_PLANS.pro.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                {feature}
              </li>
            ))}
          </ul>
          <Button 
            className="w-full" 
            disabled={isLoading !== null}
            onClick={() => handleSubscribe(SUBSCRIPTION_PLANS.pro.id, SUBSCRIPTION_PLANS.pro.name)}
          >
            {isLoading === SUBSCRIPTION_PLANS.pro.id ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing...
              </>
            ) : (
              "Subscribe"
            )}
          </Button>
        </div>
        
        <div className="border rounded-lg p-6 flex flex-col relative overflow-hidden">
          <div className="absolute -right-12 top-6 rotate-45 bg-indigo-600 text-white px-12 py-1 text-sm">
            Streamer
          </div>
          <h3 className="text-xl font-bold mb-2">{SUBSCRIPTION_PLANS.streamer.name}</h3>
          <p className="text-3xl font-bold mb-4">${SUBSCRIPTION_PLANS.streamer.price}<span className="text-sm font-normal">/month</span></p>
          <ul className="space-y-2 mb-6 flex-grow">
            {SUBSCRIPTION_PLANS.streamer.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                {feature === "Official Streamer Status" ? (
                  <VideoIcon className="h-5 w-5 text-indigo-500" />
                ) : (
                  <CheckCircle className="h-5 w-5 text-green-500" />
                )}
                {feature === "Official Streamer Status" ? (
                  <span className="font-semibold">{feature}</span>
                ) : (
                  feature
                )}
              </li>
            ))}
          </ul>
          <Button 
            className="w-full bg-indigo-600 hover:bg-indigo-700"
            disabled={isLoading !== null}
            onClick={() => handleSubscribe(SUBSCRIPTION_PLANS.streamer.id, SUBSCRIPTION_PLANS.streamer.name)}
          >
            {isLoading === SUBSCRIPTION_PLANS.streamer.id ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing...
              </>
            ) : (
              "Become a Streamer"
            )}
          </Button>
        </div>
      </div>
      
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
                onClick={handleLearnMore}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Premium;
