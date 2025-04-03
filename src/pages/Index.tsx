import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { GamepadIcon, UsersIcon, MessageSquareIcon, TrophyIcon, CodeIcon, DumbbellIcon, RadioIcon, WrenchIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { NavigationBar } from "@/components/NavigationBar";
import { Footer } from "@/components/Footer";
import { DiscordWidget } from "@/components/DiscordWidget";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavigationBar />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 md:px-8 bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">The Angry Gamer Show</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200">
                Join our thriving gaming community where players connect, share, and compete.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600">
                  Join Now
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Explore Games
                </Button>
              </div>
            </div>
            <div className="relative hidden md:block">
              <div className="aspect-video bg-black/30 rounded-lg backdrop-blur-sm border border-white/10 shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/30 to-transparent"></div>
                <div className="w-full h-full flex items-center justify-center">
                  <GamepadIcon className="w-32 h-32 text-white/70" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Join The Angry Gamer Show?</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our community offers everything gamers need to connect, compete, and share their passion.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <UsersIcon className="h-8 w-8 mb-2 text-indigo-600 dark:text-indigo-400" />
                <CardTitle>Connect with Gamers</CardTitle>
                <CardDescription>
                  Find friends who share your gaming interests and build lasting connections.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Our matching system helps you find players with similar interests and skill levels.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full">Find Players</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <TrophyIcon className="h-8 w-8 mb-2 text-amber-500" />
                <CardTitle>Compete in Tournaments</CardTitle>
                <CardDescription>
                  Join organized competitions and prove your skills against the best.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Regular tournaments across popular games with rewards for top performers.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full">View Tournaments</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <MessageSquareIcon className="h-8 w-8 mb-2 text-green-600 dark:text-green-400" />
                <CardTitle>Discuss & Share</CardTitle>
                <CardDescription>
                  Join conversations about your favorite games, strategies, and gaming news.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Dedicated forums for every popular game with active moderation and support.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full">Explore Forums</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Discord Widget Section */}
      <section className="py-16 px-4 md:px-8 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Discord Community</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Connect with other gamers in real-time. See who's online and join the conversation!
            </p>
          </div>
          
          <div className="flex justify-center">
            <DiscordWidget />
          </div>
        </div>
      </section>

      {/* Community Showcase */}
      <section className="py-16 px-4 md:px-8 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Communities</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Check out our organizations and find your perfect gaming home.
            </p>
          </div>
          
          <div className="space-y-10">
            {/* Gaming Organizations */}
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <GamepadIcon className="mr-2 h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                Gaming Organizations
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold mb-2">Squadron of Gamers</h3>
                  <Badge className="mb-3">FPS Gaming Org</Badge>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Competitive FPS gaming focused on teamwork and strategy.
                  </p>
                  <Button variant="outline" size="sm">Learn More</Button>
                </div>
              </div>
            </div>

            {/* Sports Clubs */}
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <DumbbellIcon className="mr-2 h-6 w-6 text-green-600 dark:text-green-400" />
                Sports Clubs
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold mb-2">Johnstown Chiefs</h3>
                  <Badge className="mb-3">EASHL Hockey Club</Badge>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Competitive NHL gaming club focused on teamwork and strategy.
                  </p>
                  <Button variant="outline" size="sm">Learn More</Button>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold mb-2">Horny Ponies</h3>
                  <Badge className="mb-3">EASHL Hockey Club</Badge>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Recreational NHL gaming club focused on fun and camaraderie.
                  </p>
                  <Button variant="outline" size="sm">Learn More</Button>
                </div>
              </div>
            </div>

            {/* Technology & Engineering */}
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <WrenchIcon className="mr-2 h-6 w-6 text-amber-600 dark:text-amber-400" />
                Technology & Engineering
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold mb-2">The Angry Gamer Show Developers</h3>
                  <Badge className="mb-3">Educational & Team Learning</Badge>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Learning and developing skills in game development and programming.
                  </p>
                  <Button variant="outline" size="sm">Learn More</Button>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold mb-2">Ham Shack, Cigars, Bourbon, Scotch</h3>
                  <Badge className="mb-3">Ham Radio Org</Badge>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Amateur radio enthusiasts who enjoy fine spirits and cigars.
                  </p>
                  <Button variant="outline" size="sm">Learn More</Button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Don't see what you're looking for? New organizations are always being added!
            </p>
            <Button variant="outline">Contact Us to Create a New Organization</Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-r from-cyan-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Level Up Your Gaming Experience?</h2>
          <p className="text-xl mb-8">
            Join thousands of gamers already on The Angry Gamer Show and take your gaming to the next level.
          </p>
          <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
            Create Your Account
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
