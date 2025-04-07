
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const CommunityStoreHeader = () => {
  const navigate = useNavigate();
  
  return (
    <div className="text-center space-y-6">
      <h1 className="text-3xl md:text-4xl font-bold">Community Premium Features</h1>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        Take your gaming community to the next level with our premium tools, integrations, and support
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button 
          size="lg" 
          onClick={() => navigate("/premium")}
          className="bg-indigo-600 hover:bg-indigo-700"
        >
          View Pricing Plans
        </Button>
        <Button 
          size="lg" 
          variant="outline"
          onClick={() => navigate("/communities")}
        >
          Back to Communities
        </Button>
      </div>
    </div>
  );
};
