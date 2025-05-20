
import { useState } from "react";
import { PageLayout } from "@/components/PageLayout";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { SUBSCRIPTION_PLANS } from "@/data/subscriptionPlans";
import { SubscriptionPlansSection } from "@/components/premium/SubscriptionPlansSection";
import { StreamerBenefitsSection } from "@/components/premium/StreamerBenefitsSection";

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
      
      <SubscriptionPlansSection 
        isLoading={isLoading}
        onSubscribe={handleSubscribe}
      />
      
      <StreamerBenefitsSection onLearnMore={handleLearnMore} />
    </PageLayout>
  );
};

export default Premium;