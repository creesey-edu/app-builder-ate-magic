
import { PageLayout } from "@/components/PageLayout";

const PrivacyPolicy = () => {
  return (
    <PageLayout 
      title="Privacy Policy" 
      description="How we collect, use, and protect your personal information"
    >
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p><em>Last Updated: June 1, 2023</em></p>
        
        <p>At The Angry Gamer Show, we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you use our platform.</p>
        
        <h2>1. Information We Collect</h2>
        
        <h3>1.1 Information You Provide</h3>
        <ul>
          <li>Account information (name, email, username, password)</li>
          <li>Profile information (profile picture, bio, location, gaming preferences)</li>
          <li>Content you create, share, or upload</li>
          <li>Communications with us or other users</li>
          <li>Payment information when you purchase premium services</li>
        </ul>
        
        <h3>1.2 Information Collected Automatically</h3>
        <ul>
          <li>Device information (IP address, browser type, operating system)</li>
          <li>Usage data (pages visited, time spent, links clicked)</li>
          <li>Location data (with your permission)</li>
          <li>Cookies and similar tracking technologies</li>
        </ul>
        
        <h2>2. How We Use Your Information</h2>
        <p>We use your information to:</p>
        <ul>
          <li>Provide, maintain, and improve our services</li>
          <li>Process transactions and manage your account</li>
          <li>Personalize your experience and deliver relevant content</li>
          <li>Communicate with you about updates, features, and offers</li>
          <li>Monitor and analyze usage patterns and trends</li>
          <li>Protect the security and integrity of our platform</li>
          <li>Comply with legal obligations</li>
        </ul>
        
        <h2>3. Information Sharing</h2>
        <p>We may share your information with:</p>
        <ul>
          <li>Other users according to your privacy settings</li>
          <li>Service providers who perform services on our behalf</li>
          <li>Business partners (with your consent)</li>
          <li>Legal authorities when required by law</li>
        </ul>
        
        <h2>4. Your Rights and Choices</h2>
        <p>Depending on your location, you may have rights to:</p>
        <ul>
          <li>Access and receive a copy of your data</li>
          <li>Correct inaccurate data</li>
          <li>Delete your personal data</li>
          <li>Object to or restrict certain processing</li>
          <li>Data portability</li>
          <li>Withdraw consent</li>
        </ul>
        
        <h2>5. Data Security</h2>
        <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.</p>
        
        <h2>6. Data Retention</h2>
        <p>We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected, including legal, accounting, or reporting requirements.</p>
        
        <h2>7. Children's Privacy</h2>
        <p>Our Service is not directed to children under 13 years of age. We do not knowingly collect personal information from children under 13.</p>
        
        <h2>8. International Data Transfers</h2>
        <p>Your information may be transferred to and processed in countries other than your country of residence, which may have different data protection laws.</p>
        
        <h2>9. Changes to This Privacy Policy</h2>
        <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.</p>
        
        <h2>10. Contact Us</h2>
        <p>If you have questions about this Privacy Policy or our privacy practices, please contact our Data Protection Officer at privacy@angrygamershow.com.</p>
      </div>
    </PageLayout>
  );
};

export default PrivacyPolicy;
