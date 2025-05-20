
import { PageLayout } from "@/components/PageLayout";

const News = () => {
  return (
    <PageLayout 
      title="Gaming News" 
      description="Stay updated with the latest gaming news and trends"
    >
      <div className="prose prose-lg dark:prose-invert">
        <p>Read the latest news about game releases, updates, industry trends, and The Angry Gamer Show events.</p>
        <p>Check back soon for more content!</p>
      </div>
    </PageLayout>
  );
};

export default News;