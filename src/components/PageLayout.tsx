
import React from "react";
import { NavigationBar } from "./NavigationBar";
import { Footer } from "./Footer";

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
  description?: string;
}

export const PageLayout = ({ children, title, description }: PageLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavigationBar />
      
      <main className="flex-grow">
        <div className="container mx-auto py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">{title}</h1>
            {description && <p className="text-xl text-muted-foreground mb-8">{description}</p>}
            {children}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};