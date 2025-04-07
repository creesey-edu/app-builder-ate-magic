
import { SUBSCRIPTION_PLANS } from "@/data/subscriptionPlans";
import { SubscriptionPlanCard } from "./SubscriptionPlanCard";

type SubscriptionPlansSectionProps = {
  isLoading: string | null;
  onSubscribe: (planId: string, planName: string) => void;
};

export const SubscriptionPlansSection = ({ isLoading, onSubscribe }: SubscriptionPlansSectionProps) => {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      <SubscriptionPlanCard
        planId={SUBSCRIPTION_PLANS.basic.id}
        planName={SUBSCRIPTION_PLANS.basic.name}
        price={SUBSCRIPTION_PLANS.basic.price}
        features={SUBSCRIPTION_PLANS.basic.features}
        isLoading={isLoading}
        onSubscribe={onSubscribe}
      />
      
      <SubscriptionPlanCard
        planId={SUBSCRIPTION_PLANS.pro.id}
        planName={SUBSCRIPTION_PLANS.pro.name}
        price={SUBSCRIPTION_PLANS.pro.price}
        features={SUBSCRIPTION_PLANS.pro.features}
        isPopular={true}
        isLoading={isLoading}
        onSubscribe={onSubscribe}
      />
      
      <SubscriptionPlanCard
        planId={SUBSCRIPTION_PLANS.streamer.id}
        planName={SUBSCRIPTION_PLANS.streamer.name}
        price={SUBSCRIPTION_PLANS.streamer.price}
        features={SUBSCRIPTION_PLANS.streamer.features}
        isStreamer={true}
        isLoading={isLoading}
        onSubscribe={onSubscribe}
      />
    </div>
  );
};