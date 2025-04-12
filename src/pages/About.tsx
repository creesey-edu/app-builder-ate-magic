import { PageLayout } from "@/components/PageLayout";
import { Github, Linkedin } from "lucide-react";

const About = () => {
  return (
    <PageLayout
      title="About The Organization"
      description="Learn more about The Angry Gamer Show and our mission"
    >
      <div className="bg-background p-6 md:p-10 rounded-2xl shadow-lg border border-muted">
        <article className="prose prose-neutral dark:prose-invert prose-lg max-w-none space-y-16">

          {/* Organization Overview */}
          <section>
            <p>
              The Angry Gamer Show is a community-driven platform dedicated to bringing gamers together from around the world. Founded in 2023, we've grown into a thriving ecosystem of players, creators, and enthusiasts.
            </p>
          </section>

          {/* Mission */}
          <section>
            <h2 className="text-2xl font-semibold text-primary border-b border-muted pb-1">Our Mission</h2>
            <p>
              We aim to create a positive and inclusive gaming environment where players can connect, compete, and learn. Our focus is on building communities that celebrate the joy of gaming while providing educational resources and events.
            </p>
          </section>

          {/* Values */}
          <section>
            <h2 className="text-2xl font-semibold text-primary border-b border-muted pb-1">Our Values</h2>
            <p>We believe in:</p>
            <ul className="list-disc pl-5 space-y-2 marker:text-primary">
              <li>Inclusivity and respect for all gamers</li>
              <li>Fair play and sportsmanship</li>
              <li>Continuous learning and skill development</li>
              <li>Creating meaningful connections through shared interests</li>
            </ul>
          </section>

          {/* Infrastructure */}
          <section>
            <h2 className="text-2xl font-semibold text-primary border-b border-muted pb-1">Our Infrastructure</h2>
            <div className="text-sm text-muted-foreground space-y-2">
              <p>
                🔐 Our development has transitioned from GitHub to private infrastructure.
                Code is now securely maintained in-house through our Azure DevOps environment to ensure tighter control,
                enhanced security, and streamlined internal collaboration.
              </p>
              <p>
                For legacy reference, our archived GitHub organization remains publicly viewable at: {" "}
                <a
                  href="https://github.com/theangrygamershowproductions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline hover:text-primary/80"
                >
                  The Angry Gamer Show Productions (Archived)
                </a>
              </p>
            </div>
          </section>

          {/* Founder and Team Section */}
          <section>
            <h2 className="text-2xl font-semibold text-primary border-b border-muted pb-1">Meet Our Founder</h2>
            <div className="bg-muted p-6 md:p-8 rounded-xl border-l-4 border-primary shadow-sm space-y-4">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <img
                  src="/images/chad.jpg"
                  alt="Chad Reesey"
                  className="w-40 h-40 rounded-xl object-cover shadow-lg border border-muted"
                />
                <div className="space-y-4">
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
                </div>
              </div>
              <div className="text-sm text-muted-foreground mt-6">
                🔗 Connect with Chad:
                <div className="flex flex-col gap-2 mt-2">
                  <a
                    href="https://www.linkedin.com/in/creesey"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:text-primary/80"
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn Profile
                  </a>

                  <a
                    href="https://github.com/creesey-edu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:text-primary/80"
                  >
                    <Github className="w-4 h-4" />
                    GitHub: creesey-edu
                  </a>

                  <a
                    href="https://github.com/reesey275"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:text-primary/80"
                  >
                    <Github className="w-4 h-4" />
                    GitHub: reesey275
                  </a>

                  <a
                    href="https://github.com/theangrygamershowproductions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:text-primary/80"
                  >
                    <Github className="w-4 h-4" />
                    GitHub: The Angry Gamer Show Productions
                  </a>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-primary border-b border-muted pb-1 mt-12">Our Team</h2>
            <p>
              Our passionate team includes gaming industry veterans, content creators, and community leaders who are dedicated to improving the gaming experience for everyone.
            </p>
          </section>
        </article>
      </div>
    </PageLayout>
  );
};

export default About;
