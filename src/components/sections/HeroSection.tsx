import { ArrowDown } from 'lucide-react';
import { siteConfig } from '@/data/resume';

const HeroSection = () => {
  return (
    <section id="sobre-mi" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Background Elements (Subtle) */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />

      <div className="section-container relative z-10 text-center">
        <div className="animate-fade-in-up">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
            Disponible para colaborar
          </span>
          
          <h1 className="heading-xl mb-6">
            Hola, soy <span className="text-gradient">{siteConfig.name}</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-medium text-foreground/80 mb-6 max-w-2xl mx-auto">
            {siteConfig.title}
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            {siteConfig.tagline}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#proyectos" className="btn-primary min-w-[160px]">
              Ver Proyectos
            </a>
            <a href="#contacto" className="btn-outline min-w-[160px]">
              Contactar
            </a>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-12 flex items-center justify-center gap-6 animate-fade-in-up delay-100">
          {siteConfig.socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110 duration-200"
              aria-label={social.name}
            >
              <social.icon size={24} />
            </a>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground/50">
        <ArrowDown size={24} />
      </div>
    </section>
  );
};

export default HeroSection;