import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

interface SkillBarProps {
  name: string;
  percentage: number;
}

const SkillBar = ({ name, percentage }: SkillBarProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div className="mb-6" ref={ref}>
      <div className="flex justify-between mb-2">
        <span className="text-foreground">{name}</span>
        <span className="text-primary">{percentage}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${percentage}%` } : { width: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        ></motion.div>
      </div>
    </div>
  );
};

export default SkillBar;
