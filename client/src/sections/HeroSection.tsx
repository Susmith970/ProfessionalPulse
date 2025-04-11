import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <motion.section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-center items-start px-6 lg:px-24 pt-24 pb-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto z-10">
        <motion.p 
          className="text-primary font-mono mb-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Hi, my name is
        </motion.p>
        
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-bold font-space text-foreground mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <span className="glitch-effect" data-text="Susmith Reddy">Susmith Reddy</span>
        </motion.h1>
        
        <motion.h2 
          className="text-3xl md:text-5xl lg:text-6xl font-bold font-space text-muted-foreground mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <TypeAnimation
            sequence={[
              'I build data-driven solutions.',
              2000,
              'I create intelligent systems.',
              2000,
              'I transform data into insights.',
              2000
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            className="typing-effect"
          />
        </motion.h2>
        
        <motion.p 
          className="text-muted-foreground max-w-xl mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          I'm a data engineer specializing in building exceptional data pipelines, 
          ETL processes, and machine learning systems. Currently, I'm focused on 
          building scalable, data-driven applications at&nbsp;
          <a href="#experience" className="text-primary hover:underline">
            Wellstar Health System
          </a>.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <motion.a 
            href="#projects" 
            className="px-6 py-3 border-2 border-primary text-primary rounded font-medium hover:bg-primary hover:bg-opacity-10 transition-all duration-300 text-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Check out my work
          </motion.a>
          <motion.a 
            href="#contact" 
            className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded hover:bg-opacity-90 transition-all duration-300 text-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Get in touch
          </motion.a>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ 
          delay: 1,
          y: {
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse"
          }
        }}
      >
        <a href="#about" className="text-primary">
          <i className='bx bx-chevron-down text-3xl'></i>
        </a>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
