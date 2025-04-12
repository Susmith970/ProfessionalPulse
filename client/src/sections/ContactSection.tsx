import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-6 lg:px-24 relative">
      <div className="container mx-auto max-w-3xl text-center">
        <motion.p 
          className="text-primary font-mono mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          05. What's Next?
        </motion.p>
        
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-space"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Get In Touch
        </motion.h2>
        
        <motion.p 
          className="text-muted-foreground mb-12 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          I'm currently looking for new opportunities in data engineering and machine learning. 
          Whether you have a question or just want to say hi, I'll do my best to get back to you!
        </motion.p>
        
        <ContactForm />
        
        <motion.div 
          className="mt-16 flex justify-center space-x-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.a 
            href = "https://github.com/Susmith970" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 500 }}
          >
            <FaGithub className="text-3xl" />
          </motion.a>
          
          <motion.a 
            href= "https://linkedin.com/in/susmith-p-06871716b" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 500 }}
          >
            <FaLinkedin className="text-3xl" />
          </motion.a>
          
          <motion.a 
            href="https://twitter.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 500 }}
          >
            <FaTwitter className="text-3xl" />
          </motion.a>
          
          <motion.a 
            href="mailto:susmithreddyms@gmail.com" 
            className="text-muted-foreground hover:text-primary transition-colors"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 500 }}
          >
            <MdEmail className="text-3xl" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
