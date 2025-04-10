import Layout from "@/components/Layout";
import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import ExperienceSection from "@/sections/ExperienceSection";
import ProjectsSection from "@/sections/ProjectsSection";
import SkillsSection from "@/sections/SkillsSection";
import ContactSection from "@/sections/ContactSection";

const Home = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </Layout>
  );
};

export default Home;
