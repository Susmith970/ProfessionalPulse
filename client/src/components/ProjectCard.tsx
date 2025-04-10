import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaBuilding, FaChartLine, FaDatabase } from "react-icons/fa";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  isFeature?: boolean;
}

const ProjectCard = ({ project, isFeature = false }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const { title, description, tags, links, icon } = project;
  
  // Render the appropriate icon based on string identifier
  const renderIcon = () => {
    if (icon === "FaBuilding") return <FaBuilding />;
    if (icon === "FaChartLine") return <FaChartLine />;
    if (icon === "FaDatabase") return <FaDatabase />;
    return icon; // Fallback to text if it's not a known icon
  };

  if (isFeature) {
    return (
      <motion.div
        className="mb-24"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="relative grid md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-7 relative group overflow-hidden rounded-lg">
            <div className="relative w-full aspect-video bg-muted rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-background bg-opacity-70 flex items-center justify-center z-10">
                <span className="text-6xl text-primary">{renderIcon()}</span>
              </div>
              <div 
                className={`absolute inset-0 bg-primary bg-opacity-20 opacity-0 group-hover:opacity-100 
                  transition-opacity duration-300 flex items-center justify-center z-20`}
              >
                <div className="flex space-x-6">
                  {links.github && (
                    <a 
                      href={links.github} 
                      className="text-foreground text-2xl hover:text-primary transition-colors"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <FaGithub />
                    </a>
                  )}
                  {links.live && (
                    <a 
                      href={links.live} 
                      className="text-foreground text-2xl hover:text-primary transition-colors"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-5 md:pl-6">
            <p className="text-primary font-mono mb-2">Featured Project</p>
            <h3 className="text-2xl font-bold text-foreground mb-4 font-space">{title}</h3>
            <div className="bg-card p-6 rounded-lg shadow-lg mb-4">
              <p className="text-muted-foreground">{description}</p>
            </div>
            <div className="flex flex-wrap gap-3 mb-6">
              {tags.map((tag) => (
                <span key={tag} className="text-xs text-muted-foreground">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex space-x-4">
              {links.github && (
                <a 
                  href={links.github} 
                  className="text-primary hover:underline flex items-center"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <FaGithub className="mr-2" /> Source Code
                </a>
              )}
              {links.live && (
                <a 
                  href={links.live} 
                  className="text-primary hover:underline flex items-center"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt className="mr-2" /> Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="bg-card rounded-lg p-6 shadow-lg hover:shadow-xl transition-all"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="flex justify-between items-start mb-6">
        <span className="text-4xl text-primary">{renderIcon()}</span>
        <div className="flex space-x-3">
          {links.github && (
            <a 
              href={links.github} 
              className="text-muted-foreground hover:text-primary transition-colors"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          )}
          {links.live && (
            <a 
              href={links.live} 
              className="text-muted-foreground hover:text-primary transition-colors"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaExternalLinkAlt />
            </a>
          )}
        </div>
      </div>
      
      <h4 className="text-xl font-bold text-foreground mb-3 font-space">{title}</h4>
      <p className="text-muted-foreground mb-6">{description}</p>
      
      <div className="flex flex-wrap gap-2 mt-auto">
        {tags.map((tag) => (
          <span key={tag} className="text-xs text-muted-foreground">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
