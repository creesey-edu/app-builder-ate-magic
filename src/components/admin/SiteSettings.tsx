
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { useForm } from "react-hook-form";

const SiteSettings = () => {
  const [isSaving, setIsSaving] = useState(false);
  
  const generalForm = useForm({
    defaultValues: {
      siteName: "Angry Gamer",
      siteDescription: "A platform for gamers and streamers",
      supportEmail: "support@angrygamer.com",
      contactPhone: "+1 (555) 123-4567"
    }
  });

  const featuresForm = useForm({
    defaultValues: {
      enableStreamers: true,
      enableTournaments: true,
      enableCommunities: true,
      enableNews: true,
      enablePremium: true
    }
  });

  const securityForm = useForm({
    defaultValues: {
      enableTwoFactor: true,
      requireEmailVerification: true,
      passwordMinLength: "8",
      sessionTimeout: "30"
    }
  });

  const handleGeneralSubmit = (data: any) => {
    setIsSaving(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log("General settings saved:", data);
      setIsSaving(false);
    }, 1000);
  };

  const handleFeaturesSubmit = (data: any) => {
    setIsSaving(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log("Feature settings saved:", data);
      setIsSaving(false);
    }, 1000);
  };

  const handleSecuritySubmit = (data: any) => {
    setIsSaving(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log("Security settings saved:", data);
      setIsSaving(false);
    }, 1000);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Site Settings</h2>
      
      <Tabs defaultValue="general" className="space-y-4">
        <TabsList>
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="features">Features</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
        </TabsList>
        
        <TabsContent value="general">
          <Card>
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
              <CardDescription>
                Configure the general settings for your site
              </CardDescription>
            </CardHeader>
            <Form {...generalForm}>
              <form onSubmit={generalForm.handleSubmit(handleGeneralSubmit)}>
                <CardContent className="space-y-4">
                  <FormField
                    control={generalForm.control}
                    name="siteName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Site Name</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={generalForm.control}
                    name="siteDescription"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Site Description</FormLabel>
                        <FormControl>
                          <Textarea {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={generalForm.control}
                    name="supportEmail"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Support Email</FormLabel>
                        <FormControl>
                          <Input type="email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={generalForm.control}
                    name="contactPhone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Contact Phone</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
                <CardFooter>
                  <Button type="submit" disabled={isSaving}>
                    {isSaving ? "Saving..." : "Save Changes"}
                  </Button>
                </CardFooter>
              </form>
            </Form>
          </Card>
        </TabsContent>
        
        <TabsContent value="features">
          <Card>
            <CardHeader>
              <CardTitle>Feature Settings</CardTitle>
              <CardDescription>
                Enable or disable site features
              </CardDescription>
            </CardHeader>
            <Form {...featuresForm}>
              <form onSubmit={featuresForm.handleSubmit(handleFeaturesSubmit)}>
                <CardContent className="space-y-4">
                  <FormField
                    control={featuresForm.control}
                    name="enableStreamers"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3">
                        <div className="space-y-0.5">
                          <FormLabel>Streamers</FormLabel>
                          <FormDescription>
                            Enable the streamers section
                          </FormDescription>
                        </div>
                        <FormControl>
                          <Switch
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={featuresForm.control}
                    name="enableTournaments"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3">
                        <div className="space-y-0.5">
                          <FormLabel>Tournaments</FormLabel>
                          <FormDescription>
                            Enable the tournaments section
                          </FormDescription>
                        </div>
                        <FormControl>
                          <Switch
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={featuresForm.control}
                    name="enableCommunities"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3">
                        <div className="space-y-0.5">
                          <FormLabel>Communities</FormLabel>
                          <FormDescription>
                            Enable the communities section
                          </FormDescription>
                        </div>
                        <FormControl>
                          <Switch
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={featuresForm.control}
                    name="enableNews"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3">
                        <div className="space-y-0.5">
                          <FormLabel>News</FormLabel>
                          <FormDescription>
                            Enable the news section
                          </FormDescription>
                        </div>
                        <FormControl>
                          <Switch
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={featuresForm.control}
                    name="enablePremium"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3">
                        <div className="space-y-0.5">
                          <FormLabel>Premium Features</FormLabel>
                          <FormDescription>
                            Enable premium subscription features
                          </FormDescription>
                        </div>
                        <FormControl>
                          <Switch
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </CardContent>
                <CardFooter>
                  <Button type="submit" disabled={isSaving}>
                    {isSaving ? "Saving..." : "Save Changes"}
                  </Button>
                </CardFooter>
              </form>
            </Form>
          </Card>
        </TabsContent>
        
        <TabsContent value="security">
          <Card>
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
              <CardDescription>
                Configure security settings for your site
              </CardDescription>
            </CardHeader>
            <Form {...securityForm}>
              <form onSubmit={securityForm.handleSubmit(handleSecuritySubmit)}>
                <CardContent className="space-y-4">
                  <FormField
                    control={securityForm.control}
                    name="enableTwoFactor"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3">
                        <div className="space-y-0.5">
                          <FormLabel>Two-Factor Authentication</FormLabel>
                          <FormDescription>
                            Require two-factor authentication for admin accounts
                          </FormDescription>
                        </div>
                        <FormControl>
                          <Switch
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={securityForm.control}
                    name="requireEmailVerification"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3">
                        <div className="space-y-0.5">
                          <FormLabel>Email Verification</FormLabel>
                          <FormDescription>
                            Require email verification for new accounts
                          </FormDescription>
                        </div>
                        <FormControl>
                          <Switch
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={securityForm.control}
                    name="passwordMinLength"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Minimum Password Length</FormLabel>
                        <FormControl>
                          <Input type="number" min="6" max="24" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={securityForm.control}
                    name="sessionTimeout"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Session Timeout (minutes)</FormLabel>
                        <FormControl>
                          <Input type="number" min="5" max="120" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
                <CardFooter>
                  <Button type="submit" disabled={isSaving}>
                    {isSaving ? "Saving..." : "Save Changes"}
                  </Button>
                </CardFooter>
              </form>
            </Form>
          </Card>
        </TabsContent>
        
        <TabsContent value="maintenance">
          <Card>
            <CardHeader>
              <CardTitle>Maintenance Mode</CardTitle>
              <CardDescription>
                Put the site in maintenance mode to perform updates
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-row items-center justify-between rounded-lg border p-3">
                <div className="space-y-0.5">
                  <FormLabel>Maintenance Mode</FormLabel>
                  <FormDescription>
                    When enabled, the site will display a maintenance message to visitors
                  </FormDescription>
                </div>
                <Switch />
              </div>
              
              <div className="pt-2">
                <FormLabel>Maintenance Message</FormLabel>
                <Textarea
                  placeholder="Enter a message to display during maintenance..."
                  className="mt-1"
                  defaultValue="We're currently performing scheduled maintenance. Please check back soon!"
                />
              </div>
              
              <div className="pt-2">
                <FormLabel>Expected Completion</FormLabel>
                <Input
                  type="datetime-local"
                  className="mt-1"
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Reset</Button>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

// Missing imports to satisfy TypeScript
const FormDescription = ({ children }: { children: React.ReactNode }) => {
  return <p className="text-sm text-muted-foreground">{children}</p>;
};

export default SiteSettings;
