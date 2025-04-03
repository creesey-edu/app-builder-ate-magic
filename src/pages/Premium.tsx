
import { PageLayout } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Gamepad2, Video, VideoIcon } from "lucide-react";

const Premium = () => {
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
          <h3 className="text-xl font-bold mb-2">Basic</h3>
          <p className="text-3xl font-bold mb-4">$5<span className="text-sm font-normal">/month</span></p>
          <ul className="space-y-2 mb-6 flex-grow">
            <li className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              Access to premium forums
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              Ad-free experience
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              Early access to articles
            </li>
          </ul>
          <Button className="w-full">Subscribe</Button>
        </div>
        
        <div className="border rounded-lg p-6 bg-primary/5 flex flex-col relative">
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white px-3 py-1 rounded text-sm">Popular</div>
          <h3 className="text-xl font-bold mb-2">Pro</h3>
          <p className="text-3xl font-bold mb-4">$10<span className="text-sm font-normal">/month</span></p>
          <ul className="space-y-2 mb-6 flex-grow">
            <li className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              All Basic features
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              Tournament priority registration
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              Exclusive game discounts
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              Monthly virtual events
            </li>
          </ul>
          <Button className="w-full">Subscribe</Button>
        </div>
        
        <div className="border rounded-lg p-6 flex flex-col relative overflow-hidden">
          <div className="absolute -right-12 top-6 rotate-45 bg-indigo-600 text-white px-12 py-1 text-sm">
            Streamer
          </div>
          <h3 className="text-xl font-bold mb-2">Elite Streamer</h3>
          <p className="text-3xl font-bold mb-4">$20<span className="text-sm font-normal">/month</span></p>
          <ul className="space-y-2 mb-6 flex-grow">
            <li className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              All Pro features
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              1-on-1 coaching sessions
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              Early access to beta tests
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              Custom profile badge
            </li>
            <li className="flex items-center gap-2">
              <VideoIcon className="h-5 w-5 text-indigo-500" />
              <span className="font-semibold">Official Streamer Status</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              Discord Streamer Role
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              Featured on Streamers page
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              Live status notifications
            </li>
          </ul>
          <Button className="w-full bg-indigo-600 hover:bg-indigo-700">Become a Streamer</Button>
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
              <Button className="bg-indigo-600 hover:bg-indigo-700 mt-2">
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
