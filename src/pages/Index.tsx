import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ResearchSection from '@/components/sections/ResearchSection';
import ContactSection from '@/components/sections/ContactSection';

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      {/* El contenedor central crece para empujar el footer al fondo */}
      <main className="flex-1 w-full relative">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ResearchSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;