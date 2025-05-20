
import { PageLayout } from "@/components/PageLayout";

const Blog = () => {
  return (
    <PageLayout 
      title="Blog" 
      description="Insights, updates, and stories from The Angry Gamer Show team"
    >
      <div className="prose prose-lg dark:prose-invert">
        <p>Stay updated with our latest blog posts, featuring gaming insights, community spotlights, and updates from The Angry Gamer Show team.</p>
        
        <div className="my-8">
          <p className="text-muted-foreground">Coming soon! Our blog content is currently under development.</p>
        </div>
      </div>
    </PageLayout>
  );
};

export default Blog;