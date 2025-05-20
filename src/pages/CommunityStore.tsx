
import { PageLayout } from "@/components/PageLayout";
import { CommunityFeatures } from "@/components/communities/CommunityFeatures";
import { CommunityStoreHeader } from "@/components/communities/CommunityStoreHeader";
import { DiscordIntegration } from "@/components/communities/DiscordIntegration";
import { DeveloperSupport } from "@/components/communities/DeveloperSupport";
import { Separator } from "@/components/ui/separator";
import { DiscordWidget } from "@/components/DiscordWidget";
import { Shield } from "lucide-react";

const CommunityStore = () => {
  return (
    <PageLayout
      title="Community Storefront"
      description="Premium tools and features to elevate your gaming community"
    >
      <div className="space-y-10">
        <CommunityStoreHeader />
        
        <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-4 md:p-6">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="md:w-2/3 space-y-3">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-indigo-600" />
                <h2 className="text-xl font-bold text-indigo-800">Verification Services Now Available</h2>
              </div>
              <p className="text-muted-foreground">
                Our new verification system helps establish trusted communities with compliance-ready identity verification. 
                Perfect for government agencies, military personnel, and educational institutions.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <DiscordWidget />
            </div>
          </div>
        </div>
        
        <CommunityFeatures />
        
        <Separator className="my-8" />
        
        <DiscordIntegration />
        
        <Separator className="my-8" />
        
        <DeveloperSupport />
      </div>
    </PageLayout>
  );
};

export default CommunityStore;