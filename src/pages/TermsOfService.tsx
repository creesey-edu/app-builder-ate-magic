
import { PageLayout } from "@/components/PageLayout";

const TermsOfService = () => {
  return (
    <PageLayout 
      title="Terms of Service" 
      description="Legal agreement governing your use of The Angry Gamer Show platform"
    >
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p><em>Last Updated: June 1, 2023</em></p>
        
        <p>Please read these Terms of Service ("Terms") carefully before using The Angry Gamer Show website and related services (collectively, the "Service").</p>
        
        <h2>1. Acceptance of Terms</h2>
        <p>By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the Terms, you may not access the Service.</p>
        
        <h2>2. Description of Service</h2>
        <p>The Angry Gamer Show provides an online platform for gaming communities, tournaments, news, and related content. We may modify, update, or discontinue any aspect of the Service at our sole discretion.</p>
        
        <h2>3. User Accounts</h2>
        <p>To access certain features of the Service, you must create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must provide accurate and complete information when creating your account.</p>
        
        <h2>4. User Content</h2>
        <p>Users may post, upload, or share content on the Service ("User Content"). You retain ownership of your User Content, but grant us a non-exclusive, royalty-free, worldwide license to use, display, and distribute your User Content in connection with the Service.</p>
        
        <h2>5. Prohibited Activities</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Violate our Community Guidelines</li>
          <li>Use the Service for any illegal purpose</li>
          <li>Attempt to gain unauthorized access to any part of the Service</li>
          <li>Interfere with the proper functioning of the Service</li>
          <li>Collect user data without appropriate consent</li>
          <li>Impersonate others or misrepresent your affiliation with any person or entity</li>
        </ul>
        
        <h2>6. Intellectual Property</h2>
        <p>The Service and its original content (excluding User Content) are and will remain the exclusive property of The Angry Gamer Show and its licensors. The Service is protected by copyright, trademark, and other laws.</p>
        
        <h2>7. Privacy Policy</h2>
        <p>Your use of the Service is also governed by our Privacy Policy, which is incorporated into these Terms by reference.</p>
        
        <h2>8. Termination</h2>
        <p>We may terminate or suspend your account and access to the Service immediately, without prior notice or liability, for any breach of these Terms or for any other reason at our sole discretion.</p>
        
        <h2>9. Limitation of Liability</h2>
        <p>In no event shall The Angry Gamer Show, its directors, employees, or agents be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the Service.</p>
        
        <h2>10. Changes to Terms</h2>
        <p>We reserve the right to modify or replace these Terms at any time. We will provide notice of significant changes through the Service or by other means. Your continued use of the Service after any changes constitutes acceptance of the new Terms.</p>
        
        <h2>11. Governing Law</h2>
        <p>These Terms shall be governed by the laws of the United States, without regard to its conflict of law provisions.</p>
        
        <h2>12. Contact Us</h2>
        <p>If you have any questions about these Terms, please contact us at legal@angrygamershow.com.</p>
      </div>
    </PageLayout>
  );
};

export default TermsOfService;
