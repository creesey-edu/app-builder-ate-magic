
import { PageLayout } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";

const Premium = () => {
  return (
    <PageLayout 
      title="Premium Membership" 
      description="Unlock exclusive benefits with our premium membership"
    >
      <div className="prose prose-lg dark:prose-invert mb-8">
        <p>Get access to exclusive content, special events, and premium features with our membership plans.</p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        <div className="border rounded-lg p-6 flex flex-col">
          <h3 className="text-xl font-bold mb-2">Basic</h3>
          <p className="text-3xl font-bold mb-4">$5<span className="text-sm font-normal">/month</span></p>
          <ul className="space-y-2 mb-6 flex-grow">
            <li>Access to premium forums</li>
            <li>Ad-free experience</li>
            <li>Early access to articles</li>
          </ul>
          <Button className="w-full">Subscribe</Button>
        </div>
        
        <div className="border rounded-lg p-6 bg-primary/5 flex flex-col relative">
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white px-3 py-1 rounded text-sm">Popular</div>
          <h3 className="text-xl font-bold mb-2">Pro</h3>
          <p className="text-3xl font-bold mb-4">$10<span className="text-sm font-normal">/month</span></p>
          <ul className="space-y-2 mb-6 flex-grow">
            <li>All Basic features</li>
            <li>Tournament priority registration</li>
            <li>Exclusive game discounts</li>
            <li>Monthly virtual events</li>
          </ul>
          <Button className="w-full">Subscribe</Button>
        </div>
        
        <div className="border rounded-lg p-6 flex flex-col">
          <h3 className="text-xl font-bold mb-2">Elite</h3>
          <p className="text-3xl font-bold mb-4">$20<span className="text-sm font-normal">/month</span></p>
          <ul className="space-y-2 mb-6 flex-grow">
            <li>All Pro features</li>
            <li>1-on-1 coaching sessions</li>
            <li>Early access to beta tests</li>
            <li>Custom profile badge</li>
            <li>Quarterly merchandise</li>
          </ul>
          <Button className="w-full">Subscribe</Button>
        </div>
      </div>
    </PageLayout>
  );
};

export default Premium;
