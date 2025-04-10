import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import { experiences } from "@/lib/constants";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 px-6 lg:px-24 relative bg-card/20">
      <div className="container mx-auto">
        <SectionHeading number="02" title="Experience" />
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <ExperienceTimeline experiences={experiences} />
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
