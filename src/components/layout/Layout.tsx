import { type ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main id="main-content" className="flex-grow pt-20 md:pt-24" role="main">
        {children}
      </main>
      <Footer />
    </div>
  )
}