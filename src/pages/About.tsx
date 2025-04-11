import { PageLayout } from "@/components/PageLayout";

const About = () => {
  return (
    <PageLayout 
      title="About Us" 
      description="Learn more about The Angry Gamer Show and our mission"
    >
      <div className="prose prose-lg dark:prose-invert">
        <p>
          The Angry Gamer Show is a community-driven platform dedicated to bringing gamers together from around the world. Founded in 2023, we've grown into a thriving ecosystem of players, creators, and enthusiasts.
        </p>

        <h2>Our Mission</h2>
        <p>
          We aim to create a positive and inclusive gaming environment where players can connect, compete, and learn. Our focus is on building communities that celebrate the joy of gaming while providing educational resources and events.
        </p>

        <h2>Our Story</h2>
        <p>
          Chad Reesey didn’t stumble into tech — he earned his way into it, one system, one lesson, and one mission-critical decision at a time.
        </p>
        <p>
          His journey started early, delivering newspapers at age 12 in small-town America — learning consistency, self-reliance, and the value of earning every dollar. He went on to achieve the rank of Eagle Scout before graduating high school, a milestone rooted in perseverance and leadership.
        </p>
        <p>
          Chad then enlisted in the U.S. Air Force and was deployed to Camp Eggers in downtown Kabul, Afghanistan. Officially a supply clerk, he operated as an information systems manager in a war zone — keeping logistics online, managing infrastructure under pressure, and even supporting convoy operations in volatile conditions.
        </p>
        <p>
          After returning home, Chad entered civilian IT and engineering, building secure systems, automating operations, modernizing tech stacks, and designing infrastructure that doesn’t just work — it holds up under stress.
        </p>
        <p>
          Today, as founder of The Angry Gamer Show and its tech stack, he’s building the tools he wishes he’d had: systems that are stable, secure, scalable, and developer-friendly. Chad leads with discipline, builds with intention, and treats every project like it needs to survive the unexpected — because he knows some of them will.
        </p>

        <h2>Our Team</h2>
        <p>
          Our passionate team includes gaming industry veterans, content creators, and community leaders who are dedicated to improving the gaming experience for everyone.
        </p>

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
export const metadata = {
  title: "About Us",
  description: "Learn more about The Angry Gamer Show and our mission",
};