import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import SkillBar from "@/components/SkillBar";
import CertificationCard from "@/components/CertificationCard";
import { technicalSkills, toolCategories, certifications } from "@/lib/constants";

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-6 lg:px-24 relative bg-card/20">
      <div className="container mx-auto">
        <SectionHeading number="04" title="Skills" />
        
        <div className="grid md:grid-cols-2 gap-16">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-foreground mb-8">Technical Skills</h3>
            
            {technicalSkills.map((skill) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                percentage={skill.percentage}
              />
            ))}
          </motion.div>
          
          {/* Tools & Technologies */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-foreground mb-8">Tools & Technologies</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {toolCategories.map((category) => (
                <motion.div 
                  key={category.name}
                  className="bg-card p-6 rounded-lg shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-primary font-medium mb-4">{category.name}</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    {category.tools.map((tool) => (
                      <li key={tool} className="flex items-center">
                        <i className='bx bx-check-circle text-primary mr-2'></i>
                        {tool}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* Certifications */}
        <motion.div 
          className="mt-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-foreground mb-8">Certifications</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((certification, index) => (
              <CertificationCard
                key={certification.title}
                certification={certification}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
