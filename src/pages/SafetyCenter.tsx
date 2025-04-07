
import { PageLayout } from "@/components/PageLayout";

const SafetyCenter = () => {
  return (
    <PageLayout 
      title="Safety Center" 
      description="Resources and information to help you stay safe on our platform"
    >
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p>At The Angry Gamer Show, your safety and wellbeing are our top priorities. Our Safety Center provides resources and guidance to help you have a positive experience on our platform.</p>
        
        <h2>Reporting Issues</h2>
        <p>If you encounter harassment, hate speech, threats, or other concerning behavior:</p>
        <ol>
          <li>Use the "Report" button available on posts, comments, and user profiles</li>
          <li>Provide specific details about the issue</li>
          <li>Our moderation team will review your report within 24 hours</li>
        </ol>
        
        <h2>Account Security</h2>
        <p>Protect your account with these best practices:</p>
        <ul>
          <li>Use a strong, unique password</li>
          <li>Enable two-factor authentication</li>
          <li>Be cautious of phishing attempts</li>
          <li>Log out when using shared computers</li>
          <li>Regularly check your account activity</li>
        </ul>
        
        <h2>Privacy Controls</h2>
        <p>Manage who can see your content and interact with you:</p>
        <ul>
          <li>Adjust your privacy settings in your account preferences</li>
          <li>Control who can send you messages</li>
          <li>Manage your visibility in communities</li>
        </ul>
        
        <h2>Youth Safety</h2>
        <p>For parents and guardians of younger users:</p>
        <ul>
          <li>Our platform is designed for users 13 and older</li>
          <li>We offer parental controls and monitoring options</li>
          <li>Educational resources about online safety are available</li>
        </ul>
        
        <h2>Mental Health Resources</h2>
        <p>Gaming should be enjoyable and never harmful to your wellbeing:</p>
        <ul>
          <li>Set healthy gaming limits</li>
          <li>Recognize signs of gaming addiction</li>
          <li>Know when to take breaks</li>
        </ul>
        
        <p>If you're experiencing a crisis or need immediate support, please contact a mental health professional or crisis hotline in your area.</p>
        
        <div className="mt-8 p-6 bg-yellow-100 dark:bg-yellow-900 rounded-lg">
          <h3 className="text-xl font-bold mb-2">Need Urgent Help?</h3>
          <p>If you or someone else is in immediate danger, please contact local emergency services (such as 911 in the US) right away.</p>
        </div>
      </div>
    </PageLayout>
  );
};

export default SafetyCenter;