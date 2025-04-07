
import { PageLayout } from "@/components/PageLayout";
import { CommunityFeatures } from "@/components/communities/CommunityFeatures";
import { CommunityStoreHeader } from "@/components/communities/CommunityStoreHeader";
import { DiscordIntegration } from "@/components/communities/DiscordIntegration";
import { DeveloperSupport } from "@/components/communities/DeveloperSupport";
import { Separator } from "@/components/ui/separator";

const CommunityStore = () => {
  return (
    <PageLayout
      title="Community Storefront"
      description="Premium tools and features to elevate your gaming community"
    >
      <div className="space-y-10">
        <CommunityStoreHeader />
        
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
