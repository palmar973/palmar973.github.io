import { ArrowUpRight, Github } from 'lucide-react';
import { projects, Project } from '@/data/resume';

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const isFeatured = project.featured;
  
  return (
    <article
      className={`group relative flex flex-col ${
        isFeatured 
          ? 'md:col-span-2 bg-secondary/20 border-primary/10' 
          : 'bg-card border-border'
      } border rounded-lg p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-lg`}
    >
      {/* Status Badge */}
      <div className="absolute top-6 right-6 flex gap-3 items-center">
         <span className={`text-[10px] font-mono px-2 py-1 rounded border ${
            project.status === 'Research' ? 'border-blue-500/30 text-blue-500' :
            project.status === 'Production' ? 'border-green-500/30 text-green-500' :
            'border-yellow-500/30 text-yellow-500'
         }`}>
           {project.status.toUpperCase()}
         </span>
         <span className="text-mono text-xs text-muted-foreground/50">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <div className="mb-auto">
        <h3 className={`${isFeatured ? 'text-2xl' : 'text-xl'} font-bold mb-3 group-hover:text-primary transition-colors`}>
          {project.title}
        </h3>
        
        <p className="text-muted-foreground mb-6 leading-relaxed max-w-2xl">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((tech) => (
            <span key={tech} className="px-2 py-1 bg-background rounded-md text-xs font-medium text-foreground/80 border border-border">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Links */}
      <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border/50">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
        >
          {project.status === 'Research' ? 'Ver Investigación' : 'Ver Proyecto'}
          <ArrowUpRight size={16} />
        </a>
        
        {project.github && (
           <a
           href={project.github}
           target="_blank"
           rel="noopener noreferrer"
           className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
         >
           <Github size={16} />
           <span>Código</span>
         </a>
        )}
      </div>
    </article>
  );
};

const ProjectsSection = () => {
  return (
    <section id="proyectos" className="py-24 bg-background relative">
      <div className="container px-4 mx-auto">
        {/* Section header */}
        <div className="flex items-end justify-between mb-16">
          <div>
            <span className="text-primary font-mono text-sm tracking-wider uppercase mb-2 block">Portafolio</span>
            <h2 className="text-3xl md:text-4xl font-bold">Proyectos Seleccionados</h2>
          </div>
          <div className="hidden md:block h-[1px] flex-1 bg-border mx-8 translate-y-[-10px]" />
          <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer" className="hidden md:inline-flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
            Ver GitHub completo
            <ArrowUpRight size={16} />
          </a>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;