
import { PageLayout } from "@/components/PageLayout";

const Careers = () => {
  return (
    <PageLayout 
      title="Careers" 
      description="Join our team and help us build the future of gaming communities"
    >
      <div className="prose prose-lg dark:prose-invert">
        <p>We're always looking for talented individuals who are passionate about gaming and community building. Explore current openings and opportunities to join The Angry Gamer Show team.</p>
        
        <h2>Current Openings</h2>
        <p>We'll list our job openings here as they become available. Check back soon!</p>
        
        <h2>Why Work With Us</h2>
        <ul>
          <li>Work with a passionate team of gamers and creators</li>
          <li>Flexible work arrangements and competitive benefits</li>
          <li>Opportunities for growth and professional development</li>
          <li>Make a real impact on the gaming community</li>
        </ul>
        
        <p>Even if you don't see a position that matches your skills, we're always interested in hearing from talented individuals who love gaming and community building. Send your resume to careers@angrygamershow.com.</p>
      </div>
    </PageLayout>
  );
};

export default Careers;