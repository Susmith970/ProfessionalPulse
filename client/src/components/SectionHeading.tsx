import { motion } from "framer-motion";

interface SectionHeadingProps {
  number: string;
  title: string;
}

const SectionHeading = ({ number, title }: SectionHeadingProps) => {
  return (
    <motion.div 
      className="flex items-center gap-4 mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold font-space text-foreground">
        <span className="text-primary">{number}.</span> {title}
      </h2>
      <div className="h-px bg-muted flex-grow"></div>
    </motion.div>
  );
};

export default SectionHeading;
