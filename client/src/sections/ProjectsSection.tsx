import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/constants";

const ProjectsSection = () => {
  // Separate featured project from other projects
  const featuredProject = projects[0];
  const otherProjects = projects.slice(1);

  return (
    <section id="projects" className="py-20 px-6 lg:px-24 relative">
      <div className="container mx-auto">
        <SectionHeading number="03" title="Projects" />
        
        {/* Featured Project */}
        <div className="mb-24">
          <motion.h3 
            className="text-2xl font-bold text-foreground mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Featured Project
          </motion.h3>
          
          <ProjectCard project={featuredProject} isFeature={true} />
        </div>
        
        {/* Other Projects Grid */}
        <motion.h3 
          className="text-2xl font-bold text-foreground mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Other Noteworthy Projects
        </motion.h3>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
          viewport={{ once: true }}
        >
          {otherProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
