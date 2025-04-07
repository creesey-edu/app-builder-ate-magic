
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Loader2 } from "lucide-react";

type SubscriptionPlanProps = {
  planId: string;
  planName: string;
  price: number;
  features: string[];
  isPopular?: boolean;
  isStreamer?: boolean;
  isLoading: string | null;
  onSubscribe: (planId: string, planName: string) => void;
};

export const SubscriptionPlanCard = ({
  planId,
  planName,
  price,
  features,
  isPopular = false,
  isStreamer = false,
  isLoading,
  onSubscribe
}: SubscriptionPlanProps) => {
  return (
    <div className={`border rounded-lg p-6 flex flex-col ${isPopular ? 'bg-primary/5' : ''} ${isStreamer ? 'relative overflow-hidden' : ''}`}>
      {isPopular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white px-3 py-1 rounded text-sm">Popular</div>
      )}
      {isStreamer && (
        <div className="absolute -right-12 top-6 rotate-45 bg-indigo-600 text-white px-12 py-1 text-sm">
          Streamer
        </div>
      )}
      <h3 className="text-xl font-bold mb-2">{planName}</h3>
      <p className="text-3xl font-bold mb-4">${price}<span className="text-sm font-normal">/month</span></p>
      <ul className="space-y-2 mb-6 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-green-500" />
            {feature === "Official Streamer Status" ? (
              <span className="font-semibold">{feature}</span>
            ) : (
              feature
            )}
          </li>
        ))}
      </ul>
      <Button 
        className={`w-full ${isStreamer ? 'bg-indigo-600 hover:bg-indigo-700' : ''}`}
        disabled={isLoading !== null}
        onClick={() => onSubscribe(planId, planName)}
      >
        {isLoading === planId ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Processing...
          </>
        ) : (
          isStreamer ? "Become a Streamer" : "Subscribe"
        )}
      </Button>
    </div>
  );
};