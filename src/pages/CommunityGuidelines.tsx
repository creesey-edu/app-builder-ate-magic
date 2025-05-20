
import { PageLayout } from "@/components/PageLayout";

const CommunityGuidelines = () => {
  return (
    <PageLayout 
      title="Community Guidelines" 
      description="Standards and expectations for all members of our community"
    >
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p>Welcome to The Angry Gamer Show community! These guidelines help ensure that our platform remains a positive, inclusive, and enjoyable space for all members. By using our services, you agree to follow these guidelines.</p>
        
        <h2>Core Principles</h2>
        <p>Our community is built on these fundamental values:</p>
        <ul>
          <li><strong>Respect:</strong> Treat all community members with dignity and courtesy</li>
          <li><strong>Inclusivity:</strong> Welcome people of all backgrounds and skill levels</li>
          <li><strong>Fairness:</strong> Play by the rules and compete with integrity</li>
          <li><strong>Positivity:</strong> Contribute to a constructive and supportive environment</li>
        </ul>
        
        <h2>Prohibited Behavior</h2>
        <p>The following actions are not permitted on our platform:</p>
        
        <h3>Harassment and Bullying</h3>
        <ul>
          <li>Targeted abuse or intimidation of other users</li>
          <li>Repeated unwanted contact after being asked to stop</li>
          <li>Creating a hostile environment for others</li>
        </ul>
        
        <h3>Hate Speech</h3>
        <ul>
          <li>Content that promotes hatred or violence against protected groups</li>
          <li>Derogatory language based on identity factors</li>
          <li>Symbols or imagery associated with hate groups</li>
        </ul>
        
        <h3>Cheating and Exploitation</h3>
        <ul>
          <li>Using unauthorized software to gain advantages</li>
          <li>Exploiting bugs or glitches</li>
          <li>Match fixing or deliberately manipulating rankings</li>
        </ul>
        
        <h3>Inappropriate Content</h3>
        <ul>
          <li>Sexually explicit material</li>
          <li>Graphic violence</li>
          <li>Content that sexualizes minors</li>
          <li>Promotion of self-harm or dangerous activities</li>
        </ul>
        
        <h2>Enforcement</h2>
        <p>Our moderation team enforces these guidelines through:</p>
        <ul>
          <li>Content removal</li>
          <li>Warnings and temporary restrictions</li>
          <li>Account suspension or termination for serious violations</li>
          <li>Reporting to relevant authorities when legally required</li>
        </ul>
        
        <p>We consider context, intent, and pattern of behavior when evaluating potential violations. Our goal is to educate users and create opportunities for positive change.</p>
        
        <h2>Reporting Violations</h2>
        <p>If you witness a violation of these guidelines:</p>
        <ol>
          <li>Use the "Report" button available throughout the platform</li>
          <li>Provide specific details about the violation</li>
          <li>Our moderation team will review reports promptly</li>
        </ol>
        
        <p>These guidelines may be updated periodically to address emerging issues and community needs. We encourage all members to familiarize themselves with the current version.</p>
      </div>
    </PageLayout>
  );
};

export default CommunityGuidelines;