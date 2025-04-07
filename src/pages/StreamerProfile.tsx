
import { PageLayout } from "@/components/PageLayout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, Camera } from "lucide-react";
import { ProfileForm } from "@/components/streamer/ProfileForm";

const StreamerProfile = () => {
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
              Make sure to link at least one streaming platform and upload a profile image.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ProfileForm />
          </CardContent>
          <CardFooter className="bg-muted/50 flex flex-col items-start space-y-4">
            <div className="flex items-start gap-2">
              <Camera className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <h4 className="font-medium">Profile Image</h4>
                <p className="text-sm text-muted-foreground">
                  A high-quality profile image helps users recognize you. Upload a clear, face-focused image (recommended size: 500x500 pixels).
                </p>
              </div>
            </div>
            
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