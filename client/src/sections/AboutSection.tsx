import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import CodeSnippet from "@/components/CodeSnippet";

const codeSnippet = `<span class="text-secondary">def</span> <span class="text-accent">about_me</span>():
    <span class="text-primary">return</span> {
        <span class="text-primary">"name"</span>: <span class="text-secondary">"Susmith Reddy"</span>,
        <span class="text-primary">"role"</span>: <span class="text-secondary">"Data Engineer"</span>,
        <span class="text-primary">"languages"</span>: [<span class="text-secondary">"Python"</span>, <span class="text-secondary">"SQL"</span>, <span class="text-secondary">"C++"</span>],
        <span class="text-primary">"tools"</span>: [<span class="text-secondary">"Spark"</span>, <span class="text-secondary">"Redshift"</span>, <span class="text-secondary">"Tableau"</span>],
        <span class="text-primary">"interests"</span>: [<span class="text-secondary">"Machine Learning"</span>, <span class="text-secondary">"Data Visualization"</span>]
    }`;

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6 lg:px-24 relative">
      <div className="container mx-auto">
        <SectionHeading number="01" title="About Me" />
        
        <div className="grid md:grid-cols-5 gap-12">
          <motion.div 
            className="md:col-span-3"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-muted-foreground mb-4">
              Hello! I'm Susmith, a data engineer with a passion for building efficient data systems and extracting meaningful insights.
              My journey in the world of data began during my internship at Gifteria, where I discovered my love for
              transforming raw data into actionable intelligence.
            </p>
            <p className="text-muted-foreground mb-4">
              Fast-forward to today, and I've had the privilege of working at various organizations, from retail giants like&nbsp;
              <a href="#experience" className="text-primary hover:underline">Tesco</a> to healthcare innovators like&nbsp;
              <a href="#experience" className="text-primary hover:underline">Wellstar Health System</a>. My focus is on creating scalable
              data pipelines and implementing machine learning solutions that drive business value.
            </p>
            <p className="text-muted-foreground mb-4">
              When I'm not coding or optimizing SQL queries, you'll find me exploring the latest developments in AI and
              contributing to open-source projects. I believe in continuous learning and staying ahead of the curve in this
              rapidly evolving field.
            </p>
            
            <CodeSnippet code={codeSnippet} />
          </motion.div>
          
          <motion.div 
            className="md:col-span-2 flex justify-center md:justify-end items-start"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative group w-64 h-64">
              <div className="absolute inset-0 rounded border-2 border-primary group-hover:translate-x-3 group-hover:translate-y-3 transition-all duration-300"></div>
              <div className="relative z-10 w-64 h-64 rounded bg-muted flex items-center justify-center overflow-hidden">
                <i className='bx bxs-user-circle text-8xl text-primary'></i>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
