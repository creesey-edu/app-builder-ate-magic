
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Loader2, AlertCircle, CheckCircle } from "lucide-react";
import { BasicInfoSection } from "./BasicInfoSection";
import { PlatformsSection } from "./PlatformsSection";
import { DiscordSection } from "./DiscordSection";
import { streamerProfileSchema, StreamerProfileFormValues, VerificationStatus } from "@/types/streamer";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { VerificationBadge } from "./VerificationBadge";

// Mock function for validation (in a real app, this would call your backend)
const validateSocialLinks = async (formData: StreamerProfileFormValues) => {
  // Simulate API validation
  await new Promise(resolve => setTimeout(resolve, 1500));
  // Dummy validation - in reality you'd check if the accounts exist
  return {
    valid: true,
    accounts: {
      twitch: !!formData.twitchUsername,
      youtube: !!formData.youtubeChannelId,
      kick: !!formData.kickUsername,
    }
  };
};

// Mock function to handle image upload (in a real app, this would upload to your storage)
const uploadImage = async (file: File): Promise<string> => {
  // Simulate API upload
  await new Promise(resolve => setTimeout(resolve, 2000));
  // Return a fake URL for demo purposes
  const randomId = Math.floor(Math.random() * 70);
  return `https://i.pravatar.cc/300?img=${randomId}`;
};

export const ProfileForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  // Initialize form with react-hook-form and zod validation
  const form = useForm<StreamerProfileFormValues>({
    resolver: zodResolver(streamerProfileSchema),
    defaultValues: {
      displayName: "",
      bio: "",
      twitchUsername: "",
      youtubeChannelId: "",
      kickUsername: "",
      discordUsername: "",
      profileImage: null,
    },
  });

  // Submit handler
  const onSubmit = async (data: StreamerProfileFormValues) => {
    setIsSubmitting(true);
    
    try {
      // Validate all social links
      const validation = await validateSocialLinks(data);
      
      if (validation.valid) {
        // Handle image upload if a file was provided
        let profileImageUrl: string | undefined;
        if (data.profileImage instanceof File) {
          profileImageUrl = await uploadImage(data.profileImage);
        }
        
        // In a real app, you would save the profile to your backend here
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        toast({
          title: "Profile submitted for verification!",
          description: "Your streamer profile has been created and is awaiting approval from our team.",
        });
        
        setIsSubmitted(true);
        // You could redirect to the user's new profile page
        // navigate(`/streamers/${userId}`);
      } else {
        toast({
          title: "Validation error",
          description: "Some of your account details couldn't be verified. Please check and try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error saving profile",
        description: "There was a problem saving your profile. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="space-y-6">
        <Alert className="bg-amber-50 border-amber-200">
          <AlertCircle className="h-5 w-5 text-amber-600" />
          <AlertTitle className="text-amber-800">Verification Pending</AlertTitle>
          <AlertDescription className="text-amber-700">
            Your streamer profile has been submitted and is currently under review. 
            You'll receive notification once our team has approved your profile.
          </AlertDescription>
        </Alert>
        
        <div className="bg-muted/50 p-4 rounded-lg border">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium">Application Status</h3>
            <VerificationBadge status={VerificationStatus.PENDING} />
          </div>
          
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>Profile information submitted</span>
            </div>
            <div className="flex items-center gap-2">
              <Loader2 className="h-4 w-4 text-amber-500 animate-spin" />
              <span>Verification by moderator team (typically within 24 hours)</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="h-4 w-4 rounded-full border border-muted-foreground flex items-center justify-center">
                <span className="text-[10px]">3</span>
              </div>
              <span>Discord role assignment (after verification)</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="h-4 w-4 rounded-full border border-muted-foreground flex items-center justify-center">
                <span className="text-[10px]">4</span>
              </div>
              <span>Profile appears on Streamers page (after verification)</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <BasicInfoSection control={form.control} disabled={isSubmitting} />
          <PlatformsSection control={form.control} disabled={isSubmitting} />
          <DiscordSection control={form.control} disabled={isSubmitting} />
        </div>

        <div className="flex justify-end mt-6">
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting Profile...
              </>
            ) : (
              "Submit Profile for Verification"
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
};
