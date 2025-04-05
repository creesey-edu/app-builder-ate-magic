
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const StreamerCTA = () => {
  return (
    <section className="mt-10 bg-primary/5 p-8 rounded-lg">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Want to become an official streamer?</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Join our Elite Streamer program to get featured on this page, receive special Discord roles, and gain more visibility in our community.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild className="bg-indigo-600 hover:bg-indigo-700">
            <Link to="/premium">Join Elite Streamer Program</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link to="/streamer-analytics">View Analytics Dashboard</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
