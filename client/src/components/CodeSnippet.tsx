import { motion } from "framer-motion";

interface CodeSnippetProps {
  code: string;
}

const CodeSnippet = ({ code }: CodeSnippetProps) => {
  return (
    <motion.div 
      className="relative bg-card rounded-lg p-6 my-6 overflow-x-auto font-mono text-sm"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
      <pre className="text-foreground">
        <code dangerouslySetInnerHTML={{ __html: code }}></code>
      </pre>
    </motion.div>
  );
};

export default CodeSnippet;
