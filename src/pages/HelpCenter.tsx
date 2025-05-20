
import { PageLayout } from "@/components/PageLayout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const HelpCenter = () => {
  return (
    <PageLayout 
      title="Help Center" 
      description="Find answers to your questions and get support"
    >
      <div className="mb-8">
        <div className="relative">
          <Input 
            type="text" 
            placeholder="Search for help topics..." 
            className="pr-10"
          />
          <Button 
            variant="ghost" 
            size="sm" 
            className="absolute right-0 top-0 h-full px-3"
          >
            Search
          </Button>
        </div>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="border rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">Account & Profile</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-primary hover:underline">Creating an account</a></li>
            <li><a href="#" className="text-primary hover:underline">Updating your profile</a></li>
            <li><a href="#" className="text-primary hover:underline">Account security</a></li>
            <li><a href="#" className="text-primary hover:underline">Password recovery</a></li>
          </ul>
        </div>
        
        <div className="border rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">Communities</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-primary hover:underline">Joining communities</a></li>
            <li><a href="#" className="text-primary hover:underline">Creating a community</a></li>
            <li><a href="#" className="text-primary hover:underline">Community guidelines</a></li>
            <li><a href="#" className="text-primary hover:underline">Moderating your community</a></li>
          </ul>
        </div>
        
        <div className="border rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">Tournaments</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-primary hover:underline">Registering for tournaments</a></li>
            <li><a href="#" className="text-primary hover:underline">Tournament rules</a></li>
            <li><a href="#" className="text-primary hover:underline">Prizes and rewards</a></li>
            <li><a href="#" className="text-primary hover:underline">Technical requirements</a></li>
          </ul>
        </div>
      </div>
      
      <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>How do I create an account?</AccordionTrigger>
          <AccordionContent>
            To create an account, click on the "Sign Up" button in the top right corner of any page. Fill out the registration form with your email address, username, and password, then click "Create Account".
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-2">
          <AccordionTrigger>How do I join a community?</AccordionTrigger>
          <AccordionContent>
            Browse our communities page to find groups that interest you. Click on a community card to view more details, then click the "Join Community" button to become a member.
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-3">
          <AccordionTrigger>How do I register for tournaments?</AccordionTrigger>
          <AccordionContent>
            Visit our Tournaments page to see upcoming competitions. Click on a tournament to view details and eligibility requirements, then click "Register" to sign up. Some tournaments may require a registration fee or have specific entry requirements.
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-4">
          <AccordionTrigger>What are the benefits of a Premium membership?</AccordionTrigger>
          <AccordionContent>
            Premium members enjoy ad-free browsing, exclusive content, priority registration for tournaments, custom profile badges, and other special perks. Visit our Premium page to compare different membership tiers.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      
      <div className="mt-12 bg-primary/5 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-2">Still need help?</h3>
        <p className="mb-4">If you couldn't find the answer to your question, please contact our support team.</p>
        <Button asChild>
          <a href="/contact">Contact Support</a>
        </Button>
      </div>
    </PageLayout>
  );
};

export default HelpCenter;