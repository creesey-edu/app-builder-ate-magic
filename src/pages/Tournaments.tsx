
import { PageLayout } from "@/components/PageLayout";

const Tournaments = () => {
  return (
    <PageLayout 
      title="Tournaments" 
      description="Compete in exciting gaming tournaments and win prizes"
    >
      <div className="prose prose-lg dark:prose-invert">
        <p>Find upcoming tournaments, register for competitions, and track your performance against other players.</p>
        <p>Check back soon for more content!</p>
      </div>
    </PageLayout>
  );
};

export default Tournaments;
