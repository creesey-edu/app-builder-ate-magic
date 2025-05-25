
const Blog = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Insights, updates, and stories from The Angry Gamer Show team
        </p>
        
        <div className="prose prose-lg dark:prose-invert">
          <p>Stay updated with our latest blog posts, featuring gaming insights, community spotlights, and updates from The Angry Gamer Show team.</p>
          
          <div className="my-8">
            <p className="text-muted-foreground">Coming soon! Our blog content is currently under development.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
