import { motion } from "framer-motion";
import { Certification } from "@/types";

interface CertificationCardProps {
  certification: Certification;
  index: number;
}

const CertificationCard = ({ certification, index }: CertificationCardProps) => {
  const { title, issuer, date, icon, color } = certification;

  // Alternate border colors
  const borderColor = 
    index % 3 === 0 ? "border-primary" : 
    index % 3 === 1 ? "border-secondary" : 
    "border-accent";

  // Matching text color for the date
  const textColor =
    index % 3 === 0 ? "text-primary" :
    index % 3 === 1 ? "text-secondary" :
    "text-accent";

  return (
    <motion.div 
      className={`bg-card p-6 rounded-lg shadow-md border-l-4 ${borderColor}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="flex justify-between items-start">
        <h4 className="text-lg font-medium text-foreground">{title}</h4>
        <i className={`bx ${icon} text-2xl ${textColor}`}></i>
      </div>
      <p className="text-muted-foreground mt-2">{issuer}</p>
      <p className={`text-xs ${textColor} mt-4`}>Issue Date: {date}</p>
    </motion.div>
  );
};

export default CertificationCard;
