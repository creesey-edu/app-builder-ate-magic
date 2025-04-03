
import { useState } from "react";
import { PageLayout } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { 
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { 
  TwitchIcon, 
  YoutubeIcon, 
  MonitorPlay, 
  DiscordLogo, 
  Upload, 
  CheckCircle,
  AlertCircle,
  Loader2
} from "lucide-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// Define the form schema with Zod
const streamerProfileSchema = z.object({
  displayName: z.string().min(3, { message: "Display name must be at least 3 characters" }).max(30),
  bio: z.string().min(10, { message: "Bio must be at least 10 characters" }).max(300),
  twitchUsername: z.string().optional(),
  youtubeChannelId: z.string().optional(),
  kickUsername: z.string().optional(),
  discordUsername: z.string().min(2, { message: "Discord username is required" }),
  // In a real app you'd handle image upload differently
  profileImage: z.any().optional(),
});

type StreamerProfileFormValues = z.infer<typeof streamerProfileSchema>;

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

const StreamerProfile = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [validatedAccounts, setValidatedAccounts] = useState<Record<string, boolean>>({});
  const [isValidating, setIsValidating] = useState<Record<string, boolean>>({});
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
    },
  });

  // Validate a single platform
  const validatePlatform = async (platform: string, value: string) => {
    if (!value) return;
    
    setIsValidating(prev => ({ ...prev, [platform]: true }));
    
    // Simulate API validation
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // In a real app, you would validate the account exists
    const isValid = true; // Assume valid for demo
    
    setValidatedAccounts(prev => ({ ...prev, [platform]: isValid }));
    setIsValidating(prev => ({ ...prev, [platform]: false }));
    
    toast({
      title: isValid ? "Account verified" : "Verification failed",
      description: isValid 
        ? `Your ${platform} account has been verified.` 
        : `We couldn't verify your ${platform} account. Please check the username.`,
      variant: isValid ? "default" : "destructive",
    });
  };

  // Submit handler
  const onSubmit = async (data: StreamerProfileFormValues) => {
    setIsSubmitting(true);
    
    try {
      // Validate all social links
      const validation = await validateSocialLinks(data);
      
      if (validation.valid) {
        // In a real app, you would save the profile to your backend here
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        toast({
          title: "Profile saved!",
          description: "Your streamer profile has been created successfully.",
        });
        
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

  return (
    <PageLayout
      title="Streamer Profile Setup"
      description="Set up your profile as an Elite Streamer"
    >
      <div className="max-w-3xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Create Your Streamer Profile</CardTitle>
            <CardDescription>
              Fill out the information below to set up your official streamer profile.
              Make sure to link at least one streaming platform.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Basic Info */}
                  <div className="space-y-4 md:col-span-2">
                    <h3 className="text-lg font-medium">Basic Information</h3>
                    
                    <FormField
                      control={form.control}
                      name="displayName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Display Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your streamer name" {...field} />
                          </FormControl>
                          <FormDescription>
                            This is how you'll appear on our streamers page
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="bio"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Bio</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell the community about yourself and your content" 
                              {...field} 
                              className="resize-none"
                              rows={4}
                            />
                          </FormControl>
                          <FormDescription>
                            Maximum 300 characters
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Platform Links */}
                  <div className="space-y-4 md:col-span-2">
                    <h3 className="text-lg font-medium">Streaming Platforms</h3>
                    <p className="text-sm text-muted-foreground">Link at least one streaming platform where you create content</p>
                    
                    <div className="space-y-4">
                      {/* Twitch */}
                      <div className="flex flex-col md:flex-row gap-3">
                        <FormField
                          control={form.control}
                          name="twitchUsername"
                          render={({ field }) => (
                            <FormItem className="flex-grow">
                              <FormLabel className="flex items-center gap-2">
                                <TwitchIcon className="h-4 w-4 text-purple-600" />
                                Twitch Username
                              </FormLabel>
                              <div className="flex gap-2">
                                <FormControl>
                                  <Input placeholder="yourusername" {...field} />
                                </FormControl>
                                <Button 
                                  type="button" 
                                  variant="outline" 
                                  size="sm"
                                  disabled={!field.value || isValidating.twitch}
                                  onClick={() => validatePlatform('twitch', field.value)}
                                  className="whitespace-nowrap"
                                >
                                  {isValidating.twitch ? (
                                    <>
                                      <Loader2 className="mr-1 h-3 w-3 animate-spin" />
                                      Verifying
                                    </>
                                  ) : validatedAccounts.twitch ? (
                                    <>
                                      <CheckCircle className="mr-1 h-3 w-3 text-green-500" />
                                      Verified
                                    </>
                                  ) : (
                                    "Verify Account"
                                  )}
                                </Button>
                              </div>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      {/* YouTube */}
                      <div className="flex flex-col md:flex-row gap-3">
                        <FormField
                          control={form.control}
                          name="youtubeChannelId"
                          render={({ field }) => (
                            <FormItem className="flex-grow">
                              <FormLabel className="flex items-center gap-2">
                                <YoutubeIcon className="h-4 w-4 text-red-600" />
                                YouTube Channel ID
                              </FormLabel>
                              <div className="flex gap-2">
                                <FormControl>
                                  <Input placeholder="Your channel ID" {...field} />
                                </FormControl>
                                <Button 
                                  type="button" 
                                  variant="outline" 
                                  size="sm"
                                  disabled={!field.value || isValidating.youtube}
                                  onClick={() => validatePlatform('youtube', field.value)}
                                  className="whitespace-nowrap"
                                >
                                  {isValidating.youtube ? (
                                    <>
                                      <Loader2 className="mr-1 h-3 w-3 animate-spin" />
                                      Verifying
                                    </>
                                  ) : validatedAccounts.youtube ? (
                                    <>
                                      <CheckCircle className="mr-1 h-3 w-3 text-green-500" />
                                      Verified
                                    </>
                                  ) : (
                                    "Verify Account"
                                  )}
                                </Button>
                              </div>
                              <FormDescription>
                                Found in your YouTube channel URL
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      {/* Kick */}
                      <div className="flex flex-col md:flex-row gap-3">
                        <FormField
                          control={form.control}
                          name="kickUsername"
                          render={({ field }) => (
                            <FormItem className="flex-grow">
                              <FormLabel className="flex items-center gap-2">
                                <MonitorPlay className="h-4 w-4 text-green-600" />
                                Kick Username
                              </FormLabel>
                              <div className="flex gap-2">
                                <FormControl>
                                  <Input placeholder="yourusername" {...field} />
                                </FormControl>
                                <Button 
                                  type="button" 
                                  variant="outline" 
                                  size="sm"
                                  disabled={!field.value || isValidating.kick}
                                  onClick={() => validatePlatform('kick', field.value)}
                                  className="whitespace-nowrap"
                                >
                                  {isValidating.kick ? (
                                    <>
                                      <Loader2 className="mr-1 h-3 w-3 animate-spin" />
                                      Verifying
                                    </>
                                  ) : validatedAccounts.kick ? (
                                    <>
                                      <CheckCircle className="mr-1 h-3 w-3 text-green-500" />
                                      Verified
                                    </>
                                  ) : (
                                    "Verify Account"
                                  )}
                                </Button>
                              </div>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Discord */}
                  <div className="space-y-4 md:col-span-2">
                    <h3 className="text-lg font-medium">Discord Integration</h3>
                    
                    <FormField
                      control={form.control}
                      name="discordUsername"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2">
                            <DiscordLogo className="h-4 w-4 text-indigo-400" />
                            Discord Username
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="username (e.g. username#1234)" {...field} />
                          </FormControl>
                          <FormDescription>
                            Required to assign your Discord Streamer role
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                <div className="flex justify-end mt-6">
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Saving Profile...
                      </>
                    ) : (
                      "Save Profile"
                    )}
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
          <CardFooter className="bg-muted/50 flex flex-col items-start">
            <div className="flex items-start gap-2">
              <AlertCircle className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <h4 className="font-medium">Important Note</h4>
                <p className="text-sm text-muted-foreground">
                  After creating your profile, our moderators will review your application. 
                  You'll receive your Discord roles and appear on the Streamers page within 24 hours.
                </p>
              </div>
            </div>
          </CardFooter>
        </Card>
      </div>
    </PageLayout>
  );
};

export default StreamerProfile;
