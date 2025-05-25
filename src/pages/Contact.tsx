
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      setIsSubmitting(false);
      
      // Reset form
      const form = e.target as HTMLFormElement;
      form.reset();
    }, 1000);
  };
  
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Get in touch with The Angry Gamer Show team
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="prose prose-lg dark:prose-invert">
            <p>Have questions, suggestions, or just want to say hello? We'd love to hear from you!</p>
            
            <h3>General Inquiries</h3>
            <p>For general questions about The Angry Gamer Show, please email us at info@angrygamershow.com</p>
            
            <h3>Technical Support</h3>
            <p>Need help with your account or experiencing technical issues? Contact support@angrygamershow.com</p>
            
            <h3>Business Opportunities</h3>
            <p>For partnership inquiries, sponsorships, or business opportunities, reach out to business@angrygamershow.com</p>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <Input type="text" placeholder="Your name" required />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <Input type="email" placeholder="Your email address" required />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Subject</label>
                <Input type="text" placeholder="What is this regarding?" required />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Message</label>
                <Textarea placeholder="How can we help you?" rows={5} required />
              </div>
              
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
