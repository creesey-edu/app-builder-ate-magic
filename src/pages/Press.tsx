
import { PageLayout } from "@/components/PageLayout";

const Press = () => {
  return (
    <PageLayout 
      title="Press & Media" 
      description="Media resources and press information for The Angry Gamer Show"
    >
      <div className="prose prose-lg dark:prose-invert">
        <p>Welcome to our press center. Here you'll find media resources, press releases, and information about The Angry Gamer Show.</p>
        
        <h2>Press Kit</h2>
        <p>Our press kit includes logos, brand guidelines, executive bios, and high-resolution images for media use.</p>
        <p>Download our press kit (coming soon)</p>
        
        <h2>Press Releases</h2>
        <p>Find our latest announcements and press releases.</p>
        <p>No press releases available yet.</p>
        
        <h2>Media Inquiries</h2>
        <p>For interview requests, press inquiries, or additional information, please contact our media relations team at press@angrygamershow.com</p>
      </div>
    </PageLayout>
  );
};

export default Press;
