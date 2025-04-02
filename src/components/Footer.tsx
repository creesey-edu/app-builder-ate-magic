
import { Link } from "react-router-dom";
import { GamepadIcon, Github, Twitter, Youtube } from "lucide-react";
import { MessageSquare } from "lucide-react"; // Using MessageSquare as a replacement for Discord

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <GamepadIcon className="h-8 w-8 text-cyan-400" />
              <span className="font-bold text-2xl">Eriod</span>
            </Link>
            <p className="text-gray-400 mb-6">
              Your ultimate gaming community platform. Connect, compete, and level up your gaming experience.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <MessageSquare className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Platform</h3>
            <ul className="space-y-2">
              {["Games", "Communities", "Tournaments", "News", "Premium"].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Company</h3>
            <ul className="space-y-2">
              {["About", "Careers", "Blog", "Press", "Contact"].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Support</h3>
            <ul className="space-y-2">
              {["Help Center", "Safety Center", "Community Guidelines", "Terms of Service", "Privacy Policy"].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Eriod Gaming Community. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
