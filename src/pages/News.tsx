
const News = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Gaming News</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Stay updated with the latest gaming news and trends
        </p>
        
        <div className="prose prose-lg dark:prose-invert">
          <p>Read the latest news about game releases, updates, industry trends, and The Angry Gamer Show events.</p>
          <p>Check back soon for more content!</p>
        </div>
      </div>
    </div>
  );
};

export default News;
