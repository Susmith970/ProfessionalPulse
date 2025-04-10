import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { useMediaQuery } from "@/hooks/use-mobile";

const navItems = [
  { name: "About", link: "#about", number: "01" },
  { name: "Experience", link: "#experience", number: "02" },
  { name: "Projects", link: "#projects", number: "03" },
  { name: "Skills", link: "#skills", number: "04" },
  { name: "Contact", link: "#contact", number: "05" }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [, setLocation] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (link: string) => {
    setIsOpen(false);
    if (link.startsWith("#")) {
      const element = document.querySelector(link);
      if (element) {
        window.scrollTo({
          top: element.getBoundingClientRect().top + window.scrollY - 80,
          behavior: "smooth"
        });
      }
    } else {
      setLocation(link);
    }
  };

  return (
    <motion.nav
      className={`fixed w-full z-50 backdrop-filter backdrop-blur-md py-4 shadow-md transition-all duration-300 ${
        isScrolled ? "bg-opacity-90" : "bg-opacity-60"
      } bg-background`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 500 }}
        >
          <Link href="/" className="text-2xl font-bold text-primary font-space">
            JD<span className="text-secondary">.</span>
          </Link>
        </motion.div>

        <div className="hidden md:flex space-x-8 text-sm font-medium">
          {navItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.link}
              className="text-foreground hover:text-primary transition-colors duration-300"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.link);
              }}
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 500 }}
            >
              <span className="text-primary">{item.number}.</span> {item.name}
            </motion.a>
          ))}
        </div>

        <button
          className="md:hidden text-foreground hover:text-primary"
          onClick={() => setIsOpen(!isOpen)}
        >
          <i className={`bx ${isOpen ? "bx-x" : "bx-menu"} text-2xl`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobile && (
        <motion.div
          className={`md:hidden ${isOpen ? "block" : "hidden"}`}
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isOpen ? 1 : 0, 
            height: isOpen ? "auto" : 0 
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-4 py-5 bg-card flex flex-col space-y-6 font-medium">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.link}
                className="text-foreground hover:text-primary"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.link);
                }}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 500 }}
              >
                <span className="text-primary">{item.number}.</span> {item.name}
              </motion.a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
