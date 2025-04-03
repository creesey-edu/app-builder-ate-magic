
import { PageLayout } from "@/components/PageLayout";

const About = () => {
  return (
    <PageLayout 
      title="About Us" 
      description="Learn more about The Angry Gamer Show and our mission"
    >
      <div className="prose prose-lg dark:prose-invert">
        <p>The Angry Gamer Show is a community-driven platform dedicated to bringing gamers together from around the world. Founded in 2023, we've grown into a thriving ecosystem of players, creators, and enthusiasts.</p>
        
        <h2>Our Mission</h2>
        <p>We aim to create a positive and inclusive gaming environment where players can connect, compete, and learn. Our focus is on building communities that celebrate the joy of gaming while providing educational resources and events.</p>
        
        <h2>Our Team</h2>
        <p>Our passionate team consists of gaming industry veterans, content creators, and community leaders who are dedicated to improving the gaming experience for everyone.</p>
        
        <h2>Community Values</h2>
        <p>We believe in:</p>
        <ul>
          <li>Inclusivity and respect for all gamers</li>
          <li>Fair play and sportsmanship</li>
          <li>Continuous learning and skill development</li>
          <li>Creating meaningful connections through shared interests</li>
        </ul>
      </div>
    </PageLayout>
  );
};

export default About;
