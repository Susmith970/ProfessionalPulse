import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

const AnimatedBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const particlesCount = 25;
    const particles: HTMLDivElement[] = [];

    // Clear existing particles
    container.innerHTML = "";

    // Create new particles
    for (let i = 0; i < particlesCount; i++) {
      const particle = document.createElement("div");
      const size = Math.random() * 5 + 2;
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;

      particle.style.position = "absolute";
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.borderRadius = "50%";
      particle.style.left = `${posX}%`;
      particle.style.top = `${posY}%`;
      particle.style.opacity = `${Math.random() * 0.3 + 0.1}`;
      
      // Alternate between primary and secondary colors
      if (i % 3 === 0) {
        particle.style.backgroundColor = "hsl(var(--primary))";
      } else if (i % 3 === 1) {
        particle.style.backgroundColor = "hsl(var(--secondary))";
      } else {
        particle.style.backgroundColor = "hsl(var(--accent))";
      }

      // Apply random animation delay and duration
      particle.style.animation = `float ${Math.random() * 10 + 5}s infinite ease-in-out`;
      particle.style.animationDelay = `${Math.random() * 5}s`;

      container.appendChild(particle);
      particles.push(particle);
    }

    // Add blurred blobs
    const primaryBlob = document.createElement("div");
    primaryBlob.className = "absolute w-1/3 h-1/3 rounded-full bg-primary opacity-10 blur-[40px] top-0 left-0 z-0";
    container.appendChild(primaryBlob);

    const secondaryBlob = document.createElement("div");
    secondaryBlob.className = "absolute w-1/2 h-1/2 rounded-full bg-secondary opacity-10 blur-[60px] bottom-0 right-0 z-0";
    container.appendChild(secondaryBlob);

    // Add keyframe animation for floating effect
    const style = document.createElement("style");
    style.textContent = `
      @keyframes float {
        0% { transform: translateY(0) translateX(0); }
        50% { transform: translateY(-20px) translateX(15px); }
        100% { transform: translateY(0) translateX(0); }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <motion.div
      ref={containerRef}
      className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    ></motion.div>
  );
};

export default AnimatedBackground;
