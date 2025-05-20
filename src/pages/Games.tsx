
import { PageLayout } from "@/components/PageLayout";

const Games = () => {
  return (
    <PageLayout 
      title="Games" 
      description="Discover and play the latest games with our community"
    >
      <div className="prose prose-lg dark:prose-invert">
        <p>This page will showcase our featured games, new releases, and popular titles across different categories.</p>
        <p>Check back soon for more content!</p>
      </div>
    </PageLayout>
  );
};

export default Games;