import { aboutStats, philosophy, siteConfig } from '@/data/resume';

const AboutSection = () => {
  return (
    <section id="sobre-mi" className="py-24 relative overflow-hidden bg-background">
      <div className="container px-4 mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-primary font-mono text-sm">01</span>
          <div className="h-px w-12 bg-primary" />
          <h2 className="text-xl font-medium text-muted-foreground uppercase tracking-widest">Sobre mí</h2>
        </div>

        {/* Asymmetric content layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left column - Introduction */}
          <div className="lg:col-span-5 lg:col-start-1">
            <div className="relative">
              <div className="bg-secondary/20 border border-border p-8 md:p-10 rounded-lg">
                <h3 className="text-3xl font-bold mb-6 text-foreground">
                  Ingeniería con
                  <span className="text-primary block">Propósito y Precisión</span>
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Soy {siteConfig.name}, estudiante de último año de Licenciatura en Computación. Mi trayectoria no se define por años en una oficina, sino por la intensidad con la que abordo cada problema.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Me muevo entre el <strong className="text-foreground">desarrollo de software</strong> y la <strong className="text-foreground">ciberseguridad</strong>. No solo construyo aplicaciones; analizo cómo pueden romperse para hacerlas más fuertes desde el primer commit.
                </p>
              </div>
            </div>
          </div>

          {/* Right column - Philosophy */}
          <div className="lg:col-span-6 lg:col-start-7 lg:-mt-8 space-y-10">
            {philosophy.map((item, index) => (
              <div key={index} className="group flex gap-4">
                <div className="mt-1">
                  <div className="p-2 rounded bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <item.icon size={20} />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-border/50">
          {aboutStats.map((stat, index) => (
            <div key={index} className="text-center md:text-left">
              <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-mono text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;