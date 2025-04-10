import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AnimatedBackground from "./AnimatedBackground";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <AnimatedBackground />
      <div className="z-10 relative">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
