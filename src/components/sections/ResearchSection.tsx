import { ArrowUpRight, BookOpen, GraduationCap } from 'lucide-react';
import { researchArticles } from '@/data/resume';

const ResearchSection = () => {
  return (
    <section id="investigacion" className="py-24 bg-background border-t border-border/50">
      <div className="container px-4 mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-mono text-sm">04</span>
          <div className="h-px w-12 bg-primary" />
          <h2 className="text-xl font-medium text-muted-foreground uppercase tracking-widest">Investigación Académica</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Context */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-3xl font-bold">
              Profundizando en el <br/> <span className="text-primary">Estado del Arte</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Como estudiante finalista, mi foco está en cerrar la brecha entre la teoría académica y la aplicación práctica. Actualmente dedico mi investigación al desarrollo de herramientas de seguridad accesibles.
            </p>
            
            <div className="p-6 bg-secondary/30 rounded-lg border border-border mt-8">
              <div className="flex items-start gap-3 mb-2">
                <GraduationCap className="text-primary mt-1" size={20} />
                <h4 className="font-bold">Proyecto de Grado</h4>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Desarrollo de un Escáner Modular para la Detección Automatizada de Vulnerabilidades en Aplicaciones Web.
              </p>
              <div className="text-xs font-mono text-primary/80">
                Status: En desarrollo activo
              </div>
            </div>
          </div>

          {/* Right Column: Articles/Notes */}
          <div className="lg:col-span-8">
            <div className="space-y-4">
              {researchArticles.map((article) => (
                <article
                  key={article.title}
                  className="group block p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-all hover:shadow-sm"
                >
                  <a href={article.link} className="flex flex-col sm:flex-row gap-4 sm:items-start justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-primary/10 text-primary">
                          {article.category}
                        </span>
                        <span className="text-xs text-muted-foreground font-mono">
                          {article.date}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-sm text-muted-foreground max-w-xl">
                        {article.excerpt}
                      </p>
                    </div>
                    
                    <div className="mt-4 sm:mt-0 self-start">
                      {article.link !== '#' ? (
                        <ArrowUpRight size={20} className="text-muted-foreground group-hover:text-primary group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                      ) : (
                        <BookOpen size={20} className="text-muted-foreground/50" />
                      )}
                    </div>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;