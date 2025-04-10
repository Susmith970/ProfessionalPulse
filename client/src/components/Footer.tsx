import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer 
      className="py-6 bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <div className="container mx-auto px-6 text-center">
        <p className="text-muted-foreground text-sm">
          Designed & Built with <span className="text-primary">♥</span> © {new Date().getFullYear()}
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
