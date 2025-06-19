
/**
 * @metadata
 * {
 *   "project": "TAGS",
 *   "module": "Home Page",
 *   "phase": "Public Pages",
 *   "tags": ["page", "home", "landing", "public"],
 *   "version": "v1.0.2",
 *   "author": "Chad A. Reesey",
 *   "email": "developer@thenagrygamershow.com",
 *   "updated": "2025-06-19",
 *   "description": "Main landing page for the application"
 * }
 */

const Home = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to TAGS</h1>
        <p className="text-xl text-muted-foreground mb-8">
          The Angry Gamer Show - Your premier destination for gaming content, streamers, and community
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Streamers</h3>
            <p className="text-muted-foreground">
              Discover amazing streamers and content creators in our community
            </p>
          </div>
          
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Tournaments</h3>
            <p className="text-muted-foreground">
              Join exciting gaming tournaments and compete with the best
            </p>
          </div>
          
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Community</h3>
            <p className="text-muted-foreground">
              Connect with fellow gamers and be part of something bigger
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
