
import { useState } from "react";
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2, CheckCircle } from "lucide-react";
import { Control } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";
import { StreamerProfileFormValues } from "@/types/streamer";

interface PlatformFieldProps {
  control: Control<StreamerProfileFormValues>;
  name: "twitchUsername" | "youtubeChannelId" | "kickUsername";
  label: string;
  icon: React.ReactNode;
  placeholder: string;
  description?: string;
}

export const PlatformField = ({ 
  control, 
  name, 
  label, 
  icon, 
  placeholder, 
  description 
}: PlatformFieldProps) => {
  const [isValidating, setIsValidating] = useState(false);
  const [isValidated, setIsValidated] = useState(false);
  const { toast } = useToast();
  
  const validatePlatform = async (value: string) => {
    if (!value) return;
    
    setIsValidating(true);
    
    // Simulate API validation
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // In a real app, you would validate the account exists
    const isValid = true; // Assume valid for demo
    
    setIsValidated(isValid);
    setIsValidating(false);
    
    toast({
      title: isValid ? "Account verified" : "Verification failed",
      description: isValid 
        ? `Your ${name} account has been verified.` 
        : `We couldn't verify your ${name} account. Please check the username.`,
      variant: isValid ? "default" : "destructive",
    });
  };

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex-grow">
          <FormLabel className="flex items-center gap-2">
            {icon}
            {label}
          </FormLabel>
          <div className="flex gap-2">
            <FormControl>
              <Input placeholder={placeholder} {...field} />
            </FormControl>
            <Button 
              type="button" 
              variant="outline" 
              size="sm"
              disabled={!field.value || isValidating}
              onClick={() => validatePlatform(field.value)}
              className="whitespace-nowrap"
            >
              {isValidating ? (
                <>
                  <Loader2 className="mr-1 h-3 w-3 animate-spin" />
                  Verifying
                </>
              ) : isValidated ? (
                <>
                  <CheckCircle className="mr-1 h-3 w-3 text-green-500" />
                  Verified
                </>
              ) : (
                "Verify Account"
              )}
            </Button>
          </div>
          {description && (
            <FormDescription>
              {description}
            </FormDescription>
          )}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
