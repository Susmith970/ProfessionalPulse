import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Experience } from "@/types";

interface ExperienceTimelineProps {
  experiences: Experience[];
}

const ExperienceTimeline = ({ experiences }: ExperienceTimelineProps) => {
  return (
    <div className="timeline">
      {experiences.map((experience, index) => (
        <TimelineItem 
          key={experience.company}
          experience={experience}
          isLeft={index % 2 === 0}
          index={index}
        />
      ))}
    </div>
  );
};

interface TimelineItemProps {
  experience: Experience;
  isLeft: boolean;
  index: number;
}

const TimelineItem = ({ experience, isLeft, index }: TimelineItemProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0, x: isLeft ? -50 : 50 },
    visible: { opacity: 1, x: 0 }
  };

  const { title, company, period, description, skills } = experience;

  // Responsive positioning
  const positionClasses = isLeft 
    ? "left-0 md:pr-8 md:pl-0 pl-[70px]" 
    : "md:left-1/2 left-0 md:pl-8 pl-[70px]";

  return (
    <motion.div
      ref={ref}
      className={`timeline-container relative w-full md:w-1/2 py-4 px-4 ${positionClasses}`}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <div className="content bg-card p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4 flex-wrap">
          <h3 className="text-xl font-bold text-foreground">{title}</h3>
          <span className="text-primary text-sm">{period}</span>
        </div>
        <h4 className="text-lg font-medium text-secondary mb-4">{company}</h4>
        <ul className="space-y-3 text-muted-foreground">
          {description.map((item, i) => (
            <li key={i} className="flex">
              <i className="bx bx-right-arrow text-primary mt-1 mr-2"></i>
              <p>{item}</p>
            </li>
          ))}
        </ul>
        
        <div className="mt-6 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span 
              key={skill} 
              className="px-3 py-1 bg-background rounded-full text-xs text-primary"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceTimeline;
